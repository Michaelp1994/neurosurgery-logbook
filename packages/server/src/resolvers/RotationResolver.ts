import {
    Resolver,
    Query,
    Mutation,
    Arg,
    FieldResolver,
    Root,
    ResolverInterface,
    Authorized,
    Ctx,
} from "type-graphql";
import {
    CreateRotationInput,
    DeleteRotationInput,
    RotationInput,
    UpdateRotationInput,
} from "../inputs/RotationInput";
import { Supervisor } from "../models/Supervisor";
import { UserRole } from "../enums/UserRole";
import { Hospital } from "../models/Hospital";
import { Rotation } from "../models/Rotation";
import { Context } from "apollo-server-core";
import { AuthContext } from "../types";
import { LessThanOrEqual, MoreThanOrEqual } from "typeorm";
import { dataSource } from "../data-source";
import { SetLevel } from "../models/SetLevel";

const rotationRepository = dataSource.getRepository(Rotation);
const hospitalRepository = dataSource.getRepository(Hospital);
const setLevelRepository = dataSource.getRepository(SetLevel);
@Resolver(() => Rotation)
export class RotationResolver implements ResolverInterface<Rotation> {
    @FieldResolver()
    async setLevel(@Root() rotation: Rotation) {
        const setLevel = await setLevelRepository.findOne({
            where: { id: rotation.setLevelId },
        });
        if (!setLevel) throw new Error("Hospital not found!");
        return setLevel;
    }

    @FieldResolver()
    async hospital(@Root() rotation: Rotation) {
        const hospital = await hospitalRepository.findOne({
            where: { id: rotation.hospitalId },
        });
        if (!hospital) throw new Error("Hospital not found!");
        return hospital;
    }

    @FieldResolver()
    async supervisors(@Root() rotation: Rotation) {
        // TODO: fix this up, unneccesary finding via relation
        const newRotation = await rotationRepository.findOne({
            relations: ["supervisors"],
            where: { id: rotation.id },
        });
        if (!newRotation) throw new Error("Consult not found!");
        return newRotation.supervisors;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [Rotation])
    async allRotations(@Ctx() ctx: Context<AuthContext>): Promise<Rotation[]> {
        const rotations = await rotationRepository.find({
            order: {
                id: "ASC",
            },
            where: { userId: ctx.user.id },
        });
        return rotations;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => Rotation)
    async rotation(@Arg("input") input: RotationInput): Promise<Rotation> {
        const rotation = await rotationRepository.findOne({
            where: { id: input.id },
        });
        if (!rotation) throw new Error("No Rotation Found!");
        return rotation;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => Rotation)
    async currentRotation(@Ctx() ctx: Context<AuthContext>): Promise<Rotation> {
        const currentDate = new Date();
        const rotation = await rotationRepository.findOne({
            where: {
                userId: ctx.user.id,
                startDate: LessThanOrEqual(currentDate),
                endDate: MoreThanOrEqual(currentDate),
            },
        });
        if (!rotation) throw new Error("No Rotation Found!");
        return rotation;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Rotation)
    async createRotation(
        @Arg("input") input: CreateRotationInput,
        @Ctx() ctx: Context<AuthContext>
    ): Promise<Rotation> {
        const rotation = rotationRepository.create(input);
        rotation.userId = ctx.user.id;
        if (input.supervisorIds)
            rotation.supervisors = <Supervisor[]>(
                input.supervisorIds.map((id) => ({ id }))
            );
        await rotationRepository.save(rotation);
        return rotation;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Rotation)
    async updateRotation(
        @Arg("input") input: UpdateRotationInput
    ): Promise<Rotation> {
        const rotation = await rotationRepository.findOne({
            where: { id: input.id },
        });
        if (!rotation) throw new Error("Rotation not found!");
        Object.assign(rotation, input);
        if (input.supervisorIds)
            rotation.supervisors = <Supervisor[]>(
                input.supervisorIds.map((id) => ({ id }))
            );
        await rotationRepository.save(rotation);
        return rotation;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Rotation)
    async deleteRotation(
        @Arg("input") input: DeleteRotationInput
    ): Promise<Rotation> {
        const rotation = await rotationRepository.findOne({
            where: { id: input.id },
        });
        if (!rotation) throw new Error("Rotation not found!");
        await rotation.remove();
        return rotation;
    }
}

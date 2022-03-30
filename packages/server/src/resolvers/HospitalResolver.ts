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
    CreateHospitalInput,
    DeleteHospitalInput,
    HospitalInput,
    UpdateHospitalInput,
} from "../inputs/HospitalInput";
import { Hospital } from "../models/Hospital";
import { UserRole } from "../enums/UserRole";
import { Consult } from "../models/Consult";
import { dataSource } from "../data-source";
import { AuthContext } from "../types";
import { Context } from "apollo-server-core";
const consultRepository = dataSource.getRepository(Consult);
const hospitalRepository = dataSource.getRepository(Hospital);

@Resolver(() => Hospital)
export class HospitalResolver implements ResolverInterface<Hospital> {
    @FieldResolver()
    async consults(@Root() hospital: Hospital) {
        const consults = await consultRepository.find({
            where: { hospitalId: hospital.id },
        });
        return consults;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [Hospital])
    async allHospitals(@Ctx() ctx: Context<AuthContext>): Promise<Hospital[]> {
        const hospitals = await hospitalRepository.find({
            order: {
                id: "ASC",
            },
            where: { userId: ctx.user.id },
        });
        return hospitals;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => Hospital)
    async hospital(@Arg("input") input: HospitalInput): Promise<Hospital> {
        const hospital = await hospitalRepository.findOne({
            where: { id: input.id },
        });
        if (!hospital) throw new Error("No Hospital Found!");
        return hospital;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Hospital)
    async createHospital(
        @Arg("input") input: CreateHospitalInput,
        @Ctx() ctx: Context<AuthContext>
    ): Promise<Hospital> {
        const hospital = hospitalRepository.create(input);
        hospital.userId = ctx.user.id;
        await hospitalRepository.save(hospital);
        return hospital;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Hospital)
    async updateHospital(
        @Arg("input") input: UpdateHospitalInput
    ): Promise<Hospital> {
        const hospital = await hospitalRepository.findOne({
            where: { id: input.id },
        });
        if (!hospital) throw new Error("Hospital not found!");
        Object.assign(hospital, input);
        await hospitalRepository.save(hospital);
        return hospital;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Hospital)
    async deleteHospital(
        @Arg("input") input: DeleteHospitalInput
    ): Promise<Hospital> {
        const hospital = await hospitalRepository.findOne({
            where: { id: input.id },
        });
        if (!hospital) throw new Error("Hospital not found!");
        await hospital.remove();
        return hospital;
    }
}

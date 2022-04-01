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
    CreateProcedureTypeInput,
    DeleteProcedureTypeInput,
    ProcedureTypeInput,
    UpdateProcedureTypeInput,
} from "../inputs/ProcedureTypeInput";
import { Procedure } from "../models/Procedure";
import { ProcedureType } from "../models/ProcedureType";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";
import { Context } from "apollo-server-core";
import { AuthContext } from "../types";
import { ConsultProcedure } from "../models/ConsultProcedure";
const procedureTypeRepository = dataSource.getRepository(ProcedureType);
const procedureRepository = dataSource.getRepository(Procedure);
const consultProcedureRepository = dataSource.getRepository(ConsultProcedure);

@Resolver(() => ProcedureType)
export class ProcedureTypeResolver implements ResolverInterface<ProcedureType> {
    @FieldResolver()
    async totalConsults(
        @Root() procedureType: ProcedureType,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedure: {
                    typeId: procedureType.id,
                },
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }

    @FieldResolver()
    async procedures(@Root() procedureType: ProcedureType) {
        const procedures = await procedureRepository.find({
            where: { typeId: procedureType.id },
        });
        if (!procedures) throw new Error("User not found!");
        return procedures;
    }
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [ProcedureType])
    async allProcedureTypes(): Promise<ProcedureType[]> {
        const procedureTypes = await procedureTypeRepository.find();
        return procedureTypes;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => ProcedureType)
    async procedureType(
        @Arg("input") input: ProcedureTypeInput
    ): Promise<ProcedureType> {
        const procedure = await procedureTypeRepository.findOne({
            where: { id: input.id },
        });
        if (!procedure) throw new Error("No Rotation Found!");
        return procedure;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => ProcedureType)
    async createProcedureType(
        @Arg("input") input: CreateProcedureTypeInput
    ): Promise<ProcedureType> {
        const procedureType = procedureTypeRepository.create(input);
        await procedureTypeRepository.save(procedureType);
        return procedureType;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => ProcedureType)
    async updateProcedureType(
        @Arg("input") input: UpdateProcedureTypeInput
    ): Promise<ProcedureType> {
        const procedureType = await procedureTypeRepository.findOne({
            where: { id: input.id },
        });
        if (!procedureType) throw new Error("ProcedureType not found!");
        Object.assign(procedureType, input);
        await procedureTypeRepository.save(procedureType);
        return procedureType;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => ProcedureType)
    async deleteProcedureType(
        @Arg("input") input: DeleteProcedureTypeInput
    ): Promise<ProcedureType> {
        const procedureType = await procedureTypeRepository.findOne({
            where: { id: input.id },
        });
        if (!procedureType) throw new Error("ProcedureType not found!");
        await procedureType.remove();
        return procedureType;
    }
}

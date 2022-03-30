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
    CreateProcedureInput,
    DeleteProcedureInput,
    UpdateProcedureInput,
    ProcedureInput,
} from "../inputs/ProcedureInput";
import { Procedure } from "../models/Procedure";
import { ProcedureType } from "../models/ProcedureType";
import { UserRole } from "../enums/UserRole";
import { ConsultProcedure } from "../models/ConsultProcedure";
import { dataSource } from "../data-source";
import { Context } from "apollo-server-core";
import { AuthContext } from "../types";
const consultProcedureRepository = dataSource.getRepository(ConsultProcedure);
const procedureTypeRepository = dataSource.getRepository(ProcedureType);
const procedureRepository = dataSource.getRepository(Procedure);

@Resolver(() => Procedure)
export class ProcedureResolver implements ResolverInterface<Procedure> {
    @FieldResolver()
    async totalConsults(
        @Root() procedure: Procedure,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }

    @FieldResolver()
    async totalPrimaryConsults(
        @Root() procedure: Procedure,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                supervisionLevelId: 1,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }

    @FieldResolver()
    async totalSecondaryConsults(
        @Root() procedure: Procedure,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                supervisionLevelId: 2,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }

    @FieldResolver()
    async totalAssistantConsults(
        @Root() procedure: Procedure,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedureId: procedure.id,
                supervisionLevelId: 3,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }

    @FieldResolver()
    async type(@Root() procedure: Procedure) {
        const procedureType = await procedureTypeRepository.findOne({
            where: { id: procedure.typeId },
        });
        if (!procedureType) throw new Error("ProcedureType not found!");
        return procedureType;
    }

    @FieldResolver()
    async consults(@Root() procedure: Procedure) {
        const procedures = await consultProcedureRepository.find({
            relations: ["consult"],
            where: { procedureId: procedure.id },
        });
        return procedures;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [Procedure])
    async allProcedures(): Promise<Procedure[]> {
        const procedures = await procedureRepository.find();
        return procedures;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => Procedure)
    async procedure(@Arg("input") input: ProcedureInput): Promise<Procedure> {
        const procedure = await procedureRepository.findOne({
            where: { id: input.id },
        });
        if (!procedure) throw new Error("Procedure not found");
        return procedure;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => Procedure)
    async createProcedure(
        @Arg("input") input: CreateProcedureInput
    ): Promise<Procedure> {
        const procedure = procedureRepository.create(input);
        await procedureRepository.save(procedure);
        return procedure;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => Procedure)
    async updateProcedure(
        @Arg("input") input: UpdateProcedureInput
    ): Promise<Procedure> {
        const procedure = await procedureRepository.findOne({
            where: { id: input.id },
        });
        if (!procedure) throw new Error("Procedure not found!");
        Object.assign(procedure, input);
        await procedureRepository.save(procedure);
        return procedure;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => Procedure)
    async deleteProcedure(
        @Arg("input") input: DeleteProcedureInput
    ): Promise<Procedure> {
        const procedure = await procedureRepository.findOne({
            where: { id: input.id },
        });
        if (!procedure) throw new Error("Procedure not found!");
        await procedure.remove();
        return procedure;
    }
}

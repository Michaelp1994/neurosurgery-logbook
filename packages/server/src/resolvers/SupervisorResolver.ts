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
    CreateSupervisorInput,
    DeleteSupervisorInput,
    SupervisorInput,
    UpdateSupervisorInput,
} from "../inputs/SupervisorInput";
import { Supervisor } from "../models/Supervisor";
import { UserRole } from "../enums/UserRole";
import { Consult } from "../models/Consult";
import { dataSource } from "../data-source";
import { Context } from "apollo-server-core";
import { AuthContext } from "../types";
const consultRepository = dataSource.getRepository(Consult);

const supervisorRepository = dataSource.getRepository(Supervisor);

@Resolver(() => Supervisor)
export class SupervisorResolver implements ResolverInterface<Supervisor> {
    @FieldResolver()
    async consults(@Root() supervisor: Supervisor) {
        const consults = await consultRepository.find({
            where: { supervisorId: supervisor.id },
        });
        return consults;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [Supervisor])
    async allSupervisors(
        @Ctx() ctx: Context<AuthContext>
    ): Promise<Supervisor[]> {
        const supervisors = await supervisorRepository.find({
            order: {
                id: "ASC",
            },
            where: { userId: ctx.user.id },
        });
        return supervisors;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => Supervisor)
    async supervisor(
        @Arg("input") input: SupervisorInput
    ): Promise<Supervisor> {
        const supervisor = await supervisorRepository.findOne({
            where: { id: input.id },
        });
        if (!supervisor) throw new Error("No Supervisor Found!");
        return supervisor;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Supervisor)
    async createSupervisor(
        @Arg("input") input: CreateSupervisorInput,
        @Ctx() ctx: Context<AuthContext>
    ): Promise<Supervisor> {
        const supervisor = supervisorRepository.create(input);
        supervisor.userId = ctx.user.id;
        await supervisorRepository.save(supervisor);
        return supervisor;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Supervisor)
    async updateSupervisor(
        @Arg("input") input: UpdateSupervisorInput
    ): Promise<Supervisor> {
        const supervisor = await supervisorRepository.findOne({
            where: { id: input.id },
        });
        if (!supervisor) throw new Error("Supervisor not found!");
        Object.assign(supervisor, input);
        await supervisorRepository.save(supervisor);
        return supervisor;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => Supervisor)
    async deleteSupervisor(
        @Arg("input") input: DeleteSupervisorInput
    ): Promise<Supervisor> {
        const supervisor = await supervisorRepository.findOne({
            where: { id: input.id },
        });
        if (!supervisor) throw new Error("Supervisor not found!");
        await supervisor.remove();
        return supervisor;
    }
}

import {
    Resolver,
    Query,
    Authorized,
    FieldResolver,
    Root,
    Ctx,
    ResolverInterface,
} from "type-graphql";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";
import { SupervisionLevel } from "../models/SupervisionLevel";
import { Context } from "apollo-server-core";
import { AuthContext } from "../types";
import { ConsultProcedure } from "../models/ConsultProcedure";

const supervisionLevelRepository = dataSource.getRepository(SupervisionLevel);
const consultProcedureRepository = dataSource.getRepository(ConsultProcedure);

@Resolver(() => SupervisionLevel)
export class SupervisionLevelResolver
    implements ResolverInterface<SupervisionLevel>
{
    @FieldResolver()
    async totalConsults(
        @Root() supervisionLevel: SupervisionLevel,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                supervisionLevelId: supervisionLevel.id,
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [SupervisionLevel])
    async allSupervisionLevels(): Promise<SupervisionLevel[]> {
        const supervisionLevels = await supervisionLevelRepository.find();
        return supervisionLevels;
    }
}

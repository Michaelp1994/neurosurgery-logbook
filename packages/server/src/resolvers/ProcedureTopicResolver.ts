import {
    Resolver,
    Query,
    Authorized,
    ResolverInterface,
    FieldResolver,
    Ctx,
    Root,
} from "type-graphql";
import { ProcedureTopic } from "../models/ProcedureTopic";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";
import { Context } from "apollo-server-core";
import { AuthContext } from "../types";
import { ConsultProcedure } from "../models/ConsultProcedure";

const procedureTopicRepository = dataSource.getRepository(ProcedureTopic);
const consultProcedureRepository = dataSource.getRepository(ConsultProcedure);

@Resolver(() => ProcedureTopic)
export class ProcedureTopicResolver
    implements ResolverInterface<ProcedureTopic>
{
    @FieldResolver()
    async totalConsults(
        @Root() procedureTopic: ProcedureTopic,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultProcedureRepository.count({
            where: {
                procedure: {
                    type: {
                        topic: {
                            id: procedureTopic.id,
                        },
                    },
                },
                consult: {
                    userId: ctx.user.id,
                },
            },
        });
        return totalConsults;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [ProcedureTopic])
    async allProcedureTopics(): Promise<ProcedureTopic[]> {
        const procedureTopics = await procedureTopicRepository.find();
        return procedureTopics;
    }
}

import { FieldResolver, Resolver, ResolverInterface, Root } from "type-graphql";
import { dataSource } from "../data-source";
import { Consult } from "../models/Consult";
import { ConsultProcedure } from "../models/ConsultProcedure";
import { SupervisionLevel } from "../models/SupervisionLevel";
const supervisionLevelRepository = dataSource.getRepository(SupervisionLevel);

@Resolver(() => ConsultProcedure)
export class ConsultProcedureResolver
    implements ResolverInterface<ConsultProcedure>
{
    @FieldResolver()
    async supervisionLevel(@Root() consultProcedure: ConsultProcedure) {
        const supervisionLevel = await supervisionLevelRepository.findOne({
            where: { id: consultProcedure.supervisionLevelId },
        });
        if (!supervisionLevel) throw new Error("Supervision Level not found!");
        return supervisionLevel;
    }
}

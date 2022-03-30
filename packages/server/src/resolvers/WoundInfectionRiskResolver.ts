import { Resolver, Query, Authorized } from "type-graphql";
import { WoundInfectionRisk } from "../models/WoundInfectionRisk";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const woundInfectionRiskRepository =
    dataSource.getRepository(WoundInfectionRisk);

@Resolver(() => WoundInfectionRisk)
export class WoundInfectionRiskResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [WoundInfectionRisk])
    async allWoundInfectionRisks(): Promise<WoundInfectionRisk[]> {
        const woundInfectionRisks = await woundInfectionRiskRepository.find();
        return woundInfectionRisks;
    }
}

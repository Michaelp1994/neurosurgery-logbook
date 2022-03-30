import { Resolver, Query, Authorized } from "type-graphql";
import { Ethnicity } from "../models/Ethnicity";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const ethnicityRepository = dataSource.getRepository(Ethnicity);

@Resolver(() => Ethnicity)
export class EthnicityResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [Ethnicity])
    async allEthnicities(): Promise<Ethnicity[]> {
        const ethnicities = await ethnicityRepository.find();
        return ethnicities;
    }
}

import { Resolver, Query, Authorized } from "type-graphql";
import { MortalityClassification } from "../models/MortalityClassification";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const mortalityClassificationRepository = dataSource.getRepository(
    MortalityClassification
);

@Resolver(() => MortalityClassification)
export class MortalityClassificationResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [MortalityClassification])
    async allMortalityClassifications(): Promise<MortalityClassification[]> {
        const mortalityClassifications =
            await mortalityClassificationRepository.find();
        return mortalityClassifications;
    }
}

import { Resolver, Query, Authorized } from "type-graphql";
import { UnplannedIcu } from "../models/UnplannedIcu";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const unplannedIcuRepository = dataSource.getRepository(UnplannedIcu);

@Resolver(() => UnplannedIcu)
export class UnplannedIcuResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [UnplannedIcu])
    async allUnplannedIcus(): Promise<UnplannedIcu[]> {
        const unplannedIcus = await unplannedIcuRepository.find();
        return unplannedIcus;
    }
}

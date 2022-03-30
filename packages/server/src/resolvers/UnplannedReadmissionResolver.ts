import { Resolver, Query, Authorized } from "type-graphql";
import { UnplannedReadmission } from "../models/UnplannedReadmission";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const unplannedReadmissionRepository =
    dataSource.getRepository(UnplannedReadmission);

@Resolver(() => UnplannedReadmission)
export class UnplannedReadmissionResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [UnplannedReadmission])
    async allUnplannedReadmissions(): Promise<UnplannedReadmission[]> {
        const unplannedReadmissions =
            await unplannedReadmissionRepository.find();
        return unplannedReadmissions;
    }
}

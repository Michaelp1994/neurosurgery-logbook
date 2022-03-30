import { Resolver, Query, Authorized } from "type-graphql";
import { SetLevel } from "../models/SetLevel";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const setLevelRepository = dataSource.getRepository(SetLevel);

@Resolver(() => SetLevel)
export class SetLevelResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [SetLevel])
    async allSetLevels(): Promise<SetLevel[]> {
        const setLevels = await setLevelRepository.find();
        return setLevels;
    }
}

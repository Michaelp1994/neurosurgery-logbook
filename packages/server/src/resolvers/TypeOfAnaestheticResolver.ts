import { Resolver, Query, Authorized } from "type-graphql";
import { TypeOfAnaesthetic } from "../models/TypeOfAnaesthetic";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const typeOfAnaestheticRepository = dataSource.getRepository(TypeOfAnaesthetic);

@Resolver(() => TypeOfAnaesthetic)
export class TypeOfAnaestheticResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [TypeOfAnaesthetic])
    async allTypeOfAnaesthetics(): Promise<TypeOfAnaesthetic[]> {
        const typeOfAnaesthetics = await typeOfAnaestheticRepository.find();
        return typeOfAnaesthetics;
    }
}

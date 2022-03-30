import { Resolver, Query, Authorized } from "type-graphql";
import { ReturnToTheatre } from "../models/ReturnToTheatre";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const returnToTheatreRepository = dataSource.getRepository(ReturnToTheatre);

@Resolver(() => ReturnToTheatre)
export class ReturnToTheatreResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [ReturnToTheatre])
    async allReturnToTheatres(): Promise<ReturnToTheatre[]> {
        const returnToTheatres = await returnToTheatreRepository.find();
        return returnToTheatres;
    }
}

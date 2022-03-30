import { Resolver, Query, Authorized } from "type-graphql";
import { Outcome } from "../models/Outcome";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const outcomeRepository = dataSource.getRepository(Outcome);

@Resolver(() => Outcome)
export class OutcomeResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [Outcome])
    async allOutcomes(): Promise<Outcome[]> {
        const outcomes = await outcomeRepository.find();
        return outcomes;
    }
}

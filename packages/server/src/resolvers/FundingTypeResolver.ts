import {
    Resolver,
    Query,
    Authorized,
    FieldResolver,
    ResolverInterface,
    Root,
    Ctx,
} from "type-graphql";
import { FundingType } from "../models/FundingType";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";
import { Consult } from "../models/Consult";
import { AuthContext } from "../types";
import { Context } from "apollo-server-core";

const fundingTypeRepository = dataSource.getRepository(FundingType);
const consultRepository = dataSource.getRepository(Consult);

@Resolver(() => FundingType)
export class FundingTypeResolver implements ResolverInterface<FundingType> {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [FundingType])
    async allFundingTypes(): Promise<FundingType[]> {
        const fundingTypes = await fundingTypeRepository.find();
        return fundingTypes;
    }

    @FieldResolver()
    async totalConsults(
        @Root() fundingType: FundingType,
        @Ctx() ctx: Context<AuthContext>
    ) {
        const totalConsults = await consultRepository.count({
            where: {
                fundingTypeId: fundingType.id,
                userId: ctx.user.id,
            },
        });
        return totalConsults;

        // SELECT "funding_type"."name", "funding_type"."id", COUNT(*)
        // FROM funding_type
        // LEFT JOIN consult ON "funding_type"."id" = "consult"."fundingTypeId"
        // WHERE "consult"."userId" = 1
        // GROUP BY "funding_type"."id";

        // const fundingType = await fundingTypeRepository.findOne({
        //     where: { id: consult.fundingTypeId },
        // });
        // if (!fundingType) throw new Error("fundingType not found!");
        // return fundingType;
    }
}

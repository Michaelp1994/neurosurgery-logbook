import { Resolver, Query, Authorized } from "type-graphql";
import { AsaGrade } from "../models/AsaGrade";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const asaGradeRepository = dataSource.getRepository(AsaGrade);

@Resolver(() => AsaGrade)
export class AsaGradeResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [AsaGrade])
    async allAsaGrades(): Promise<AsaGrade[]> {
        const asaGrades = await asaGradeRepository.find();
        return asaGrades;
    }
}

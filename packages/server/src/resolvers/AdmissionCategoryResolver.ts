import { Resolver, Query, Authorized } from "type-graphql";
import { AdmissionCategory } from "../models/AdmissionCategory";
import { UserRole } from "../enums/UserRole";
import { dataSource } from "../data-source";

const admissionCategoryRepository = dataSource.getRepository(AdmissionCategory);

@Resolver(() => AdmissionCategory)
export class AdmissionCategoryResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [AdmissionCategory])
    async allAdmissionCategories(): Promise<AdmissionCategory[]> {
        const admissionCategories = await admissionCategoryRepository.find();
        return admissionCategories;
    }
}

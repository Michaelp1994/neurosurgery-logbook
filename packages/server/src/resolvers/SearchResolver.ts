import { Arg, Authorized, Query } from "type-graphql";
import { SearchInput } from "../inputs/SearchInput";
import { dataSource } from "../data-source";
import { Consult } from "../models/Consult";
import { Like } from "typeorm";
import { UserRole } from "../enums/UserRole";

const consultRepository = dataSource.getRepository(Consult);

export class SearchResolver {
    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => [Consult])
    async search(@Arg("input") input: SearchInput): Promise<Consult[]> {
        const searchTerm = "%" + input.search.trim().toLocaleLowerCase() + "%";
        const results = await consultRepository
            .createQueryBuilder("consult")
            .where("LOWER(consult.name) LIKE :searchTerm")
            .orWhere("consult.urn LIKE :searchTerm")
            .limit(10)
            .setParameter("searchTerm", searchTerm)
            .getMany();
        // const results = await consultRepository.find({
        //     where: [
        //         { name: Like(`%${searchTerm}%`) },
        //         { urn: Like(`%${searchTerm}%`) },
        //     ],
        //     take: 10,
        // });
        return results;
    }
}

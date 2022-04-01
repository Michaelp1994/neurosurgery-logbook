import { dataSource } from "./data-source";
import { ConsultProcedure } from "./models/ConsultProcedure";
const consultProcedureRepository = dataSource.getRepository(ConsultProcedure);

async function testing() {
    await dataSource.initialize();
    const allConsults = await consultProcedureRepository
        .createQueryBuilder("consultProcedure")
        .leftJoinAndSelect("consult.procedures", "procedures")
        .leftJoinAndSelect("procedures.procedure", "procedure")
        .leftJoinAndSelect("procedure.type", "type")
        .where("consult.userId = :id", { id: 1 })
        .getMany();

    console.log(allConsults);

    // SUPERVISION LEVEL DONE
    // SELECT "supervisionLevel", COUNT(*)
    // FROM consult_procedure
    // LEFT JOIN consult ON "consult_procedure"."consultId" = consult.id
    // WHERE "consult"."userId" = 1
    // GROUP BY "supervisionLevel";

    // FUNDING TYPE DONE
    // SELECT "funding_type"."name", "funding_type"."id", COUNT(*)
    // FROM funding_type
    // LEFT JOIN consult ON "funding_type"."id" = "consult"."fundingTypeId"
    // WHERE "consult"."userId" = 1
    // GROUP BY "funding_type"."id";

    // PROCEDURE TOPIC FIXME: add procedure_topic to procedure_type.

    // SELECT "procedure_type"."id", "procedure_type"."name", COUNT(*)
    // FROM consult_procedure
    // LEFT JOIN consult ON "consult_procedure"."consultId" = "consult"."id"
    // LEFT JOIN procedure ON "consult_procedure"."procedureId" = "procedure"."id"
    // LEFT JOIN procedure_type ON "procedure"."typeId" = "procedure_type"."id"
    // LEFT JOIN procedure_topic ON "procedure_type"."topicId" = "procedure_topic"."id"
    // WHERE "consult"."userId" = 1
    // GROUP BY "funding_type"."id";

    // SELECT "procedure"."id" AS "procedure_id", "procedure"."name" AS "procedure_name",
    // SUM(1) FILTER (WHERE "consultProcedure"."supervisionLevel" = '0' AND "consult"."userId" = $1) AS "primary",
    // SUM(1) FILTER (WHERE "consultProcedure"."supervisionLevel" = '1' AND "consult"."userId" = $2) AS "secondary",
    // SUM(1) FILTER (WHERE "consultProcedure"."supervisionLevel" = '2' AND "consult"."userId" = $3) AS "assistant"
    // FROM "consult_procedure" "consultProcedure"
    // LEFT JOIN "procedure" "procedure" ON "procedure"."id"="consultProcedure"."procedureId" AND ("procedure"."deletedAt" IS NULL)
    // LEFT JOIN "consult" "consult" ON "consult"."id"="consultProcedure"."consultId" AND ("consult"."deletedAt" IS NULL)
    // WHERE "consultProcedure"."deletedAt" IS NULL
    // GROUP BY "procedure"."id"
    // ORDER BY "procedure"."id" ASC

    // SELECT "procedure".*,
    //  SUM(1) FILTER (WHERE "consult_procedure"."supervisionLevel" = '0' AND "consult"."userId" = '1' ) AS primary,
    //  SUM(1) FILTER (WHERE "consult_procedure"."supervisionLevel" = '1' AND "consult"."userId" = '1') AS secondary,
    //  SUM(1) FILTER (WHERE "consult_procedure"."supervisionLevel" = '2' AND "consult"."userId" = '1') AS assisant
    // FROM "procedure"
    // LEFT JOIN "consult_procedure" ON "consult_procedure"."procedureId" = "procedure"."id"
    // LEFT JOIN "consult" ON "consult_procedure"."consultId" = "consult"."id"
    // GROUP BY "procedure"."id"
    // ORDER BY "procedure"."id" ASC;
}

testing().catch((err) => {
    console.log(err);
});

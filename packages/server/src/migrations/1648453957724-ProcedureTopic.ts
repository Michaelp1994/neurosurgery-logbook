import { MigrationInterface, QueryRunner } from "typeorm";

export class ProcedureTopic1648453957724 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "procedure_type" ADD COLUMN "topicId" integer;`
        );
        await queryRunner.query(
            `INSERT INTO "procedure_topic"(name) VALUES ('Cranial'), ('Peripheral Nerve Surgery'), ('Spine');`
        );
        await queryRunner.query(
            `UPDATE "procedure_type" SET "topicId"=1 WHERE topic = 'CRANIAL';`
        );
        await queryRunner.query(
            `UPDATE "procedure_type" SET "topicId"=2 WHERE "topic" = 'PNS';`
        );
        await queryRunner.query(
            `UPDATE "procedure_type" SET "topicId"=3 WHERE "topic" = 'SPINE';`
        );
        await queryRunner.query(
            `ALTER TABLE "procedure_type" ADD CONSTRAINT "FK_procedureType" FOREIGN KEY("topicId") REFERENCES procedure_topic("id");`
        );
        await queryRunner.query(
            `ALTER TABLE "procedure_type" DROP COLUMN "topic"`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "procedure_type" ADD COLUMN "topic" integer;`
        );
        await queryRunner.query(
            `UPDATE "procedure_type" SET topic = 'CRANIAL' WHERE topicId=1;`
        );
        await queryRunner.query(
            `UPDATE "procedure_type" SET topic = 'PNS' WHERE topicId=2;`
        );
        await queryRunner.query(
            `UPDATE "procedure_type" SET topic = 'SPINE' WHERE topicId=3;`
        );
        await queryRunner.query(
            `ALTER TABLE "procedure_type" DROP COLUMN "topicId";`
        );
    }
}

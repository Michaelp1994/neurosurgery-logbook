import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Consult } from "./Consult";
import { Procedure } from "./Procedure";
import { SupervisionLevel } from "./SupervisionLevel";

@Entity()
@ObjectType({
    description: "The many-to-many relation between Consult & Procedure",
})
export class ConsultProcedure extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    consultId!: number;

    @Field()
    @Column()
    procedureId!: number;

    @Field()
    @Column()
    supervisionLevelId: number;

    @Field(() => SupervisionLevel)
    @ManyToOne(
        () => SupervisionLevel,
        (supervisionLevel) => supervisionLevel.procedures
    )
    supervisionLevel: SupervisionLevel;

    @Field(() => Consult)
    @ManyToOne(() => Consult, (consult) => consult.procedures)
    consult!: Consult;

    @Field(() => Procedure)
    @ManyToOne(() => Procedure, (procedure) => procedure.consults)
    procedure!: Procedure;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;

    @Field()
    @DeleteDateColumn()
    deletedAt: Date;
}

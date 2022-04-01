import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { ProcedureType } from "./ProcedureType";
import { ConsultProcedure } from "./ConsultProcedure";

@Entity()
@ObjectType({ description: "The procedure model" })
export class Procedure extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    typeId: number;

    @Field()
    totalConsults: number;

    @Field()
    totalPrimaryConsults: number;

    @Field()
    totalSecondaryConsults: number;

    @Field()
    totalAssistantConsults: number;

    @Field(() => ProcedureType)
    @ManyToOne(() => ProcedureType, (procedureType) => procedureType.procedures)
    type: ProcedureType;

    @Field(() => [ConsultProcedure])
    @OneToMany(
        () => ConsultProcedure,
        (consultProcedure) => consultProcedure.procedure
    )
    consults: ConsultProcedure[];

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

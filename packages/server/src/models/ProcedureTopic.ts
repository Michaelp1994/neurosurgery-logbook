import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { ProcedureType } from "./ProcedureType";

@Entity()
@ObjectType({ description: "The Procedure Topic Model" })
export class ProcedureTopic extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    shortName: string;

    @Field()
    totalConsults: number;

    @Field(() => [ProcedureType], { nullable: true })
    @OneToMany(() => ProcedureType, (consult) => consult.topic)
    types?: ProcedureType[];

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

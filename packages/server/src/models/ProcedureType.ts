import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Procedure } from "./Procedure";
import { ProcedureTopic } from "./ProcedureTopic";

@Entity()
@ObjectType({ description: "The procedure type model" })
export class ProcedureType extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field(() => [Procedure])
    @OneToMany(() => Procedure, (procedure) => procedure.type)
    procedures: Procedure[];

    @Field()
    @Column()
    topicId: number;

    @Field()
    totalConsults: number;

    @Field(() => ProcedureTopic)
    @ManyToOne(() => ProcedureTopic, (topic) => topic.types)
    topic: ProcedureTopic;

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

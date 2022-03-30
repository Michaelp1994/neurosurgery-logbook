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
import { ObjectType, Field } from "type-graphql";
import { ConsultProcedure } from "./ConsultProcedure";

@Entity()
@ObjectType({ description: "The Supervision Level model" })
export class SupervisionLevel extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field(() => [ConsultProcedure], { nullable: true })
    @OneToMany(
        () => ConsultProcedure,
        (consultProcedure) => consultProcedure.supervisionLevel
    )
    procedures?: ConsultProcedure[];

    @Field()
    totalConsults: number;

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

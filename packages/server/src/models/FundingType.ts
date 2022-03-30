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
import { Consult } from "./Consult";

@Entity()
@ObjectType({ description: "The Funding Type model" })
export class FundingType extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    totalConsults: number;

    @Field(() => [Consult], { nullable: true })
    @OneToMany(() => Consult, (consult) => consult.fundingType)
    consults?: Consult[];

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

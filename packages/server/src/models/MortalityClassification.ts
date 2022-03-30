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
@ObjectType({ description: "The Mortality Classification model" })
export class MortalityClassification extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field(() => [Consult], { nullable: true })
    @OneToMany(() => Consult, (consult) => consult.mortalityClassification)
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

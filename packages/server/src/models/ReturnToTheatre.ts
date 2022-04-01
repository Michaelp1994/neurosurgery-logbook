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
import { Consult } from "./Consult";

@Entity()
@ObjectType({ description: "The Return To Theatre model" })
export class ReturnToTheatre extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field(() => [Consult], { nullable: true })
    @OneToMany(() => Consult, (consult) => consult.returnToTheatre)
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

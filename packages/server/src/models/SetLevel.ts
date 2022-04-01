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
import { Rotation } from "./Rotation";
import { Consult } from "./Consult";

@Entity()
@ObjectType({ description: "The SET Level model" })
export class SetLevel extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field(() => [Rotation], { nullable: true })
    @OneToMany(() => Rotation, (rotation) => rotation.setLevel)
    rotations?: Rotation[];

    @Field(() => [Consult], { nullable: true })
    @OneToMany(() => Consult, (consult) => consult.setLevel)
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

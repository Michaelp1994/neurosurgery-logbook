import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany,
    ManyToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";
import { Consult } from "./Consult";
import { Rotation } from "./Rotation";

@Entity()
@ObjectType({ description: "The supervisor model" })
export class Supervisor extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field(() => [Rotation])
    @ManyToMany(() => Rotation, (rotation) => rotation.supervisors)
    rotations: Rotation[];

    @Field(() => [Consult])
    @OneToMany(() => Consult, (consult) => consult.supervisor)
    consults: Consult[];

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.supervisors)
    user: User;

    @Field()
    @Column()
    userId: number;

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

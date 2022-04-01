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
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";
import { Consult } from "./Consult";
import { Rotation } from "./Rotation";

@Entity()
@ObjectType({ description: "The hospital model" })
export class Hospital extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    urnMask?: string;

    @Field(() => [Consult])
    @OneToMany(() => Consult, (consult) => consult.hospital)
    consults: Consult[];

    @Field(() => [Rotation])
    @OneToMany(() => Rotation, (rotation) => rotation.hospital)
    rotations: Rotation[];

    /* Meta Data */
    @Field(() => User)
    @ManyToOne(() => User, (user) => user.hospitals)
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

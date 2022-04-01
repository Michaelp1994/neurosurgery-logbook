import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Supervisor } from "./Supervisor";
import { Hospital } from "./Hospital";
import { User } from "./User";
import { Consult } from "./Consult";
import { SetLevel } from "./SetLevel";

@Entity()
@ObjectType({ description: "The rotation model" })
export class Rotation extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    startDate: Date;

    @Field()
    @Column()
    endDate: Date;

    /* Relationships */

    @Field()
    @Column()
    userId: number;

    @Field()
    @Column({ nullable: true })
    setLevelId: number;

    @Field()
    @Column()
    hospitalId: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.rotations)
    user: User;

    @Field(() => SetLevel)
    @ManyToOne(() => SetLevel, (setLevel) => setLevel.rotations)
    setLevel: SetLevel;

    @Field(() => Hospital)
    @ManyToOne(() => Hospital, (hospital) => hospital.rotations)
    hospital: Hospital;

    @Field(() => [Supervisor])
    @ManyToMany(() => Supervisor, (supervisor) => supervisor.rotations)
    @JoinTable()
    supervisors: Supervisor[];

    @Field(() => [Consult], { nullable: true })
    @OneToMany(() => Consult, (consult) => consult.rotationPeriod)
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

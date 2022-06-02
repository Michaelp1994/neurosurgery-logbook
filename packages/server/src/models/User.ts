import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Consult } from "./Consult";
import bcrypt from "bcryptjs";
import { UserRole } from "../enums/UserRole";
import { createToken } from "../services/generateToken";
import { Rotation } from "./Rotation";
import { DateTime } from "luxon";
import { Hospital } from "./Hospital";
import { Supervisor } from "./Supervisor";

@Entity()
@ObjectType({ description: "The user model" })
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  private password: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field(() => UserRole)
  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Field(() => [Consult], { nullable: true })
  @OneToMany(() => Consult, (consult) => consult.user)
  consults?: Consult[];

  @Field(() => [Rotation], { nullable: true })
  @OneToMany(() => Rotation, (rotation) => rotation.user)
  rotations?: Rotation[];

  @Field(() => [Hospital], { nullable: true })
  @OneToMany(() => Hospital, (hospital) => hospital.user)
  hospitals?: Hospital[];

  @Field(() => [Supervisor], { nullable: true })
  @OneToMany(() => Supervisor, (supervisor) => supervisor.user)
  supervisors?: Supervisor[];

  @Column({ type: String, nullable: true })
  private recoveryToken: string | null;

  @Column({ type: Date, nullable: true })
  private lastRecovered: Date | null;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @DeleteDateColumn()
  deletedAt: Date;

  validateRecoveryToken(token: string) {
    if (!this.lastRecovered || !this.recoveryToken) return false;
    const currentTime = DateTime.now();
    const recoveryTime = DateTime.fromJSDate(this.lastRecovered);
    const difference = currentTime.diff(recoveryTime, "minutes");

    if (difference.minutes < 30 && this.recoveryToken === token) {
      this.recoveryToken = null;
      return true;
    } else {
      return false;
    }
  }

  generateRecoveryToken() {
    this.recoveryToken = Math.floor(Math.random() * 899999 + 100000).toString();
    this.lastRecovered = new Date();
    return this.recoveryToken;
  }

  async validatePassword(password: string) {
    return await bcrypt.compare(password.substring(0, 256), this.password);
  }

  async generateHash(newPassword: string) {
    this.password = await bcrypt.hash(newPassword.substring(0, 256), 10);
  }
}

@ObjectType({ description: "User login authentication model" })
export class Token {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  token!: string;

  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => UserRole)
  role!: UserRole;

  static create(user: User) {
    const newToken = new Token();
    newToken.id = user.id;
    newToken.token = createToken(user);
    newToken.firstName = user.firstName;
    newToken.lastName = user.lastName;
    newToken.role = user.role;
    return newToken;
    //this.password = await bcrypt.hash(newPassword, 10);
  }
}

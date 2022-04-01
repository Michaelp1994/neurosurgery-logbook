import { InputType, Field, ID } from "type-graphql";
import { User } from "../models/User";
import { MaxLength } from "class-validator";

@InputType({ description: "Input for registering user" })
export class RegisterInput implements Partial<User> {
    @Field()
    @MaxLength(100)
    email: string;

    @Field()
    password: string;

    @Field()
    @MaxLength(50)
    firstName: string;

    @Field()
    @MaxLength(50)
    lastName: string;

    @Field()
    captchaToken: string;
}

@InputType({ description: "Input for login credentials" })
export class LoginInput implements Partial<User> {
    @Field()
    @MaxLength(100)
    email: string;
    @Field()
    password: string;
}

@InputType({ description: "Input for sending a password recovery email" })
export class ForgotPasswordInput {
    @Field()
    @MaxLength(100)
    email: string;
    @Field()
    captchaToken: string;
}

@InputType({ description: "Input for Resetting password" })
export class ResetPasswordInput {
    @Field()
    id: number;
    @Field()
    newPassword: string;
    @Field()
    emailToken: string;
}

@InputType({ description: "Input for updating a user by an admin" })
export class UpdateUserInput implements Partial<User> {
    @Field()
    id: number;

    @Field({ nullable: true })
    password?: string;

    @Field({ nullable: true })
    @MaxLength(50)
    firstName?: string;

    @Field({ nullable: true })
    @MaxLength(50)
    lastName?: string;

    @Field({ nullable: true })
    @MaxLength(100)
    email?: string;
}

@InputType({ description: "Input for updating a profile by the user" })
export class UpdateProfileInput implements Partial<User> {
    @Field({ nullable: true })
    password?: string;

    @Field({ nullable: true })
    @MaxLength(50)
    firstName?: string;

    @Field({ nullable: true })
    @MaxLength(50)
    lastName?: string;

    @Field({ nullable: true })
    @MaxLength(100)
    email?: string;
}

@InputType({ description: "Input for updating a users password" })
export class UpdatePasswordInput {
    @Field()
    currentPassword: string;

    @Field()
    newPassword: string;
}

@InputType({ description: "Input for deleting a user" })
export class DeleteUserInput implements Partial<User> {
    @Field(() => ID)
    id: number;
}

@InputType({ description: "Input for viewing a user" })
export class UserInput implements Partial<User> {
    @Field(() => ID)
    id: number;
}

import {
    Resolver,
    Query,
    Mutation,
    Arg,
    ResolverInterface,
    Root,
    FieldResolver,
    Authorized,
    Ctx,
} from "type-graphql";
import "dotenv/config";

import {
    DeleteUserInput,
    UpdateUserInput,
    UserInput,
    RegisterInput,
    UpdateProfileInput,
    UpdatePasswordInput,
    ForgotPasswordInput,
    ResetPasswordInput,
} from "../inputs/UserInput";
import { User, Token } from "../models/User";
import { LoginInput } from "../inputs/UserInput";
import { Consult } from "../models/Consult";
import { UserRole } from "../enums/UserRole";
import { verify } from "hcaptcha";
import {
    AuthenticationError,
    Context,
    UserInputError,
} from "apollo-server-core";
import { AuthContext } from "../types";
import { dataSource } from "../data-source";
import { sendForgotEmail } from "../services/emailService";

const consultRepository = dataSource.getRepository(Consult);
const userRepository = dataSource.getRepository(User);
@Resolver(() => User)
export class UserResolver implements ResolverInterface<User> {
    @FieldResolver()
    async consults(@Root() user: User) {
        const consults = await consultRepository.find({
            where: { userId: user.id },
        });
        return consults;
    }
    @Authorized(UserRole.ADMIN)
    @Query(() => [User])
    async allUsers(): Promise<User[]> {
        const users = await userRepository.find();
        return users;
    }

    @Authorized(UserRole.ADMIN)
    @Query(() => User)
    async user(@Arg("input") input: UserInput): Promise<User> {
        const user = await userRepository.findOne({
            where: { id: input.id },
        });
        if (!user) throw new Error("No User Found!");
        return user;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Query(() => User)
    async profile(@Ctx() ctx: Context<AuthContext>): Promise<User> {
        const user = await userRepository.findOne({
            where: { id: ctx.user.id },
        });
        if (!user) throw new Error("No User Found!");
        return user;
    }

    @Mutation(() => Token)
    async login(@Arg("input") input: LoginInput): Promise<Token> {
        const email = input.email.toLocaleLowerCase();
        const user = await userRepository.findOne({
            where: { email },
        });
        if (!user) throw new UserInputError("Email or Password Incorrect.");
        const correctPassword: boolean = await user.validatePassword(
            input.password
        );
        if (!correctPassword)
            throw new UserInputError("Email or Password Incorrect.");
        const token = Token.create(user);
        return token;
    }

    @Mutation(() => Boolean)
    async forgotPassword(
        @Arg("input") input: ForgotPasswordInput
    ): Promise<boolean> {
        if (!process.env.CAPTCHA_SECRET_KEY) throw new Error("Internal Error");

        const isVerified = await verify(
            process.env.CAPTCHA_SECRET_KEY,
            input.captchaToken
        );
        if (!isVerified.success)
            throw new AuthenticationError("Captcha not verified");
        const user = await userRepository.findOne({
            where: { email: input.email },
        });
        if (!user) return true;
        const recoveryToken = user.generateRecoveryToken();
        await userRepository.save(user);
        await sendForgotEmail(user, recoveryToken);
        return true;
    }

    @Mutation(() => Boolean)
    async resetPassword(
        @Arg("input") input: ResetPasswordInput
    ): Promise<boolean> {
        const user = await userRepository.findOne({
            where: { id: input.id },
        });
        if (!user) throw Error("User cannot be found");
        const isTokenValid = user.validateRecoveryToken(input.emailToken);
        if (!isTokenValid) throw Error("Invalid Token.");
        await user.generateHash(input.newPassword);
        await userRepository.save(user);
        return true;
    }

    @Mutation(() => Token)
    async register(@Arg("input") input: RegisterInput): Promise<Token> {
        if (!process.env.CAPTCHA_SECRET_KEY) throw new Error("Internal Error");

        const isVerified = await verify(
            process.env.CAPTCHA_SECRET_KEY,
            input.captchaToken
        );
        if (!isVerified.success)
            throw new AuthenticationError("Captcha not verified");

        const emailTaken = await userRepository.findOne({
            where: { email: input.email },
        });
        if (emailTaken) throw new Error("Email already taken");
        const user = userRepository.create(input);
        await user.generateHash(input.password);
        user.role = UserRole.USER;
        await userRepository.save(user);
        const token = Token.create(user);
        return token;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => User)
    async updateUser(@Arg("input") input: UpdateUserInput): Promise<User> {
        const user = await userRepository.findOne({ where: { id: input.id } });
        if (!user) throw new Error("User not found!");
        Object.assign(user, input);
        await userRepository.save(user);
        return user;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => User)
    async updateProfile(
        @Arg("input") input: UpdateProfileInput,
        @Ctx() ctx: Context<AuthContext>
    ): Promise<User> {
        const user = await userRepository.findOne({
            where: { id: ctx.user.id },
        });
        if (!user) throw new Error("User not found!");
        Object.assign(user, input);
        await userRepository.save(user);
        return user;
    }

    @Authorized([UserRole.USER, UserRole.ADMIN])
    @Mutation(() => User)
    async updatePassword(
        @Arg("input") input: UpdatePasswordInput,
        @Ctx() ctx: Context<AuthContext>
    ): Promise<User> {
        const user = await userRepository.findOne({
            where: { id: ctx.user.id },
        });
        if (!user) throw new Error("User not found!");

        const correctPassword: boolean = await user.validatePassword(
            input.currentPassword
        );
        if (!correctPassword) throw new Error("Password is not correct!");
        await user.generateHash(input.newPassword);
        await userRepository.save(user);
        return user;
    }

    @Authorized(UserRole.ADMIN)
    @Mutation(() => User)
    async deleteUser(@Arg("input") input: DeleteUserInput): Promise<User> {
        const user = await userRepository.findOne({ where: { id: input.id } });
        if (!user) throw new Error("User not found!");
        await user.remove();
        return user;
    }
}

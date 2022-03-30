"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
require("dotenv/config");
const UserInput_1 = require("../inputs/UserInput");
const User_1 = require("../models/User");
const UserInput_2 = require("../inputs/UserInput");
const Consult_1 = require("../models/Consult");
const UserRole_1 = require("../enums/UserRole");
const hcaptcha_1 = require("hcaptcha");
const apollo_server_core_1 = require("apollo-server-core");
const nodemailer_1 = __importDefault(require("nodemailer"));
const data_source_1 = require("../data-source");
const consultRepository = data_source_1.dataSource.getRepository(Consult_1.Consult);
const userRepository = data_source_1.dataSource.getRepository(User_1.User);
let UserResolver = class UserResolver {
    async consults(user) {
        const consults = await consultRepository.find({
            where: { userId: user.id },
        });
        return consults;
    }
    async allUsers() {
        const users = await userRepository.find();
        return users;
    }
    async user(input) {
        const user = await userRepository.findOne({
            where: { id: input.id },
        });
        if (!user)
            throw new Error("No User Found!");
        return user;
    }
    async profile(ctx) {
        const user = await userRepository.findOne({
            where: { id: ctx.user.id },
        });
        if (!user)
            throw new Error("No User Found!");
        return user;
    }
    async login(input) {
        const email = input.email.toLocaleLowerCase();
        const user = await userRepository.findOne({
            where: { email },
        });
        if (!user)
            throw new apollo_server_core_1.UserInputError("Email or Password Incorrect.");
        const correctPassword = await user.validatePassword(input.password);
        if (!correctPassword)
            throw new apollo_server_core_1.UserInputError("Email or Password Incorrect.");
        const token = User_1.Token.create(user);
        return token;
    }
    async forgotPassword(input) {
        if (!process.env.CAPTCHA_SECRET_KEY)
            throw new Error("Internal Error");
        const isVerified = await (0, hcaptcha_1.verify)(process.env.CAPTCHA_SECRET_KEY, input.captchaToken);
        if (!isVerified.success)
            throw new apollo_server_core_1.AuthenticationError("Captcha not verified");
        const user = await userRepository.findOne({
            where: { email: input.email },
        });
        if (!user)
            return true;
        const recoveryToken = user.generateRecoveryToken();
        await userRepository.save(user);
        const testAccount = await nodemailer_1.default.createTestAccount();
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass, // generated ethereal password
            },
        });
        const info = await transporter.sendMail({
            from: '"Neurosurgery Logbook" <foo@example.com>',
            to: user.email,
            subject: "Your logbook Security Code",
            text: "",
            html: `<b>Hi ${user.firstName},</b><br /><br /> To reset your password, please follow the <a href='${process.env.WEBSITE_URL}/resetPassword/${user.id}/${recoveryToken}'link<b>here<br/><br />`, // html body
        });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
        return true;
    }
    async resetPassword(input) {
        const user = await userRepository.findOne({
            where: { id: input.id },
        });
        if (!user)
            throw Error("User cannot be found");
        const isTokenValid = user.validateRecoveryToken(input.emailToken);
        if (!isTokenValid)
            throw Error("Invalid Token.");
        await user.generateHash(input.newPassword);
        await userRepository.save(user);
        return true;
    }
    async register(input) {
        if (!process.env.CAPTCHA_SECRET_KEY)
            throw new Error("Internal Error");
        const isVerified = await (0, hcaptcha_1.verify)(process.env.CAPTCHA_SECRET_KEY, input.captchaToken);
        if (!isVerified.success)
            throw new apollo_server_core_1.AuthenticationError("Captcha not verified");
        const emailTaken = await userRepository.findOne({
            where: { email: input.email },
        });
        if (emailTaken)
            throw new Error("Email already taken");
        const user = userRepository.create(input);
        await user.generateHash(input.password);
        user.role = UserRole_1.UserRole.USER;
        await userRepository.save(user);
        const token = User_1.Token.create(user);
        return token;
    }
    async updateUser(input) {
        const user = await userRepository.findOne({ where: { id: input.id } });
        if (!user)
            throw new Error("User not found!");
        Object.assign(user, input);
        await userRepository.save(user);
        return user;
    }
    async updateProfile(input, ctx) {
        const user = await userRepository.findOne({
            where: { id: ctx.user.id },
        });
        if (!user)
            throw new Error("User not found!");
        Object.assign(user, input);
        await userRepository.save(user);
        return user;
    }
    async updatePassword(input, ctx) {
        const user = await userRepository.findOne({
            where: { id: ctx.user.id },
        });
        if (!user)
            throw new Error("User not found!");
        const correctPassword = await user.validatePassword(input.currentPassword);
        if (!correctPassword)
            throw new Error("Password is not correct!");
        await user.generateHash(input.newPassword);
        await userRepository.save(user);
        return user;
    }
    async deleteUser(input) {
        const user = await userRepository.findOne({ where: { id: input.id } });
        if (!user)
            throw new Error("User not found!");
        await user.remove();
        return user;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "consults", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "allUsers", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Query)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Query)(() => User_1.User),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "profile", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.Token),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_2.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.ForgotPasswordInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.ResetPasswordInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "resetPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.Token),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.RegisterInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UpdateProfileInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateProfile", null);
__decorate([
    (0, type_graphql_1.Authorized)([UserRole_1.UserRole.USER, UserRole_1.UserRole.ADMIN]),
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.UpdatePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updatePassword", null);
__decorate([
    (0, type_graphql_1.Authorized)(UserRole_1.UserRole.ADMIN),
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput_1.DeleteUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(() => User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map
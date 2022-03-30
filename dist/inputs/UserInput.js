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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInput = exports.DeleteUserInput = exports.UpdatePasswordInput = exports.UpdateProfileInput = exports.UpdateUserInput = exports.ResetPasswordInput = exports.ForgotPasswordInput = exports.LoginInput = exports.RegisterInput = exports.CreateUserInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserInput.prototype, "lastName", void 0);
CreateUserInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for creating user" })
], CreateUserInput);
exports.CreateUserInput = CreateUserInput;
let RegisterInput = class RegisterInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], RegisterInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], RegisterInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], RegisterInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], RegisterInput.prototype, "captchaToken", void 0);
RegisterInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for registering user" })
], RegisterInput);
exports.RegisterInput = RegisterInput;
let LoginInput = class LoginInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for login credentials" })
], LoginInput);
exports.LoginInput = LoginInput;
let ForgotPasswordInput = class ForgotPasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], ForgotPasswordInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ForgotPasswordInput.prototype, "captchaToken", void 0);
ForgotPasswordInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for sending a password recovery email" })
], ForgotPasswordInput);
exports.ForgotPasswordInput = ForgotPasswordInput;
let ResetPasswordInput = class ResetPasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ResetPasswordInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResetPasswordInput.prototype, "newPassword", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResetPasswordInput.prototype, "emailToken", void 0);
ResetPasswordInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for Resetting password" })
], ResetPasswordInput);
exports.ResetPasswordInput = ResetPasswordInput;
let UpdateUserInput = class UpdateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "email", void 0);
UpdateUserInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating a user by an admin" })
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;
let UpdateProfileInput = class UpdateProfileInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateProfileInput.prototype, "email", void 0);
UpdateProfileInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating a profile by the user" })
], UpdateProfileInput);
exports.UpdateProfileInput = UpdateProfileInput;
let UpdatePasswordInput = class UpdatePasswordInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePasswordInput.prototype, "currentPassword", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdatePasswordInput.prototype, "newPassword", void 0);
UpdatePasswordInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for updating a users password" })
], UpdatePasswordInput);
exports.UpdatePasswordInput = UpdatePasswordInput;
let DeleteUserInput = class DeleteUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], DeleteUserInput.prototype, "id", void 0);
DeleteUserInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for deleting a user" })
], DeleteUserInput);
exports.DeleteUserInput = DeleteUserInput;
let UserInput = class UserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", Number)
], UserInput.prototype, "id", void 0);
UserInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Input for viewing a user" })
], UserInput);
exports.UserInput = UserInput;
//# sourceMappingURL=UserInput.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Token_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.User = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Consult_1 = require("./Consult");
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserRole_1 = require("../enums/UserRole");
const generateToken_1 = require("../services/generateToken");
const Rotation_1 = require("./Rotation");
const luxon_1 = require("luxon");
const Hospital_1 = require("./Hospital");
const Supervisor_1 = require("./Supervisor");
let User = class User extends typeorm_1.BaseEntity {
    validateRecoveryToken(token) {
        if (!this.lastRecovered || !this.recoveryToken)
            return false;
        const currentTime = luxon_1.DateTime.now();
        const recoveryTime = luxon_1.DateTime.fromJSDate(this.lastRecovered);
        const difference = currentTime.diff(recoveryTime, "minutes");
        if (difference.minutes < 30 && this.recoveryToken === token) {
            this.recoveryToken = null;
            return true;
        }
        else {
            return false;
        }
    }
    generateRecoveryToken() {
        this.recoveryToken = Math.floor(Math.random() * 899999 + 100000).toString();
        this.lastRecovered = new Date();
        return this.recoveryToken;
    }
    async validatePassword(password) {
        return await bcrypt_1.default.compare(password.substring(0, 256), this.password);
    }
    async generateHash(newPassword) {
        this.password = await bcrypt_1.default.hash(newPassword.substring(0, 256), 10);
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UserRole_1.UserRole),
    (0, typeorm_1.Column)({
        type: "enum",
        enum: UserRole_1.UserRole,
        default: UserRole_1.UserRole.USER,
    }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Consult_1.Consult], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Consult_1.Consult, (consult) => consult.user),
    __metadata("design:type", Array)
], User.prototype, "consults", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Rotation_1.Rotation], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Rotation_1.Rotation, (rotation) => rotation.user),
    __metadata("design:type", Array)
], User.prototype, "rotations", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Hospital_1.Hospital], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Hospital_1.Hospital, (hospital) => hospital.user),
    __metadata("design:type", Array)
], User.prototype, "hospitals", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Supervisor_1.Supervisor], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Supervisor_1.Supervisor, (supervisor) => supervisor.user),
    __metadata("design:type", Array)
], User.prototype, "supervisors", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: String, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "recoveryToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: Date, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "lastRecovered", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)({ description: "The user model" })
], User);
exports.User = User;
let Token = Token_1 = class Token {
    static create(user) {
        const newToken = new Token_1();
        newToken.id = user.id;
        newToken.token = (0, generateToken_1.createToken)(user);
        newToken.firstName = user.firstName;
        newToken.lastName = user.lastName;
        newToken.role = user.role;
        return newToken;
        //this.password = await bcrypt.hash(newPassword, 10);
    }
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Token.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Token.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Token.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Token.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UserRole_1.UserRole),
    __metadata("design:type", Number)
], Token.prototype, "role", void 0);
Token = Token_1 = __decorate([
    (0, type_graphql_1.ObjectType)({ description: "User login authentication model" })
], Token);
exports.Token = Token;
//# sourceMappingURL=User.js.map
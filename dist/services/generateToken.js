"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createToken(user) {
    const { id, role } = user;
    const secret = process.env.JWT_SECRET;
    if (!secret)
        throw Error("No Secret!");
    const expiresIn = process.env.JWT_EXPIRY || "1d";
    return jsonwebtoken_1.default.sign({ id, role }, secret, { expiresIn });
}
exports.createToken = createToken;
//# sourceMappingURL=generateToken.js.map
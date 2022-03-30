"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authChecker = exports.contextGenerator = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET)
    throw Error("No secret for JWT!");
// TODO: redo this entirely. check types.
const contextGenerator = ({ req }) => {
    const header = req.headers.authorization;
    if (!header)
        return {
            isAuthenticated: false,
            authenticationError: new apollo_server_core_1.ForbiddenError("No Authorization header."),
        };
    const token = header.split(" ");
    if (!token)
        return {
            isAuthenticated: false,
            authenticationError: new apollo_server_core_1.ForbiddenError("Malformed Authorization header."),
        };
    try {
        const decodeToken = jsonwebtoken_1.default.verify(token[1], JWT_SECRET);
        //console.log(decodeToken);
        if (typeof decodeToken === "string")
            return {
                isAuthenticated: false,
                authenticationError: new apollo_server_core_1.ForbiddenError("Malformed Token"),
            };
        console.log(`${decodeToken.role ? "Admin" : "User"} ${decodeToken.id}: ${req.body.operationName}`);
        if (!decodeToken)
            return {
                isAuthenticated: false,
                authenticationError: new apollo_server_core_1.ForbiddenError("Malformed Authorization header."),
            };
        return { isAuthenticated: true, user: decodeToken };
    }
    catch (err) {
        console.log("Error:");
        console.log(err);
        if (err instanceof jsonwebtoken_1.TokenExpiredError) {
            return {
                isAuthenticated: false,
                authenticationError: new apollo_server_core_1.ForbiddenError("JWT Expired."),
            };
        }
        else
            return {
                isAuthenticated: false,
                authenticationError: new apollo_server_core_1.ForbiddenError("Error in decoding authentication"),
            };
    }
};
exports.contextGenerator = contextGenerator;
const authChecker = ({ context }, requiredRoles) => {
    if (requiredRoles.length === 0)
        return true;
    if (!context.isAuthenticated) {
        throw context.authenticationError;
    }
    if (!context.user)
        return false;
    const authorized = requiredRoles.some((allowedRole) => allowedRole === context.user.role);
    if (authorized)
        return true;
    return false;
};
exports.authChecker = authChecker;
//# sourceMappingURL=authChecker.js.map
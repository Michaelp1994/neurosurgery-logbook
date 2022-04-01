import { UserRole } from "../enums/UserRole";
import type { AuthChecker } from "type-graphql";
import { ReturnContext, BaseContextType, DecodedToken } from "../types";
import { ContextFunction, ForbiddenError } from "apollo-server-core";
import jwt, { TokenExpiredError } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw Error("No secret for JWT!");

// TODO: redo this entirely. check types.
export const contextGenerator: ContextFunction<
    BaseContextType,
    ReturnContext
> = ({ req }) => {
    const header = req.headers.authorization;
    if (!header)
        return {
            isAuthenticated: false,
            authenticationError: new ForbiddenError("No Authorization header."),
        };
    const token = header.split(" ");
    if (!token)
        return {
            isAuthenticated: false,
            authenticationError: new ForbiddenError(
                "Malformed Authorization header."
            ),
        };

    try {
        const decodeToken = jwt.verify(token[1], JWT_SECRET);

        //console.log(decodeToken);
        if (typeof decodeToken === "string")
            return {
                isAuthenticated: false,
                authenticationError: new ForbiddenError("Malformed Token"),
            };
        console.log(
            `${decodeToken.role ? "Admin" : "User"} ${decodeToken.id}: ${
                req.body.operationName
            }`
        );
        if (!decodeToken)
            return {
                isAuthenticated: false,
                authenticationError: new ForbiddenError(
                    "Malformed Authorization header."
                ),
            };

        return { isAuthenticated: true, user: decodeToken as DecodedToken };
    } catch (err: unknown) {
        console.log("Error:");
        console.log(err);
        if (err instanceof TokenExpiredError) {
            return {
                isAuthenticated: false,
                authenticationError: new ForbiddenError("JWT Expired."),
            };
        } else
            return {
                isAuthenticated: false,
                authenticationError: new ForbiddenError(
                    "Error in decoding authentication"
                ),
            };
    }
};

export const authChecker: AuthChecker<ReturnContext, UserRole> = (
    { context },
    requiredRoles
) => {
    if (requiredRoles.length === 0) return true;
    if (!context.isAuthenticated) {
        throw context.authenticationError;
    }
    if (!context.user) return false;

    const authorized = requiredRoles.some(
        (allowedRole) => allowedRole === context.user.role
    );
    if (authorized) return true;
    return false;
};

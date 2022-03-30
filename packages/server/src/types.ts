import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { UserRole } from "./enums/UserRole";

export interface DecodedToken extends JwtPayload {
    id: number;
    role: UserRole;
    iat: number;
    exp: number;
}

export interface AuthContext {
    isAuthenticated: true;
    user: DecodedToken;
}

export interface UnauthContext {
    isAuthenticated: false;
    authenticationError?: Error;
}

export interface BaseContextType {
    req: Request;
    res: Response;
}

export type ReturnContext = AuthContext | UnauthContext;

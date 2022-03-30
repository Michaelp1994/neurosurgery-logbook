import jwt from "jsonwebtoken";
import { User } from "../models/User";

export function createToken(user: User): string {
    const { id, role } = user;
    const secret = process.env.JWT_SECRET;
    if (!secret) throw Error("No Secret!");
    const expiresIn = process.env.JWT_EXPIRY || "1d";
    return jwt.sign({ id, role }, secret, { expiresIn });
}

import { registerEnumType } from "type-graphql";

export enum UserRole {
    USER,
    ADMIN,
}

registerEnumType(UserRole, {
    name: "UserRole", // this one is mandatory
    description: "The basic roles a user can have", // this one is optional
});

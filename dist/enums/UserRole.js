"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const type_graphql_1 = require("type-graphql");
var UserRole;
(function (UserRole) {
    UserRole[UserRole["USER"] = 0] = "USER";
    UserRole[UserRole["ADMIN"] = 1] = "ADMIN";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
(0, type_graphql_1.registerEnumType)(UserRole, {
    name: "UserRole",
    description: "The basic roles a user can have", // this one is optional
});
//# sourceMappingURL=UserRole.js.map
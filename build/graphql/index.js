"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const user_1 = require("./resolvers/user");
const user_2 = require("./typedefs/user");
const UserSchema = graphql_tools_1.makeExecutableSchema({
    typeDefs: user_2.userTypeDefs,
    resolvers: user_1.userResolvers
});
exports.default = UserSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyL2dyYXBocWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFFbkQsMkNBQStDO0FBQy9DLDBDQUE2QztBQUU3QyxNQUFNLFVBQVUsR0FBa0Isb0NBQW9CLENBQUM7SUFDckQsUUFBUSxFQUFFLG1CQUFZO0lBQ3RCLFNBQVMsRUFBRSxvQkFBYTtDQUN6QixDQUFDLENBQUM7QUFFSCxrQkFBZSxVQUFVLENBQUMifQ==
import {makeExecutableSchema} from "graphql-tools";
import {GraphQLSchema} from "graphql";
import {userResolvers} from "./resolvers/user";
import {userTypeDefs} from "./typedefs/user";

export const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: userTypeDefs,
  resolvers: userResolvers
});

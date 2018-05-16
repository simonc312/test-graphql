import {makeExecutableSchema} from "graphql-tools";
import {GraphQLSchema} from "graphql";
import {userResolvers} from "./resolvers/user";
import {userTypeDefs} from "./typedefs/user";

const UserSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: userTypeDefs,
  resolvers: userResolvers
});

export default UserSchema;

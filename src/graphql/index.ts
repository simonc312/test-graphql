import {makeExecutableSchema} from "graphql-tools";
import {GraphQLSchema} from "graphql";
import {
  userResolvers,
  orderResolvers,
} from "./resolvers/";
import {
  userTypeDefs,
  orderTypeDefs,
} from "./typedefs/";

export const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: userTypeDefs,
  resolvers: userResolvers
});

export const orderSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: orderTypeDefs,
  resolvers: orderResolvers
});

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
import { FirstFromDirective } from "./directives";

export const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: userTypeDefs,
  resolvers: userResolvers,
  schemaDirectives: {
    first: FirstFromDirective
  },
});

export const orderSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: orderTypeDefs,
  resolvers: orderResolvers
});

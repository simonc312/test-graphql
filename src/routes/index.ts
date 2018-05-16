import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import {
  userSchema,
  orderSchema,
} from "../graphql/index";

export default (app: express.Application) => {
  app.use("/user", graphqlHTTP({
    schema: userSchema,
    graphiql: true
  }));

  app.use("/order", graphqlHTTP({
    schema: orderSchema,
    graphiql: true
  }));
};

import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import {
  orderSchema,
} from "../../graphql/index";

const router : express.Router = express.Router();
router.use("/", graphqlHTTP({
  schema: orderSchema,
  graphiql: true
}));

export = router;
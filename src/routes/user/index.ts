import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import {
  userSchema,
} from "../../graphql/index";

const router : express.Router = express.Router();
router.use("/", graphqlHTTP({
  schema: userSchema,
  graphiql: true
}));

export = router;
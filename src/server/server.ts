import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import UserSchema from "./graphql/index";

const PORT = 8888;
const app = express();

app.use('/', graphqlHTTP({
  schema: UserSchema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

import * as express from "express";
import routes from "./routes";

const PORT = 8888;
const app = express();

routes(app);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

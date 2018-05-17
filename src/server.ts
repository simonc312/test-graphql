import * as express from "express";
import * as router from "./routes";

const PORT = 8888;
const app = express();

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

import * as express from "express";
import user from "./user";

export default (app: express.Application) => {
  user(app);
};

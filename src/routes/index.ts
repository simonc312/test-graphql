import * as express from "express";

import * as userRouter from "./user";
import * as orderRouter from "./order";

const router : express.Router = express.Router();
router.use("/user", userRouter);
router.use("/order", orderRouter);
export = router;

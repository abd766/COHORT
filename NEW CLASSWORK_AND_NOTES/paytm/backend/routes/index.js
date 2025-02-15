const express = require("express");
const  userRouter  = require("./user");
const  accountRouter  = require("./account");

const apiRouter = express.Router();

apiRouter.use("/users",userRouter);
apiRouter.use("/account",accountRouter);
module.exports = apiRouter;
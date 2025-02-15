const express = require("express");
const mongoose = require("mongoose");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const {zod} = require("zod");
const accountRouter = express.Router();

accountRouter.get("/balance",authMiddleware,async (req, res)=> {
    const account = await Account.findOne({
        userId: req.userId
    });
    res.status(200).json({
        balance: account.balance,
    });
})
// const senderSchema = zod.object({
//     to: zod.string(),
//     amount: zod.number()
// })
accountRouter.post("/transfer",authMiddleware, async (req, res) => {
    const {to, amount} = req.body;
    const session = await mongoose.startSession();
    session.startTransaction();

    // const validateBody = senderSchema.safeParse(req.body);
    // if(!validateBody){
    //     await session.abortSession();
    //    return res.status(411).json({
    //         msg: "Wrong format of details for sending money."
    //     })
    // }
     const sender = await Account.findOne({userId: req.userId}).session(session);
    //  if(){
    //     await session.abortTransaction();
    //     return res.status(400).json({
    //         msg: "Amount cannot be negative"
    //     })
    //  }
     if((!sender || sender.balance < amount) || amount < 0){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Insufficient funds in Sender's Account or the Amoutn cannot be negative."
        })
     }
        
     const reciever = await Account.findOne({userId: to}).session(session);
     if(!reciever){
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Reciever not found."
        })
     }
     
      await Account.updateOne({userId: req.userId},{ $inc : {balance: -amount}}).session(session);
      await Account.updateOne({userId: to},{ $inc : {balance: amount}}).session(session);

     await session.commitTransaction();
     session.endSession();
     res.status(200).json({
        msg:"Transaction Successfull",
     });

})

module.exports = accountRouter;
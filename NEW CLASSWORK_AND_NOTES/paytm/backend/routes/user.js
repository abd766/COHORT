const express = require("express");
const zod = require("zod");
const {User, Account} = require("../db");
const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const userRouter = express.Router();


const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})

userRouter.post("/signup", async (req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if (!success) {
         res.status(411).json({
            msg: "Incorrect inputs"
        })
        return;
    }
    const existingUser = await User.findOne({
        username: req.body.username,
    })

    if (existingUser) {
        return res.status(411).json({
            msg: "User already present."
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;
    await Account.create({
        userId,
        balance: 1*Math.random() * 10000,
    })
    const token = jwt.sign({ userId }, JWT_SECRET);
    if (user) {
       return res.status(200).json({
            msg: "User craeted Succesfully.",
            token: token,
        })
    }

});

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
userRouter.post("/signin", async (req, res) => {
    const {success} = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            msg: "Incorrect input format."
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    const userId = user._id;
    if (user) {
        const token = jwt.sign({ userId }, JWT_SECRET);
        res.json({
            userId,
            token: token,
        })
        return;
    }

    res.status(411).json({
        msg: "Wrong Username or Password."
    })
});
const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),

})
userRouter.put("/", authMiddleware, async (req, res) => {
    const body = req.body;
    const {success} = updateSchema.safeParse(body);
    if (!success) {
        res.status(411).json({
            msg: "Error while updating the information."
        })
        return;
    }

    // const userId = req.locals.user;
    await User.updateOne({ _id: req.userId }, req.body);

    res.status(200).json({
        msg: "Updated Successfully"
    });

})

userRouter.get("/bulk",authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
    // const { validateFilter } = userSchema.safeParse(req.params.filter);
    // if (!validateFilter) {
    //     res.status(411).json({
    //         msg: "Please provide correct name"
    //     })
    //     return;
    // }
    const users = await User.find({
        $or: [{
            firstName: {
                $regex: filter,
                $options: 'i' 
            }
        }, {
            lastName: {
                $regex: filter,
                $options: 'i'
            }
        }]
    });
    // if(!user){
    //     res.status(411).json({
    //         msg:"No such user with that firstName."
    //     })
    //     return;
    // }
    res.status(200).json({
        users: users.map((user) => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id,
        }))
    })
})


module.exports = userRouter;
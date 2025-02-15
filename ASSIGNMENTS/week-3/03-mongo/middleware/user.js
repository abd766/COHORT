const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const { username, password } = req.body;
        const user = await User.findOne({
            username: username,
            password: password
        });
        next();
        // if (!user) {
        //     res.status(411).json({
        //         msg: "Wrong user username"
        //     });
        // }
        // res.status(200);
       
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at userMiddleware"
        })
    }
}

module.exports = userMiddleware;
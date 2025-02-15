// Middleware for handling auth
const { Admin } = require("../db")
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({
            username: username,
            password: password
        });
        next();
        // if (!admin) {
        //     res.status(411).json({
        //         msg: "Wrong Admin username"
        //     });
        // }
        // res.status(200);
       
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error at adminMiddleware"
        })
    }
}

module.exports = adminMiddleware;
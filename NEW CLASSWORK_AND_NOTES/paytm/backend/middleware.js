const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("./config");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(403).json({
            msg: "Incorrect headers."
        })
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify( token ,JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(411).json({
            msg: err
        })
    }
}

module.exports = {
    authMiddleware
}
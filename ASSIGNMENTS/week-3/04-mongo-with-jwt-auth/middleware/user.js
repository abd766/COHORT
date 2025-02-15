const { jwt_secret } = require("../config")
const jwt = require("jsonwebtoken")
// const jwt_secret = "12345"
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ")
    const key = words[1];
    const deocdedString = jwt.verify(key, jwt_secret);
    if(deocdedString){
        req.username = deocodedString.username;
        next();
    }else{
        res.status(403).json({
            msg: "JWT Authoriazation Failed"
        })
    }
}

module.exports = userMiddleware;
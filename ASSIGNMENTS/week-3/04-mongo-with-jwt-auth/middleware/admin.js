// Middleware for handling auth
const jwt = require("jsonwebtoken")
const { jwt_secret } = require("../config")
// const jwt_secret = "12345"
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const key = words[1];
    const deocdedString = jwt.verify(key, jwt_secret);
    if(deocdedString.username){
        req.username = deocodedString.username;
        next(); 
    }else{
        res.status(403).json({
            msg: "JWT Authoriazation Failed"
        })
       
    }
}

module.exports = adminMiddleware;
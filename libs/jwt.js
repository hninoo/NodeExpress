const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
let SECRET_KEY = jwtConfig.SECRET_KEY;
let EXPIRED_AT = jwtConfig.EXPIRED_AT;
let ISSUER = jwtConfig.ISSUER;

const  generateToken = (payload) => {
    let token = jwt.sign(payload,SECRET_KEY,{ expiresIn: EXPIRED_AT, issuer: ISSUER });
    return token;

}

const verifyToken = (token) => {
    let verified = jwt.verify(token, SECRET_KEY);
    return verified;
}
module.exports = {
    generateToken,
    verifyToken
}

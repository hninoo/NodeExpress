const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
let SECRET_KEY = jwtConfig.SECRET_KEY;
let EXPIRED_AT = jwtConfig.EXPIRED_AT;
let ISSUER = jwtConfig.ISSUER;
let TOKEN_NAME = jwtConfig.TOKEN_NAME;
// let self;
// function Jwt() {
//     self = this;
//     self.SECRET_KEY = jwtConfig.SECRET_KEY;
//     self.EXPIRED_AT = jwtConfig.EXPIRED_AT;
//     self.ISSUER = jwtConfig.ISSUER;
//     self.TOKEN_NAME = jwtConfig.TOKEN_NAME;
// }

// Jwt.prototype = {
//     generateToken: (payload = {}) => {
//         if (Object.entries(payload).length === 0) {
//             payload = {
//                 name: self.TOKEN_NAME,
//                 issuedAt: Date()
//             }
//         }
//         return new Promise((resolve, reject) => {
//             jwt.sign(payload, self.SECRET_KEY, { expiresIn: self.EXPIRED_AT, issuer: self.ISSUER }, (err, encoded) => {
//                 if (err) reject(err);
//                 resolve(encoded);
//             })
//         })
//     },

//     verifyToken: (token = "") => {
//         return new Promise((resolve, reject) => {
//             if (token && token != "") {  
//                 jwt.verify(token, self.SECRET_KEY, (err, decoded) => {
//                     if(err) reject(err);
//                     resolve(decoded);
//                 });
//             }
//             reject("No Token Found");
//         })
//     }
// }

// module.exports = Jwt;

const  generateToken = (payload) => {
    const token = jwt.sign(payload,SECRET_KEY,{ expiresIn: EXPIRED_AT, issuer: ISSUER });
    return token;

}

module.exports = {
    generateToken
}

const Jwt = require('../libs/jwt');
const jwtConfig = require('../config/jwt');
let SECRET_KEY = jwtConfig.SECRET_KEY;

const checkToken = (req, res, next) => {
	
	let token = req.headers.authorization;
	if (!token) return res.status(401).send("Access Denied / Unauthorized request");
	try {
        token = token.split(' ')[1] // Remove Bearer from string

        if (token === 'null' || !token) return res.status(401).send('Unauthorized request');
		let verifiedUser = Jwt.verifyToken(token, SECRET_KEY);  
		
        if (!verifiedUser) return res.status(401).send('Unauthorized request')

        req.user = verifiedUser; 
        next();

	}catch (error) {
        // console.log(error);
        res.status(401).send("Invalid Token");
    }
}

module.exports = {
    checkToken
}
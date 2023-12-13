//.env config
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	PORT : process.env.PORT,
	ENV : process.env.NODE_ENV,
	IV: "JMF#R4WrP5#U%S8K",
	ENC_KEY: "&wdZGQ9zqB$kcPrD&nMB3YqA8@QV%S2D",
	SOCKET_SERVER: `http://127.0.0.1:${process.env.PORT}`
};
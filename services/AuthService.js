const passwordHash = require('password-hash');
const User = require('../models/User');
const Jwt = require('../libs/jwt');

const register=async (userName,password)=>{

    let user = new User({
        username: userName,
        password: passwordHash.generate(password),
    });
    return user.save();

}

const login = async (userName,password)=>{

    const filter = {
        username: userName
    };
   
    let user = await User.findOne(filter);
    if(user){
        let isCorrect = user && passwordHash.verify(password, user.password) ? true : false;
        if (isCorrect) {
            let token =  Jwt.generateToken({userId: user._id, name: user.username})
            return token;
        }
    }
    throw Error("Invalid user or password");
    
    
};

module.exports = {
    register,
    login
}

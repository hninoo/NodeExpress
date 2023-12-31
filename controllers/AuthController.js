const authSerivce = require('../services/AuthService');


const register = async function( req,res,next)
{
    let userName = req.body['username'];
    let password = req.body['password'];
    try
    {
        await authSerivce.register(userName,password);
        res.status(201).send({message:"Successfully Register."});
    }
    catch (err) {
        console.log(err)
        res.status(400).send({message:"User already existed"});
    }

}
const login = async function(req,res,next)
{
    
    let userName = req.body['username'];
    let password = req.body['password'];
    try
    {
        let token = await authSerivce.login(userName,password);
        res.status(200).send({ token });
    }
    catch (err) {
       
        res.status(401).send({message:"Invalid user"});
    }
}

const getUser = async function(req,res,next)
{
    try
    {
        let user = await authSerivce.getUser( req.user);
        res.status(200).send({ "user":user });
    }
    catch (err) {
       
        res.status(404).send({message:"User Info not found"});
    }
}

module.exports = {
    register,
    login,
    getUser
}
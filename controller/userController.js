const { createUser, login } = require('../service/users');
const register = async (req,res) =>{
  const response = await createUser(req,res);
  res.json(response);
}

const userLogin = async (req,res)=>{
    const response = await login(req,res);
    res.json(response);
}

const LoggedInUser = async (req,res)=>{
    const users = {
        id : req.user.id,
        name : req.user.name,
        email : req.user.email,
        createdAt : req.user.createdAt,
    }
   res.json({
      user:users
   });
}
module.exports = {
    register,
    userLogin,
    LoggedInUser
}
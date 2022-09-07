const route = require('express').Router();
const usercontroller = require('../controller/userController');
const Authications  = require('../middleware/authentication.middleware');
// User routes
route.post('/register',usercontroller.register);
route.post('/login',usercontroller.userLogin);
route.get('/get-login-user',Authications,usercontroller.LoggedInUser);
module.exports=route;
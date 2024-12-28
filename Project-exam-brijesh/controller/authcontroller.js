 const { log } = require('console');
const userModel = require('../Models/Ragistermodel') 

const Ragister = (req , res) =>{
    if(res.locals.users){
    return res.redirect('/Product');
    }

    return res.render('index');
}
const Login = (req , res) =>{
    if(res.locals.users){
        return res.redirect('/Product');
        }
    return res.render('logindata');
}
const Product = (req , res) =>{
    return res.render('Products');
}
const registerdata = async(req , res) =>{
    const {name,email,password} = req.body;
   console.log(req.body);
      await userModel.create({
        name,email,password
      })
    return res.redirect('/');
}

const logindata = async(req , res) =>{
    const {email,password} = req.body;
   const user =  await userModel.findOne({email:email}) 
   console.log(user);
   
    if(user.password != password){
    return res.redirect('/Login');


    }
    return res.redirect('/Product');
    
}
module.exports =  {Ragister ,registerdata ,Login, logindata , Product}
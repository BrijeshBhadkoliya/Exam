const express = require('express');
const { Ragister , registerdata , logindata ,Login } = require('../controller/authcontroller');
 
const passport = require('passport');

const Router = express.Router()
 
Router.get('/' , Ragister )
Router.post('/registerdata' , registerdata )
Router.get('/Login' , Login )

Router.post('/logindata' ,passport.authenticate('local',{failureRedirect:'/'}),  logindata )
 





 module.exports = Router;
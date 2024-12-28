const express = require('express')
 

const Router = express.Router()
 const passport = require('passport');
 
Router.use('/' , require('./Auth'))
Router.use('/Product' , passport.checkUser,require('./Products') )

 module.exports = Router  
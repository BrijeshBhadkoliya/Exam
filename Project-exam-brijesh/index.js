
const express = require('express')

const db = require('./Config/db')
const app = express()


const port = 8000
// passport js use 
const passport = require('passport')

const passportlocal = require('./Config/passport-local')

const session = require('express-session');

app.use(session({
    secret: 'nikhil',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setUser);


const path = require('path')
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.set('view engine' , 'ejs')
app.use(express.urlencoded())
app.use('/',require('./Routs/indexRouter'))

app.listen(port ,  (err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`server is runing http://localhost:${port}/`);

}) 
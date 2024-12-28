const passport=require('passport')

const passportlocal=require('passport-local').Strategy


const usersmodels=require('../Models/Ragistermodel')

passport.use(new passportlocal({
    usernameField: 'email',
}, async (email, password, done) => {
    
    try {
        let user = await usersmodels.findOne({ email: email });
        if (!user || user.password != password) {
            console.log("Email and Password not valid");
            return done(null, false)
        }
        return done(null, user);
    } catch (err) {
        console.log(err);
        return done(null, false);
    }
}))

passport.serializeUser((user,done)=>{
    console.log(user);
    
    return done(null,user.id)
    
})
passport.deserializeUser(async (id, done) => {
    try {
        const user = await usersmodels.findById(id);
        console.log(user);
     
        done(null, user); 
    } catch (err) {
        done(err, null);
    }
});
passport.checkUser = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/')
    }
    return next();
}
passport.setUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.users = req.user
    }
    return next();
}


module.exports=passport
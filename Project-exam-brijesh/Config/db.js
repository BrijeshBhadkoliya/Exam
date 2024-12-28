const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Exam');

const database = mongoose.connection;

database.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('db is connected');
})

module.exports = database;
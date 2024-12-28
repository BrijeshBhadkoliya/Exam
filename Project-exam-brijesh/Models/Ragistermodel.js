const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
  
    name : {
        type:String,
        required : true,
    },
     email : {
        type : String,
        required : true,
    },
     password : {
        type : String,
        required : true,
    }
})

const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
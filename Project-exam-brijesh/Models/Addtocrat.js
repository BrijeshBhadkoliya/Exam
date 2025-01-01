const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
  
    name : {
        type:String,
        required : true,
    },
     Price : {
        type : String,
        required : true,
    },
     qt: {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    Image : {
        type : String,
        required : true,
    },
})

const Productcrat = mongoose.model('Addcrat', DataSchema);

module.exports = Productcrat; 
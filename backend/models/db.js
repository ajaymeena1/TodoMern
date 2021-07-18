const mongoose = require("mongoose");

const Schema =  mongoose.Schema;


//SCHEMA
const NinjaSchema = new Schema({

    tasks:String,
    });
    
 //Model   
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;

// const mongoose = require("mongoose");
// const Schema =  mongoose.Schema;


// const GeoSchema = new Schema({
//     type:{
//         type:String,
//         default:"point"
//     },
//     coordibates:{
//         type:[Number],
//         index:"2dsphere"
//     }
// })

// const NinjaSchema = new Schema({

// tasks:String,
// });

// const Ninja = mongoose.model('ninja',NinjaSchema);
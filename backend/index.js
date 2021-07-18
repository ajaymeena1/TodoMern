const express = require("express");
// const bodyParser = require('body-parser');


const mongoose = require("mongoose")
// https://github.com/ajaymeena1/CrudOperation.git
// "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe"
const routes = require('./routes/api');

// const MONGODB_URL="mongodb+srv://ajay:ajay9753@tododb.hhjmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
// app.get("/ajay",(req,res) => {
//     res.send({
//         name:"ajay"
//     })
// })
mongoose.connect('mongodb://localhost/ninjago',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))


// app.use(function(err,req,res,next){
//     res.status(422).send({error:err.message})
// })


app.use('/api', require('./routes/api'));

app.listen(process.env.port || 5008,() => {
    console.log("server start addjef")
})

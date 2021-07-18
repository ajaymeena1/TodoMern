const express = require("express");

const router = express.Router();

const Ninja = require('../models/db');


router.get("/ajay", (req, res) => {
    Ninja.find({}).then((data) => {
        // console.log("dataaaaa" , data);
        res.json(data);
    }).catch((error) => {
        console.log("error", error)

    })
})



router.post("/save", (req, res) => {
    const data = req.body
    // console.log("data",data);
    Ninja.create(data.task).then(doc => {
        // console.log("data",doc);

        res.status(201).json({
            message: "Password Inserted Successfully",
            results: doc
        });
    })
        .catch(err => {
            res.json(err);
        });

    // const newModel = new Ninja(data);

    // newModel.save().then(doc=>{
    //     res.status(201).json({
    //         message:"Password Inserted Successfully",
    //         results:doc
    //     });
    // })
    // .catch(err=>{
    //     res.json(err);
    // });

    // if (error) {
    //     res.status(500).json({ msg: 'Sorry, internal server errors' });

    // } else {
    //     res.json({
    //         msge:"we recieved ur data",
    //     })
    // }




})

// router.put('/upd/:id',(req,res,next) => {
//     Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
//         Ninja.findOne({_id:req.params.id}).then(function(ninja){
//             res.send(ninja)
//         })

//     })
// })



//update
router.put('/upd', (req, res, next) => {
    var _id = req.body._id;
    Ninja.findByIdAndUpdate(_id, req.body).then(function (data) {
        Ninja.findOne(_id).then(function (data) {
            res.send(data)
        })

    })
})



router.delete('/del/', (req, res) => {
    var _id = req.body._id;
    console.log("id", _id)
    Ninja.findByIdAndRemove(_id).then(function (data) {

        res.json(data)


    }).catch((error) => {
        console.log("data", error)

    })
})

module.exports = router;




// // ajay9753


// const data = {
//     tasks:'welcome'
// }

// Ninja.save().then(function(err) {
//     console.log('User Created');
// })

// router.get("/aj ",(req,res,next) => {
//     Ninja.geoNear({type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},

// {maxDistance: 100000, spherical: true})

// .then(function(ninjas){

// res.send(ninjas)
// })

// })

// router.post('/aj',(req,res,next) => {
//     Ninja.create(req.body).then(function(ninja){
//         res.send(ninja)
//     }).catch(next)



// })


// router.put('/aj/:id',(req,res,next) => {
//     Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
//         Ninja.findOne({_id:req.params.id}).then(function(ninja){
//             res.send(ninja)
//         })

//     })
// })


// router.delete('/aj/:id',(req,res,next) => {
//     Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){

//             res.send(ninja)


//     })

// })


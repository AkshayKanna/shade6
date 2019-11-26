const express = require("express");
const bodyParser = require("body-parser");
// express config
const app = express();
app.use(express.static("public"));
app.set("view engine");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var cors = require("cors");
app.use(cors())

// app.get('/', function (req, res) {
//     res.send('hello akshay')
// })

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'spa';

// Create a new MongoClient
const client = new MongoClient(url);

let db;

// Use connect method to connect to the Server
client.connect(function (err) {
    db = client.db(dbName);
    console.log("RUNNING")
});

//Create a User
app.post("/user/body_service", function (req, res) {
    db.collection("bodyService").insertOne({ "first_name": req.body.first_name, "last_name": req.body.last_name, "gender": req.body.gender, "address": req.body.address, "address2": req.body.address2, "mobile_number": req.body.mobile_number, "date": req.body.date, "time_slot": req.body.time_slot, "type": req.body.type }, function (err, response) {
        console.log(response)
        res.json({ "Users": response })
    })
});

//Show all users
app.get("/body_service", function (req, res) {
    // res.json({ "users": users }) 
    db.collection("bodyService").find({}).toArray(function (err, response) {
        console.log(response)
        res.json({ "users": response })
    })
});

//Show particular user
app.get("/user/show/:id", function (req, res) {
    var userId = req.params["id"];
    var ObjectId = require('mongodb').ObjectId;
    var new_id = new ObjectId(userId);
    db.collection('bodyService').find({ "_id": new_id }).toArray(function (err, response) {
        res.json({ 'user': response })
    })
});

//Update the Details 
app.post("/user/update/:id", function (req, res) {
    const userId = req.params["id"]
    let ObjectId = require("mongodb").ObjectId
    let id = new ObjectId(userId)
    db.collection("bodyService").updateOne({ "_id": id }, { $set: { "first_name": req.body.first_name, "last_name": req.body.last_name, "gender": req.body.gender, "address": req.body.address, "address2": req.body.address2, "mobile_number": req.body.mobile_number, "date": req.body.date, "time_slot": req.body.time_slot, "type": req.body.type } }, function (err, response) {
        res.json({ "users": response })
    })
})

//Delete the Detail
app.get("/user/delete/:id", function (req, res) {
    const userId = req.params["id"]
    const ObjectId = require("mongodb").ObjectId
    let id = new ObjectId(userId)
    db.collection("bodyService").deleteOne({ "_id": id }, function (err, response) {
        res.json({ "users": response })
        console.log(response)
    })
})

app.post("/admin", function (req, res) {

    user = db.collection("admin").findOne({ "email": req.body.email }, function (err, response) {
        console.log(response)
    })
    if (user == null) {
        db.collection("admin").insertOne({ "email": req.body.email, "password": req.body.password }, function (err, response) {
            console.log(response)
            res.json("ACCOUNT CREATED")
        })
    }
    else {
        res.json("Email Exists")
    }

});

app.get("/user/sort", function (req, res) {
    db.collection("bodyService").find({}).sort("time_slot", -1).toArray(function (err, response) {
        console.log(response)
        res.json({ "users": response })
    })
})

app.get("/user_skin/sort", function (req, res) {
    db.collection("skinService").find({}).sort("time_slot", -1).toArray(function (err, response) {
        console.log(response)
        res.json({ "users": response })
    })
})

//Skin Service
app.post("/user/skin_service", function (req, res) {
    db.collection("skinService").insertOne({ "first_name": req.body.first_name, "last_name": req.body.last_name, "gender": req.body.gender, "address": req.body.address, "address2": req.body.address2, "mobile_number": req.body.mobile_number, "date": req.body.date, "time_slot": req.body.time_slot, "type": req.body.type }, function (err, response) {
        console.log(response)
        res.json({ "Users": response })
    })
});

//Show all users for skin Service
app.get("/skin_service", function (req, res) {
    // res.json({ "users": users }) 
    db.collection("skinService").find({}).toArray(function (err, response) {
        console.log(response)
        res.json({ "users": response })
    })
});

app.get("/user_skin/show_skin/:id", function (req, res) {
    var userId = req.params["id"];
    var ObjectId = require('mongodb').ObjectId;
    var new_id = new ObjectId(userId);
    db.collection('skinService').find({ "_id": new_id }).toArray(function (err, response) {
        res.json({ 'user': response })
    })
});


//Update the Details 
app.post("/user_skin/update_skin/:id", function (req, res) {
    const userId = req.params["id"]
    let ObjectId = require("mongodb").ObjectId
    let id = new ObjectId(userId)
    db.collection("skinService").updateOne({ "_id": id }, { $set: { "first_name": req.body.first_name, "last_name": req.body.last_name, "gender": req.body.gender, "address": req.body.address, "address2": req.body.address2, "mobile_number": req.body.mobile_number, "date": req.body.date, "time_slot": req.body.time_slot, "type": req.body.type } }, function (err, response) {
        res.json({ "users": response })
    })
})

//Delete the Detail
app.get("/user_skin/delete_skin/:id", function (req, res) {
    const userId = req.params["id"]
    const ObjectId = require("mongodb").ObjectId
    let id = new ObjectId(userId)
    db.collection("skinService").deleteOne({ "_id": id }, function (err, response) {
        res.json({ "users": response })
        console.log(response)
    })
})


//Aggregation Operation
app.post("/user/find", function (req, res) {
    db.collection("bodyService").aggregate([
        { $match: { "first_name": req.body.first_name } }, { $group: { _id: "$type" } }
    ]).toArray(function (err, response) {
        res.json({ "users": response })
        console.log(JSON.stringify(response))
    })
})
app.listen(3007)
console.log("Running Server")
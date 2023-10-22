const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer"); // Import nodemailer
const app = express();
require("dotenv").config();

const path = require('path');
const database = require("./config/database");

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.set('strictQuery', true);

// Create an email transporter
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "pereradilshan594@gmail.com",
      pass: "ysos lpen rcug cmxn", // Corrected password
    },
  });

//using singleton
database.connect().then(() => {

    //console.log('Connected to MongoDB!!!');

    app.listen(PORT, () => {

        console.log(`Server is up and running on port ${PORT}`);
        //initGoogleAuthRoutes(app, passport)
        //googleAuth(passport)

    });
}).catch((error) => {
    console.log("Error Connecting MongoDb", error);
});

const connection = mongoose.connection;

const rmRouter = require("./routes/rm.js");//to access path of router folder, file

//app.use filefunction to use router file
//http://localhost:8070/rm
//then it hit here and call to another key const variable of rmRouter
//....../rm can be any name

app.use("/rm",rmRouter);

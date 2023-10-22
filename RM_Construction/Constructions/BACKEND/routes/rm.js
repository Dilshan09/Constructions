const router = require("express").Router();
const { response } = require("express");
let RM = require("../models/RM");
const sendEmail = require("../emailUtils"); // Import the sendEmail function


//------CREATE API-------

//server is common file http://localhost:8070/rm
//but inorder to create complete link http://localhost:8070/rm/add

router.route("/add").post(async (req,res) =>{

    //execute body
    const bookingid = req.body.bookingid;
    const name = req.body.name;
    const phone = Number(req.body.phone);
    const address1 = req.body.address1;
    const email = req.body.email;
    const checkin = req.body.checkin;
    const msg = req.body.msg;


    const newRM = new RM({

        bookingid,
        name,
        phone,
        address1,
        email,
        checkin,
        msg

    })
  // Save the new entry to the database
// Save the new entry to the database
try {
    // Attempt to save data to the database
    await newRM.save();
    const subject = "Delivery Information from RM Constructions";
    const message = `Dear ${name},\n\n\n\n${msg}`;
    sendEmail(email, subject, message);
    res.json("Delivery Data Added!!");
  } catch (error) {
    console.error("Error adding data: " + error);
    res.status(500).json("Error adding data: " + error.message);
  }
  

});

//-----READ API (TO SEE ENTERED VALUES)-----

//server is common file http://localhost:8070/rm
//but inorder to create complete link http://localhost:8070/rm

router.route("/").get((req,res)=>{

    //body
    //find for all
    //find by id for specific value
    //find by id to delete specific data

    RM.find().then((rm)=>{
        res.json(rm)
    }).catch((err)=>{
        console.log(err)
    })
})

//--------UPDATE API--------

//server is common file http://localhost:8070/rm
//but inorder to create complete link http://localhost:8070/rm/update/obj id
//......./update = Obj id

router.route("/update/:id").put(async (req,res) => {
    //id name want to same as route and params
    let userId = req.params.id;

    //destructor method

    //const{front end passing values} = req.body;
    const{name,phone,address1,email,checkin,msg} = req.body;

    //now we know update user id and what we want toupdate values

    const updateRM = {
        name,
        phone,
        address1,
        email,
        checkin,
        msg
    }

    const update = await RM.findByIdAndUpdate(userId,updateRM)
    .then(() => {
          res.status(200).send({status:"User updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//---------DELETE API----------

//server is common file http://localhost:8070/rm
//but inorder to create complete link http://localhost:8070/rm/delete/obj id
//......./delete = Obj id

router.route("/delete/:id").delete(async(req,res) => {
   let userId = req.params.id;

   await RM.findByIdAndDelete(userId)
   .then(() => {
    res.status(200).send({status : "User deleted"});

   }).catch((err) => {
    console.log(err.message);
    res.status(500).send({status : "Error with delete user",error: err.message});
   })
})

//------TO GET ONE USER ENTERED DATA (FECHED DATA)-------

router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await RM.findById(userId)
    .then((rm)=> {
        res.status(200).send({status: "User feched", rm});
    }).catch(()=> {
        console.log(err.message);
        response.status(500).send({status: "Error with get user",error: err.message});
    })
})

module.exports = router;

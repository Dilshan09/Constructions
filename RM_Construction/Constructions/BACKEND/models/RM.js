const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RMSchema = new Schema({  //RMSchema means shema object and it has properties like below

    bookingid : {
        type : String,
        required: true
    },
    name : {
        type :String,
        required: true
    },
    phone : {
        type :Number,
        required: true,
        maxLength: 10
    },
    address1 : {
        type : String,
        required: true
    },
    email : {
        type :String,
        required: true,
        unique: [true, 'This email is already exits']
    },
    checkin : {
        type : Date,
        required: true
    },
    msg : {
        type :String,
        required: true
    }
})
//create Deliver object with using ("table name/document name",given abou schema object name)
const Deliver = mongoose.model("Deliver",RMSchema);

module.exports = Deliver;//remember to export your given created Deliver / object
import React from 'react';
import { useState } from "react"
import Swal from "sweetalert2"
import { useEffect } from "react";
import axios from 'axios';
import "./bookingform.scss";

 const AddBookingForm  = () =>{

    
    const [bookingid, setBookingid] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address1, setAddress1] = useState('');
    const [checkin, setCheckin] = useState('');
    const [msg, setMsg] = useState('');
    
    const [emptyFields, setEmptyFields] = useState([]);
    const[error,setError] = useState(null);

  //localStorage.clear();
  useEffect(() => {
    const prefix = 'BID';
    let lastID = localStorage.getItem('lastID');
    let nextCount = 0;
    if (lastID) {
      nextCount = parseInt(lastID.substring(3), 10) + 1;
    }
    const nextID = `${prefix}${(nextCount).toString().padStart(4, '0')}`;
    localStorage.setItem('lastID', nextID);
    setBookingid(nextID);
  }, [setBookingid]);



   const handleSubmit = async (e)=> {

    console.log(e);
    e.preventDefault();
    
        const emptyFields = [];

        if (!bookingid) {
          emptyFields.push("bookingid");
        }
        if (!name) {
          emptyFields.push("name");
        }
        if (!phone) {
          emptyFields.push("phone");
        }
        if (!address1) {
          emptyFields.push("address1");
        }          
        if (!email) {
          emptyFields.push("email");
        }
        if (!checkin) {
          emptyFields.push("checkin");
        }
        if (!msg) {
          emptyFields.push("msg");
        }
        if(emptyFields.length > 0) {
          setEmptyFields(emptyFields);
          return;
        }


    const booking = {
        bookingid,
        name,
        email,
        phone,
        address1,
        checkin,
        msg}

        console.log(checkin)
        
        const  response = await fetch("http://localhost:8070/rm/add",{
        method:'POST',
        body: JSON.stringify(booking),
        headers: {
            'Content-Type': 'application/json',
        },
     });

     const json = await response.json()
     if (!response.ok){
       setError(json.error)
     }

     if (response.ok){

        setBookingid('');
        setName('');
        setEmail('');
        setPhone('');
        setAddress1('');
        setCheckin('');
        setMsg('');
        setError(null)

        console.log('New Information Details Added',json)
     }
     Swal.fire("Done!", "New Information Details Added Successfull!", "success");


   };

return(

    <form className="create"  onSubmit={handleSubmit}>

      <h3> ADD NEW DELIVERY INFORMATION  </h3>

     
      
        <label> Delivery ID   </label>
        <input
             type ="text"
             placeholder='Enter Delivery ID ' required
             onChange={(e)=> setBookingid(e.target.value)}
            value={bookingid}
        />

        <label> Supplier Name   </label>
        <input
             type ="text"
             placeholder='Enter Name ' required
             onChange={(e)=> setName(e.target.value)}
            value={name}
        />
        {emptyFields.includes("name") && (
              <div className="error">*Please enter Name*</div>
        )}


<label> Suplier Email  </label>
        <input
             type ="email"
             unique = "true"
             placeholder=' Enter Email' required
             onChange={(e)=> setEmail(e.target.value)}
            value={email}
        
        />
        {emptyFields.includes("mail") && (
              <div className="error">*Please enter Email*</div>
        )}


         <label> Suplier Contact Number:</label>
            <input
            type="tel"
            pattern="^[0-9]{10}$"
            placeholder="Enter Contact Number"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            />
        {emptyFields.includes("tele") && (
              <div className="error">*Please enter Phone No*</div>
        )}


        <label> Suplier Address </label>
        <input
             type ="text"
             placeholder='Enter Address ' required
             onChange={(e)=> setAddress1(e.target.value)}
            value={address1}
        
        />
        {emptyFields.includes("address") && (
              <div className="error">*Please enter Address1*</div>
        )}

         <label> Allowing Date  </label>
        <input
             type ="date"
             min={new Date().toISOString().slice(0, 10)}
             onChange={(e)=> setCheckin(e.target.value)}
            value={checkin}
        
        /> 
        {emptyFields.includes("checkin") && (
              <div className="error">*Please enter Allowing Date*</div>
        )}



<label>Delivery Info  </label>
        <input
             type ="text"
             placeholder=' Enter Massege' required
             onChange={(e)=> setMsg(e.target.value)}
            value={msg}
        
        />
        {emptyFields.includes("msg") && (
              <div className="error">*Please enter Delivery Info*</div>
        )}


        {/* <button type="submit">Submit</button> <br/> <br/>    
        

        <button onClick={() => window.location.reload()}> CANCEL </button> */}

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <button type="submit">Submit</button>
  <button onClick={() => window.location.reload()} style={{ marginLeft: '50px' }}>CANCEL</button>
</div>

        {error && <div className ="error">{error}</div>}


    </form>
    
     )
  
 }
  export default AddBookingForm;

import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./booking_update";

const UppBookingForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({


        bookingid: "",
        name: "",
        phone: "",
        address1: "",
        email: "",
        checkin: "",
        msg: "",
  });

  useEffect(() => {
    // Fetching data
    axios
      .get(`http://localhost:8070/rm/get/${id}`)
      .then((res) => {
        setValues({
          // bookingid: res.data.rm._id, // Access _id within rm
          name: res.data.rm.name,
          phone: res.data.rm.phone,
          address1: res.data.rm.address1,
          email: res.data.rm.email,
          checkin: res.data.rm.checkin,
          msg: res.data.rm.msg,
        });
        
        
      })
      .catch((err) => console.log(err));
  }, [id]);



  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8070/rm/update/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Delivery Updated Successfully!", "success");
        navigate("/booking/BookingRecorda"); //Where to navigate after updating
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="update" onSubmit={handleUpdate}>
      <h3> UPDATE DELIVER RECORDS </h3>

      {/* <label> Delivery ID </label>
      <input
        type="text"
        placeholder="Enter Delivery ID "
        required
        onChange={(e) => setValues({ ...values, bookingid: e.target.value })}
        value={values.bookingid}
      /> */}

      <label> Suplier Name </label>
      <input
        type="text"
        placeholder="Enter Name "
        required
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
      />


      <label> Contact Number:</label>
      <input
        type="tel"
        pattern="^[0-9]{10}$"
        placeholder="Enter Contact Number"
        required
        onChange={(e) => setValues({ ...values, phone: e.target.value })}
        value={values.phone}
      />

      <label> Suplier Address </label>
      <input
        type="text"
        placeholder="Enter Address "
        required
        onChange={(e) => setValues({ ...values, address1: e.target.value })}
        value={values.address1}
      />

<label> Suplier Email </label>
      <input
        type="mail"
        unique="true"
        placeholder=" Enter Email"
        required
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />

      <label> Allowing Date </label>
      <input
        type="date"
        placeholder=" Check IN Date"
        required
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setValues({ ...values, checkin: e.target.value })}
        value={values.checkin}
      />

      <label> Delivery Info </label>
      <input
        type="text"
        placeholder=" Delivery Info"
        required
        onChange={(e) => setValues({ ...values, msg: e.target.value })}
        value={values.msg}
      />

      <button type="submit">Update</button>

      <button onClick={() => window.location.reload()}> CANCEL </button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default UppBookingForm;

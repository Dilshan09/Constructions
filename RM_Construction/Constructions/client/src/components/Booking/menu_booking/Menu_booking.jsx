import React from "react";
import "./menu_booking.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink
        to="/booking/AddBookinga"
        style={{ textDecoration: "none" }}
        className="AddBooking"
        
      >
        ADD DELIVERY INFO

      </NavLink>

      <NavLink
        to="/booking/BookingRecorda"
        style={{ textDecoration: "none" }}
        className="BookingRecord"
      >
        DELIVERY RECORDS
      </NavLink>


      <NavLink
        to="/booking/GenReporta"
        style={{ textDecoration: "none" }}
        className="GenReport"
      >
        GENERATE DELIVERY REPORTS
      </NavLink>
      
      <NavLink
        to="/booking/BookingSearcha"
        style={{ textDecoration: "none" }}
        className="BookingSearch"
      >
        DELIVERY INFO
      </NavLink>
      
    </div>
  );
};

export default Menu;

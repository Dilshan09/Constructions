import Sidebar from "../../../components/Booking/sidebar_booking/Sidebar_booking";
import Navbar from "../../../components/Booking/navbar_booking/Navbar_booking";
import Menu from "../../../components/Booking/menu_booking/Menu_booking";
import Path from "../../../components/Booking/path_booking/Path_booking_bookingrecord";
import OrderBooking from "../../../components/Booking/b_data/OrderBooking";
import { Link } from "react-router-dom";


  const Orders = () => {
    return (
      <div className="addbooking">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Path />
          <h1 className="title">DELIVERY INFORMATIONS</h1>
  
          <Menu />
  
          <div class="card"></div>

          <OrderBooking/>
      </div>
      </div>
    );
  };
  
  export default Orders;
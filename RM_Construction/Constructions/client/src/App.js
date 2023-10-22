
import BookingRecord from "./pages/Booking/booking_record/booking_record";
import AddBooking from "./pages/Booking/add_booking/add_booking";
import GenReport from "./pages/Booking/generate_booking/generate_booking";
import BookingSearch from "./pages/Booking/booking_search/booking_search";
import UpdateBooking from "./pages/Booking/update_booking/update_booking";
import Orders from "./pages/Booking/o_approved/Orders";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
    
          ////////////////////////////////////////////////////////////////////////////booking
          <Route path="/booking/AddBookinga">
            <Route index element={<AddBooking />} />
          </Route>
          <Route path="/booking/BookingRecorda">
            <Route index element={<BookingRecord />} />
          </Route>
          <Route path="/booking/GenReporta">
            <Route index element={<GenReport />} />
          </Route>
          <Route path="/booking/BookingSearcha">
            <Route index element={<BookingSearch />} />
          </Route>
          <Route path="/booking/updateBookingga/:id">
            <Route index element={<UpdateBooking />} />
          </Route>
          <Route path="/booking/nodeBooking">
            <Route index element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;

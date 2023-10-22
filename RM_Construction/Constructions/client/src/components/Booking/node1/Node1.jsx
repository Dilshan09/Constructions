import React from 'react';
import "./Node1.scss";

const Notes1 = () =>{
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://img.freepik.com/free-vector/opening-soon-background-vintage-style-with-typography_23-2147886947.jpg?size=626&ext=jpg&ga=GA1.1.17992636.1683391383&semt=ais" alt="Pending"/>
      </div>
      <div className="note-content">
      <h1><big>Pending Orders</big></h1>
        <p>The manager checked and not gave the order approval yet.</p>
              
      </div>
    </div>
  );
}

export default Notes1;
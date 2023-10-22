import React from 'react';
import "./Node.scss";

const Notes = () => {
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://img.freepik.com/free-vector/approved-sign-with-shield-gradient_78370-1025.jpg?size=626&ext=jpg&ga=GA1.1.17992636.1683391383&semt=sph" alt="Approved"/>
      </div>
      <div className="note-content">
        <h1><big>Approve Orders</big></h1>
        <p>The manager checked and gave the order approval.</p>
        
      </div>
    </div>
  );
}

export default Notes;
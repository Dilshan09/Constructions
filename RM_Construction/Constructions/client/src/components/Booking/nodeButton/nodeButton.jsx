import React from 'react';
import "./nodeButton.scss";
import { Link } from "react-router-dom";

const Nodebut = () => {
    return (
        <div>
            <div className="note">
                <Link to= "/booking/nodeBooking" style={{ textDecoration: "none" }}>                    
                    <h1>Access the details.</h1>
                </Link>
            </div>
        </div>
    );
}

export default Nodebut;

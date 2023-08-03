import React from "react";
import { Link } from "react-router-dom";
// import BookingForm from "./BookingForm";

const Scooters = ({ scootersData }) => {
    return (
        <div>
            <h1>Scooters</h1>
            <div className="scootersFetch">
                {scootersData.map((scooter) => (
                    <div key={scooter.id}>
                        <h2>{scooter.bikeBrand}</h2>
                        <img src={scooter.photos[0]} alt="scooter" />
                        <p>Rental Price: {scooter.pricePerDay}</p>
                        <Link to={`/booking/scooters/${scooter.id}`}>Book Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scooters;

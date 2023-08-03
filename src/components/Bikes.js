import React from "react";
import { Link } from "react-router-dom";
// import BookingForm from "./BookingForm";

const Bikes = ({ bikesData }) => {
    return (
        <div>
            <h1>Bikes</h1>
            <div className="bikesFetch">
                {bikesData.map((bike) => (
                    <div key={bike.id}>
                        <h2>{bike.bikeBrand}</h2>
                        <img src={bike.photos[0]} alt="bike" />
                        <p>Rental price: {bike.pricePerDay}</p>
                        <Link to={`/booking/bikes/${bike.id}`}>Book Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bikes;
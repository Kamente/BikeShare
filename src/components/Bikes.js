import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Bikes = ({ bikesData }) => {
    return (
        <div className="bikes">
            <h1>Bikes</h1>
            <div className="bikesFetch">
                {bikesData.map((bike) => (
                    <div key={bike.id}>
                        <h2 className="bbrand">{bike.bikeBrand}</h2>
                        <img className="imgV" src={bike.photos[0]} alt="bike" />
                        <p>Rental price: {bike.pricePerDay}</p>
                        <Link to={`/booking/bike/${bike.id}`}>
                            <button>Book Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Bikes;
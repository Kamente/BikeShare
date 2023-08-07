import React from "react";
import { Link } from "react-router-dom";

const Scooters = ({ scootersData }) => {
    return (
        <div className="scooters">
            <h1>Scooters</h1>
            <div className="scootersFetch">
                {scootersData.map((scooter) => (
                    <div key={scooter.id}>
                        <h2>{scooter.bikeBrand}</h2>
                        <img className="imgSV" src={scooter.photos} alt="scooter" />
                        <p>Rental Price: {scooter.pricePerDay}</p>
                        <Link className="link" to={`/booking/scooters/${scooter.id}`}>
                            <button className="link">Book Now</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scooters;

import React from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
    return (
        <div className="vehicleCards">
            <div className="vehicleCard">
                <Link to="/bikes">
                    <h3>Bikes</h3>
                    <img
                        src="https://example.com/path/to/bikes-image.jpg"
                        alt="Bikes"
                    />
                </Link>
            </div>
            <div className="vehicleCard">
                <Link to="/scooters">
                    <h3>Scooters</h3>
                    <img
                        src="https://example.com/path/to/scooters-image.jpg"
                        alt="Scooters"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Vehicles;

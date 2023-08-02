import React from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
    return (
        < div className="display-vehicles">
            <h1>Vehicles</h1>
            <p>Select the rental type, Scooter or Bikes?</p>
            <div className="vehicleCards">
                <div className="vehicleCard">
                    <Link to="/bikes">
                        <h3>Bikes</h3>
                        <img
                            src="https://res.cloudinary.com/bicycly-cloud/image/upload/v1543860822/Bikes/bike-VTT-1.jpg"
                            alt="Bikes"
                        />
                    </Link>
                </div>
                <div className="vehicleCard">
                    <Link to="/scooters">
                        <h3>Scooters</h3>
                        <img
                            src="https://i.pinimg.com/564x/e4/21/2e/e4212ecf588319ea55e39a5435e92653.jpg"
                            alt="Scooters"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;

import React from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
    return (
        < div className="display-vehicles">
            <h1>Vehicles</h1>
            <p>Select the rental type, Scooter or Bikes?</p>
            <div className="vehicleCards">
                <div className="card">
                    <Link to="/bikes">
                        <h3>Bikes</h3>
                        <img
                            src="https://res.cloudinary.com/bicycly-cloud/image/upload/v1543860822/Bikes/bike-VTT-1.jpg"
                            alt="Bikes"
                        />
                    </Link>
                    <p className="descrip">
                        Choose from a wide variety of bikes<br /> suitable for all terrains and
                        adventures.<br /> Whether you're exploring the city or <br />hitting the trails, we
                        have the perfect<br /> bike for you.
                    </p>
                </div>
                <div className="card">
                    <Link to="/scooters">
                        <h3>Scooters</h3>
                        <img
                            src="https://i.pinimg.com/564x/e4/21/2e/e4212ecf588319ea55e39a5435e92653.jpg"
                            alt="Scooters"
                        />
                    </Link>
                    <p className="descrip">
                        Experience the thrill of riding our <br />scooters around town. With their
                        sleek<br /> design and smooth handling, you'll <br /> enjoy a fun and <br />convenient way to
                        explore the city<br /> streets.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;

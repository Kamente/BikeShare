import React from "react";
import { Link } from "react-router-dom";

const Vehicles = () => {
    return (
        < div className="display-vehicles">
            <h1>Vehicles</h1>
            <p>Choose your ride</p>
            <div className="vehicleCards">
                <div>

                    <div className="card">
                        <Link to="/bikes">
                            <button className="vehicleType">Bicycles</button>
                            <img className="imgB"
                                src="https://i.pinimg.com/564x/0f/7f/97/0f7f97656058e5e22ee8617f72b63c7a.jpg"
                                alt="Bikes"
                            />
                        </Link>
                        <p className="descrip">
                            Choose from a wide variety of bikes<br /> suitable for all terrains and
                            adventures.<br /> Whether you're exploring the city or <br />hitting the trails, we
                            have the perfect<br /> bike for you.
                        </p>
                    </div>
                </div>
                <div>

                    <div className="card">
                        <Link to="/scooters">
                            <button className="vehicleType">Scooters</button>
                            <img className="imgS"
                                src="https://i.pinimg.com/564x/ef/76/6b/ef766b43632639ac04cc0c54fd946185.jpg"
                                alt="Scooters"
                            />
                        </Link>
                        <p className="descrip">
                            Experience the thrill of riding our <br />scooters around town. With their
                            sleek<br /> design and smooth handling, you'll <br /> enjoy a fun and convenient way to
                            explore the <br />city streets.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;
import React, { useState, useEffect } from 'react';
import Bikes from "./Bikes";
import Scooters from "./Scooters";
import "./Styles.css"

const BikesAndScooters = () => {
    const [bikes, setBikes] = useState([]);
    const [selectedSection, setSelectedSection] = useState("bikes"); 

    useEffect(() => {
        fetch('https://e-bikes.onrender.com/Bikes')
            .then((resp) => resp.json())
            .then((data) => setBikes(data))
            .catch((error) => {
                console.error('Error fetching data:', error);
                setBikes([]);
            });
    }, []);

    const bikesData = bikes.slice(0, 7);
    const scootersData = bikes.slice(7, 16);

    const handleUserClick = (user) => {
        setSelectedSection(user);
    };

    return (
        <div>
            <div className="section-links">
                <button onClick={() => handleUserClick("bikes")} className={selectedSection === "bikes" ? "active" : ""}>Bicycles</button>
                <button onClick={() => handleUserClick("scooters")} className={selectedSection === "scooters" ? "active" : ""}>Scooters</button>
            </div>
            {selectedSection === "bikes" ? (
                <Bikes bikesData={bikesData} />
            ) : (
                <Scooters scootersData={scootersData} />
            )}
        </div>
    );
};

export default BikesAndScooters;

import React from "react";

const Scooters = ({ scootersData }) => {
    return (
        <div>
            <h1>Scooters</h1>
            <div className="scootersFetch">
                {scootersData.map((scooter) => (
                    <div key={scooter.id}>
                        <h2>{scooter.bikeBrand}</h2>
                        <img src={scooter.photos} alt="scooter" />
                        <p>Rental Price: {scooter.pricePerDay}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Scooters;
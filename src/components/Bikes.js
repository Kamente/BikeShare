import React from "react";

const Bikes = ({ bikesData }) => {
    return (
        <div className="bikesFetch">
            <h1>Bikes</h1>
            {bikesData.map((bike) => (
                <div key={bike.id}>
                    <h2>{bike.bikeBrand}</h2>
                    <img src={bike.photos[0]} alt="bike" />
                    <p>Rental price: {bike.pricePerDay}</p>
                </div>
            ))}
        </div>
    );
};

export default Bikes;

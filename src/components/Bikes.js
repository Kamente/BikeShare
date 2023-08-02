import React from "react";

const Bikes = ({ bikesData }) => {
    // if (!bikesData || bikesData.length === 0) {
    //     return <p>Loading...</p>;
    // }

    return (
        <div>
            <h1>Bikes</h1>
            <div className="bikesFetch">
                {bikesData.map((bike) => (
                    <div key={bike.id}>
                        <h2>{bike.bikeBrand}</h2>
                        <img src={bike.photos[0]} alt="bike" />
                        <p>Rental price: {bike.pricePerDay}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bikes;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGraduationCap, faShield } from '@fortawesome/free-solid-svg-icons';
import About from './About';
import Booking from './Booking';

function Homepage() {
    return (
        <div className="App">
            <main>
                <section>
                    <h1>How to Rent and Use Our E-Vehicles</h1>
                    <div className="bike-images">
                        <img src="https://i.pinimg.com/564x/19/0c/74/190c7408b47b1a2628d0946f63c20630.jpg" alt="Bike 1" />
                        <p>Rent and ride our premium e-bikes for an eco-friendly and enjoyable city exploration. Our bikes are designed for both daily commuters and adventurous weekend riders, ensuring a comfortable and smooth riding experience.</p>
                        <img src="https://i.pinimg.com/564x/3c/b4/15/3cb4154fe9165ca8908eae3bab75af48.jpg" alt="Bike 2" />
                        <p>Discover new places, stay active, and contribute to a sustainable environment with our electric bicycles. Embrace the convenience and efficiency of e-mobility while reducing your carbon footprint.</p>
                        <img src="https://i.pinimg.com/564x/b6/b2/4e/b6b24e1bcf6415c5bf50119bee5b7b9b.jpg" alt="Bike 3" />
                        <p>Experience the thrill of riding our electric scooters! Designed for city explorers and quick commutes, our scooters are the perfect blend of style and efficiency. Skip the traffic and enjoy the freedom of electric mobility with our high-performance scooters.</p>
                    </div>
                </section>

                <section>
                    <div className='middle'>
                        <div className='safety'>
                            <FontAwesomeIcon icon={faShield} />
                            <h2>Safety First</h2>
                            <p>Your safety is our top priority. Our e-vehicles are equipped with advanced safety features to ensure a secure ride. Ride with confidence and peace of mind, knowing that our vehicles are designed to protect you on the road.</p>
                            <img src="https://i.pinimg.com/564x/e3/96/1d/e3961dfc9b4f1d3a72f0a07d1e13a070.jpg" alt="Safety Image" />
                        </div>

                        <div className='parking'>
                            <img src="https://i.pinimg.com/564x/1e/42/ae/1e42ae9142d3352a3745f7833502bc22.jpg" alt="Parking Image" />
                            <h3>Parking</h3>
                            <p>Convenient parking facilities are available for our e-vehicles. Securely park your rented bike or scooter at designated locations near your destination. Enjoy the ease and flexibility of finding a parking spot hassle-free.</p>
                            <FontAwesomeIcon icon={faCar} />
                        </div>

                        <div className='training'>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <h2>Training Mode</h2>
                            <p>Are you new to riding e-vehicles? No worries! Our training mode is designed for beginners to get familiar with our electric bikes and scooters. Gain confidence and learn the controls in a safe and controlled environment.</p>
                            <img src="https://i.pinimg.com/564x/d4/ef/c4/d4efc4adc984d1838df62dc5beefd340.jpg" alt="Training Image" />
                        </div>
                    </div>
                </section>
            </main>


            <footer>
                <p>&copy; Copyright Roll Motion 2023. Rental Agreement. Terms of service. Privacy policy.</p>
            </footer>
        </div>
    );
}

export default Homepage;

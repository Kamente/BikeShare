import React from "react";
import "./About.css"; 

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Us</h1>
                <p>Welcome to BikeShare, your premier choice for eco-friendly urban mobility!</p>
                <p>Our mission is to revolutionize the way you experience city life by providing a convenient, efficient, and sustainable mode of transportation.</p>
                <p>With a diverse fleet of high-quality bikes and scooters, we offer you the freedom to explore your surroundings, commute with ease, and contribute to a cleaner environment.</p>
                <p>Why choose BikeShare?</p>
                <ul>
                    <li><strong>Convenience:</strong> Our user-friendly platform allows you to effortlessly rent and ride your preferred e-vehicle within minutes.</li>
                    <li><strong>Environmental Impact:</strong> By choosing BikeShare, you're making a positive impact on the environment by reducing carbon emissions and traffic congestion.</li>
                    <li><strong>Quality and Safety:</strong> We prioritize your safety and satisfaction, ensuring our vehicles are regularly maintained and equipped with advanced safety features.</li>
                    <li><strong>Exploration:</strong> Whether you're a daily commuter or an adventurous explorer, our e-bikes and scooters empower you to navigate the city in style.</li>
                    <li><strong>Community:</strong> Join our growing community of environmentally-conscious individuals who share the same passion for sustainable transportation.</li>
                </ul>
                <p>Discover the joy of effortless mobility with BikeShare. We're dedicated to enhancing your urban experience while preserving the world we share.</p>
                <p>Rent, ride, and embrace a greener future with BikeShare!</p>
            </div>
            <div className="about-images">
                <img src="https://i.pinimg.com/236x/25/97/73/2597732f2146da2c43bab71517f643cf.jpg" alt="BikeShare Riders" />
                <img src="https://i.pinimg.com/236x/57/f7/82/57f782218313a173ad4ea348077af501.jpg" alt="Eco-Friendly Transportation" />
            </div>
        </div>
    );
};

export default About;

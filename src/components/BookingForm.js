import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaCreditCard, FaPaypal } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ vehicleType, vehicleData }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!startDate || !endDate) {
            alert("Please select the rental period.");
            return;
        }

        const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        const totalPayment = 500 * days;

        const confirmPayment = window.confirm(`Confirm payment of ${totalPayment} KES for the bike?`);
        if (confirmPayment) {
            setPaymentStatus("success");
        }
    };

    return (
        <>
            <p>
                <Link to={`/${vehicleType === "Bikes" ? "bikes" : "scooters"}`}>
                    Back to {vehicleType === "Bikes" ? "Bikes" : "Scooters"}
                </Link>
            </p>
            <div className="booking-form">
                <div className="book-page">
                    <div>
                        <h2>Book {vehicleType}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                required
                            />
                            <label>Rental Period:</label>
                            <div className="date-picker-container">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Start Date"
                                    required
                                />
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    dateFormat="dd/MM/yyyy"
                                    minDate={startDate}
                                    placeholderText="End Date"
                                    required
                                />
                            </div>
                            <button type="submit">Book Now</button>
                        </form>
                        <div className="paymentdetails">
                            <h3>Payment Options:</h3>
                            <ul>
                                <li>
                                    <FaMobileAlt size={20} />
                                    <a href="#">Mpesa</a>
                                </li>
                                <li>
                                    <FaCreditCard size={20} />
                                    <a href="#">Equity Card</a>
                                </li>
                                <li>
                                    <FaPaypal size={20} />
                                    <a href="#">PayPal</a>
                                </li>
                            </ul>
                        </div>
                        <br />
                        {paymentStatus === "success" && (
                            <p className="payment-success">
                                Payment Successful! {vehicleType} <br />
                                Bike is released for {name}.
                            </p>
                        )}
                    </div>

                    <div className="bookingForm-right">
                        <img src="https://i.pinimg.com/564x/69/fe/77/69fe7775caa4e47d326ad57dcdcb2c9a.jpg" alt="bike" />

                        <div className="rental-period">
                            {startDate && endDate && (
                                <>
                                    <h3>Rental Period:</h3>
                                    <p>From: {startDate.toLocaleDateString()}</p>
                                    <p>To: {endDate.toLocaleDateString()}</p>
                                    <h3>Payment Details:</h3>
                                    <ul>
                                        <li>
                                            <FaMobileAlt size={20} />
                                            {`${500} KES per day x ${Math.ceil(
                                                (endDate - startDate) / (1000 * 60 * 60 * 24)
                                            )} days = ${500 * Math.ceil(
                                                (endDate - startDate) / (1000 * 60 * 60 * 24)
                                            )} KES`}
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingForm;

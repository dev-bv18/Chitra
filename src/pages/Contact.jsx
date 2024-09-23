import React, { useState } from 'react';
import './CSS/Contact.css';
import sent from './sent.gif';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [rating, setRating] = useState("0"); // Separate state for rating

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const contact = async () => {
        try {
            const updatedMessage = `${formData.message} (Rating: ${rating})`;
            const updatedFormData = { ...formData, message: updatedMessage };
            console.log("Contacting", updatedFormData);
            const response = await fetch('http://localhost:4000/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                window.location.replace("/");
                alert("Message sent!!");
            } else {
                alert(responseData.message);
            }
        
        } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("Failed to submit contact form. Please try again later.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const gif = document.getElementById('sentGif');
        gif.style.display = 'block'; // Show GIF
        await contact(); // Call contact function to submit form
        gif.style.display = 'none'; // Hide GIF after submission
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'filled-star' : 'empty-star'}>
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div className='contact'>
            <div className='contact-container'>
                <h1>Contact Us</h1>
                <div className='contact-fields'>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={changeHandler}
                        placeholder='Enter your name' required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Your Email Id' required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={changeHandler}
                        rows={10} required
                        placeholder="Enter your message here"
                    />
                    <div className="rateus">
                        <input
                            type="range"
                            name="rating"
                            id="rating"
                            min="0"
                            max="5"
                            value={rating}
                            onChange={handleRatingChange} required
                        />
                        <span id="rate">{renderStars()}</span>
                    </div>
                </div>
                <button onClick={handleSubmit}>Submit</button>
                <img id="sentGif" src={sent} className='giff' alt="Sent GIF" style={{ display: 'none' }} /> {/* Hidden by default */}
            </div>
        </div>
    );
};

export default Contact;

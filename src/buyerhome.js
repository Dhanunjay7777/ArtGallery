import React from 'react';
import './buyerhome.css'; // Ensure the CSS file is in the correct path
import BuyerNav from './buyernav'; // Import the BuyerNav component

const BuyerHome = ({ consumer }) => {
    return (
        <div className='content'>
            <BuyerNav /> {/* Include the navigation bar */}

            <div className="main-content">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Welcome, {consumer?.name}!</h1>
                        <p>Your journey to discover exquisite art begins here. Explore, buy, and connect with artists from around the world. We are here to help you find art that speaks to your soul.</p>
                    </div>
                </div>

                <div className="quote-section">
                    <blockquote>
                        "Every artist was first an amateur." – Ralph Waldo Emerson
                    </blockquote>
                </div>

                <div className="features-section">
                    <h2>Why You'll Love Our Platform</h2>
                    <ul className="features-list">
                        <li> Discover unique art pieces curated just for you</li>
                        <li>Secure and easy-to-use purchasing options</li>
                        <li> Connect with your favorite artists and stay updated</li>
                    </ul>
                </div>

                <div className="testimonials">
                    <h2>What Our Buyers Say</h2>
                    <blockquote>
                        "This platform changed the way I purchase art. It’s seamless and fun!" – Emily R.
                    </blockquote>
                    <blockquote>
                        "I found the perfect piece for my home, and the process was so easy." – John D.
                    </blockquote>
                </div>

                {/* Uncomment the footer if needed */}
                {/* <footer>
                    <p>&copy; 2024 ArtWorld. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                </footer> */}
            </div>
        </div>
    );
};

// Export the component
export default BuyerHome;

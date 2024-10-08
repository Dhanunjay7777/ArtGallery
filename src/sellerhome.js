import React from 'react';
import './sellerhome.css'; // Adjust the path as necessary
import Header from './sellernav';
const SellerHome = ({ consumer }) => {
    return (
        <div class="main-container">
            <Header/>
        
        <section className="dashboard-preview">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome!</h1>
                    <p>
                        Your journey to success starts here. Explore endless opportunities to showcase your creativity and connect with buyers from around the world. 
                        Manage your art with ease, track sales, and watch your business grow. We provide all the tools you need to thrive in the art marketplace, 
                        so you can focus on what truly matters—creating stunning works of art.
                    </p>
                </div>
            </div>

            <div className="quote-section">
                <blockquote>
                    "Art is not freedom from discipline, but disciplined freedom." – John F. Kennedy
                </blockquote>
            </div>

            <div className="stats-summary">
                <h2>Quick Stats</h2>
                <div className="stats">
                    <div className="stat-item">
                        <h3>Artworks Listed</h3>
                        <p>120</p>
                    </div>
                    <div className="stat-item">
                        <h3>Orders Received</h3>
                        <p>45</p>
                    </div>
                    <div className="stat-item">
                        <h3>Total Sales</h3>
                        <p>$3,200</p>
                    </div>
                </div>
            </div>
           
        </section>
        </div>
    );
};

export default SellerHome;

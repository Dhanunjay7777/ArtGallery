import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArtCard.css'; // Ensure the CSS file is in the correct path
import BuyerNav from './buyernav'; // Import the BuyerNav component
import image2 from './images/image2.jpg'; // Sample image
import image3 from './images/image3.jpg'; // Sample image
import image1 from './images/image1.jpg'; // Sample image
import image4 from './images/image4.jpg'; // Sample image

const ArtExplore = () => {
    const navigate = useNavigate();

    // Sample art data
    const artList = [
        {
            artId: '1',
            title: 'Gauthama Buddha',
            description: 'Gauthama Buddha',
            cost: 100.00,
            medium: 'Oil',
            dimensions: '12x16',
            imageUrl: image1, // Replace with actual URL
            sellerName: 'vikram',
            availability: 'InStock'
        },
        {
            artId: '2',
            title: 'Krishna',
            description: 'Krishna Playing Fluete',
            cost: 150.00,
            medium: 'Acrylic',
            dimensions: '10x14',
            imageUrl: image2, // Replace with actual URL
            sellerName: 'Surya',
            availability: 'OutOfStock'
        },
        {
            artId: '3',
            title: 'Ganesha',
            description: 'Lord Ganesha art',
            cost: 120.00,
            medium: 'Watercolor',
            dimensions: '14x20',
            imageUrl: image3, // Replace with actual URL
            sellerName: 'Vikram',
            availability: 'InStock'
        },
        {
            artId: '4',
            title: 'Little Krishna',
            description: 'Little krishna Smiling',
            cost: 120.00,
            medium: 'Watercolor',
            dimensions: '14x20',
            imageUrl: image4, // Using local image
            sellerName: 'kiran',
            availability: 'InStock'
        }
        // Add more art items as needed
    ];

    // Individual ArtCard component to display each artwork
    const ArtCard = ({ art }) => {
        const handleBuyNowClick = () => {
            // Navigate to the shipping page with art details
            navigate('/shipping', { state: { ...art } });
        };

        return (
            <div className="card">
                <img src={art.imageUrl} alt={art.title} />
                <h2>{art.title}</h2>
                <p><strong>Description:</strong> {art.description}</p>
                <p className="cost">Cost: ${art.cost.toFixed(2)}</p>
                <p><strong>Medium:</strong> {art.medium}</p>
                <p><strong>Dimensions:</strong> {art.dimensions}</p>
                {art.availability === 'OutOfStock' ? (
                    <div className="out-of-stock">Out of Stock</div>
                ) : (
                    <button className="buy-button" onClick={handleBuyNowClick}>Buy Now</button>
                )}
            </div>
        );
    };

    return (
        <div className="art-explore">
            <BuyerNav /> {/* Navigation component */}
            <div className="art-cards-container">
                {artList.map((art, index) => (
                    <ArtCard key={index} art={art} />
                ))}
            </div>
        </div>
    );
};

// Export the component as default
export default ArtExplore;

import React from 'react';
import './TwoImageRow.css'; // Import the CSS for styling if needed

const TwoImageRow = ({ image1, image2 }) => {
    return (
        <div className="two-image-row">
            <img src={image1} alt="Image 1" className="image" />
            <img src={image2} alt="Image 2" className="image" />
        </div>
    );
};

export default TwoImageRow;

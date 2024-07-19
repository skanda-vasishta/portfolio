// src/components/Home.jsx
import React from 'react';
import './Page.css'; // Assuming you have a CSS file for styling
import ImageGalleryComponent from './ImageGalleryComponent';
import Introduction from './Introduction';


const Home = () => {
    return (
        
        <div>
            <h1 id="welcome">Welcome! </h1>
            {/* <p>Welcome to the Home Page!</p> */}
            <Introduction />
            <ImageGalleryComponent id="spacing" />
        </div>
    );
};

export default Home;
// src/components/Home.jsx
import React from 'react';
import './Page.css'; // Assuming you have a CSS file for styling
import ImageGalleryComponent from './ImageGalleryComponent';
import Introduction from './Introduction';
import Socials from './Socials';


const Home = () => {
    return (
        
        <div>
            {/* <p>Welcome to the Home Page!</p> */}
            <div className='row'>
                <div   className='col-md-7'>
                    <Introduction />
                    <Socials/>
                </div>
                <div className='col-md-5'>
                    <ImageGalleryComponent id="spacing" />
                </div>
                {/* <Introduction />
                <ImageGalleryComponent id="spacing" /> */}
            </div>
            
        </div>
    );
};

export default Home;
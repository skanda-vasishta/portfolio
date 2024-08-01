// src/components/Introduction.jsx
import React from 'react';
import './Page.css'; // Assuming you have a CSS file for styling


const Introduction = () => {
    return (
        <div id="intro-cont">
        <h1 id="welcome">Welcome! </h1>

            {/* <h2 id="intro">A Brief Introduction</h2> */}
            <p id="intro">Hey everyone! My name is Skanda Vasishta, and this is my personal website/portfolio. 
            I'll be entering my third year at UC Santa Barbara in Fall, where I study Computer Science.
            Some interesting things about me are that I enjoy watching and playing sports and listening to music. 
            You'll be blessed with some pictures of me either to the right or below, depending on what type of device you're on.  
            </p>

        </div>
    );
};

export default Introduction;

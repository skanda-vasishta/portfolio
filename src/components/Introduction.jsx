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
            I guess this is my personal website or whatever, so if you want to know more about me you can either navigate
            to the About section, or follow me on my socials below. 
            </p>

        </div>
    );
};

export default Introduction;

// src/components/Introduction.jsx
import React from 'react';
import './Page.css'; // Assuming you have a CSS file for styling
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';




const Introduction = () => {
    return (
      <div className="intro-container">
        <h1 className="welcome">
            <Typewriter
                options={{
                strings: ["Hey everyone!"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 2000,
                }}
            />
            </h1>
        <div className="intro">
          <p> I'm Skanda, a computer science major at UC Santa Barbara heading into my third year. I'm passionate about the incredible advancements in software and technology, and I'm always excited to be a part of that innovation. My interests span across full-stack development, deep and machine learning (particularly NLP), data science, and computer architecture. I'm skilled in languages like C++, Python, and JavaScript, and I work with frameworks like React, Django, and Node.js. I also have experience with cloud platforms like AWS and machine learning libraries like PyTorch and Tensorflow. I'd love to connect with you on any of my socials, which you can find below! </p>
        </div>
      </div>
    );
  };

export default Introduction;

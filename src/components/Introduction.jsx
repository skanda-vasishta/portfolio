// src/components/Introduction.jsx
import React from 'react';
import '../pages/Page.css'; // Import from pages directory
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';




const Introduction = () => {
    return (
      <div className="intro-container">
        <div className="intro-content-wrapper">
          <div className="intro-text-section">
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
              <p>I'm Skanda, and I'm a 4th year CS major at UCSB graduating in December 2026 and subsequently pursuing an MS in CS, also at UCSB, starting in January 2026. I have software engineering/development internship experience, and am particularly interested in the AI/ML space. I have also researched at the systems level (computer architecture), and am currently involved with LLM research.</p>
              <p className="looking-for-opportunities">I am currently looking for internships/co-ops in Winter 2026, Spring 2026, and Summer 2026.</p>
              <a href="/portfolio/Skanda_Vasishta_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
                📄 View My Resume
              </a>
            </div>
          </div>
          <div className="intro-image-section">
            <img src="/portfolio/headshot.jpeg" alt="Skanda Vasishta" className="headshot" />
          </div>
        </div>
      </div>
    );
  };

export default Introduction;

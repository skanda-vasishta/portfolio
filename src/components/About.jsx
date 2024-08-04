// src/components/About.jsx
import React from 'react';
import Experience from './Experience';
import './Page.css'; // Assuming you have a CSS file for styling

const experienceData = [
    {
        title: 'Full Stack Web Developer Intern',
        company: 'NOAA CINMS',
        text: 'Developing end-to-end full-stack project utilizing PHP for backend systems and API development, JavaScript for interactive frontend components, and MySQL for efficient data management, enhancing system performance and user experience. Integrated REST APIs to develop custom plugins and enhance site functionality, enabling efficient data exchange and interaction between client-side applications and the backend. Designed and implemented responsive, Bootstrap-enabled user interface for cross-device compatibility. Designing and implementing robust data pipeline to process and analyze oceanic and atmospheric information, translating complex scientific data into accessible, user-friendly formats.',
        imageUrl: 'https://pbs.twimg.com/profile_images/1451221298277875717/sEfSx43N_400x400.jpg',
        link: 'https://github.com/ioos/sanctuarywatch'
    },
    {
        title: 'Undergraduate Researcher',
        company: 'UCSB ArchLab',
        text: "Researched and developed a novel hardware decompilation technique for reverse engineering computer hardware from Verilog netlists. Utilized Python circuit modeling libraries to develop a graph algorithm-based approach for identifying standard library modules within netlists, achieving a mean simulation speedup of 9× and a maximum speedup of 35× Conducted experiments and created benchmarks to test algorithm's accuracy and speedup. Automated data collection and analysis through Python, facilitating visualization and modeling.",
        imageUrl: 'https://www.ce.ucsb.edu/sites/default/files/styles/medium/public/2020-12/archlab-800-sw_0.jpg?h=dab54920&itok=OLhyw9Lv',
        link: 'https://www.arch.cs.ucsb.edu/'
    }
];


const ProjectData = [
    {
        title: 'Touch Grass',
        // company: 'NOAA CINMS',
        text: 'Developed social media platform for college students. Implemented scalable backend with Node.js and Express, cross-platform mobile interface with React Native, and real-time data synchronization with Firebase. Integrated Google Maps API for location-based features. Won award for "Best Use of Google Cloud" at SB Hacks IX.',
        // imageUrl: 'https://pbs.twimg.com/profile_images/1451221298277875717/sEfSx43N_400x400.jpg'
    },
    {
        title: 'Undergraduate Researcher',
        company: 'UCSB ArchLab',
        text: "Researched and developed a novel hardware decompilation technique for reverse engineering computer hardware from Verilog netlists. Utilized Python circuit modeling libraries to develop a graph algorithm-based approach for identifying standard library modules within netlists, achieving a mean simulation speedup of 9× and a maximum speedup of 35× Conducted experiments and created benchmarks to test algorithm's accuracy and speedup. Automated data collection and analysis through Python, facilitating visualization and modeling.",
        imageUrl: 'https://www.ce.ucsb.edu/sites/default/files/styles/medium/public/2020-12/archlab-800-sw_0.jpg?h=dab54920&itok=OLhyw9Lv'
    }
];
const About = () => {
    return (
        <div className="about-container">
            <section className="section">
                <h3>Work Experience</h3>
                <div><em>Click on the cards to see more information. </em></div>
                <Experience items={experienceData} />
            </section>
            <div></div>
            <section className="section">
                <h3>Projects</h3>
                <div><em>Coming soon. </em></div>
                {/* <Experience items={ProjectData} /> */}
            </section>            
        </div>
    );
};

export default About;

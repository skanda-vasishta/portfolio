// src/components/About.jsx
import React from 'react';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills'


import './Page.css'; 
const experienceData = [
    {
        title: 'Full Stack Web Developer Intern',
        company: 'NOAA CINMS',
        text: 'Developing end-to-end full-stack project utilizing PHP for backend systems and API development, JavaScript for interactive frontend components, and MySQL for efficient data management, enhancing system performance and user experience. Integrated REST APIs to develop custom plugins and enhance site functionality, enabling efficient data exchange and interaction between client-side applications and the backend. Designed and implemented responsive, Bootstrap-enabled user interface for cross-device compatibility. Designing and implementing robust data pipeline to process and analyze oceanic and atmospheric information, translating complex scientific data into accessible, user-friendly formats.',
        imageUrl: 'https://pbs.twimg.com/profile_images/1451221298277875717/sEfSx43N_400x400.jpg',
        link: 'https://channelislands.noaa.gov/'
    },
    {
        title: 'Undergraduate Researcher',
        company: 'UCSB ArchLab',
        text: "Researched and developed a novel hardware decompilation technique for reverse engineering computer hardware from Verilog netlists. Utilized Python circuit modeling libraries to develop a graph algorithm-based approach for identifying standard library modules within netlists, achieving a mean simulation speedup of 9× and a maximum speedup of 35× Conducted experiments and created benchmarks to test algorithm's accuracy and speedup. Automated data collection and analysis through Python, facilitating visualization and modeling.",
        imageUrl: 'https://www.ce.ucsb.edu/sites/default/files/styles/medium/public/2020-12/archlab-800-sw_0.jpg?h=dab54920&itok=OLhyw9Lv',
        link: 'https://www.arch.cs.ucsb.edu/'
    }
];


const projectList = [
    {
      title: 'Touch Grass',
      subtitle: 'May 2023',
      brief: 'A Social Media Platform for College Students',
      description: 'Implemented scalable backend with Node.js and Express, cross-platform mobile interface with React Native, and real-time data synchronization with Firebase. Integrated Google Maps API for location-based features. Won award for "Best Use of Google Cloud" at SB Hacks IX.'
    },
    {
      title: 'Classify',
      subtitle: 'Jan 2024',
      brief: 'Simplyfing Course Scheduling',
      description: 'Developed an edtech application for ranking professors and classes based on student preferences. Built the frontend with React Native and the backend with Node.js and Express, using MongoDB for data management. Scraped data with Python and BeautifulSoup, and integrated Google Cloud Natural Language Processing API for sentiment analysis to generate detailed rankings',
    },
    {
        title: 'Mycelium: Module Finding with Functional Netlist Representation',
        subtitle: 'June 2024',
        brief: 'A novel algorithmic technique for reverse engineering hardware designs',
        description: 'Employs a functional representation and a bottom-up matching algorithm to efficiently identify and extract standard library modules from large designs. Addresses the scalability issues of existing methods, improving simulation speed and accuracy. Submitted to ASPLOS conference, currently in review for publication.',
      },
  ];

const About = () => {
    return (
        <div className="about-container">
            <section className="section">
                <h3>Work Experience</h3>
                <div><em>Click on the cards to see more information. Below is some of my relevant work experience. </em></div>
                <Experience items={experienceData} />
            </section>
            <div></div>
            <section className="section">
                <h3>Projects</h3>
                <div><em>Below are some cool projects I've worked on, more coming soon. </em></div>
                <Projects projects={projectList} />
            </section>    
            <section className="section">
                <h3>Skills</h3>
                <div><em>Below are some my most used/favorite skills, but not all-encompassing. </em></div>
                <Skills />
            </section>        
        </div>
    );
};

export default About;

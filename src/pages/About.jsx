// src/pages/About.jsx
import React from 'react';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Leadership from '../components/Leadership';
import Projects from '../components/Projects';
import './Page.css'; 

const educationData = [
  {
    school: 'University of California, Santa Barbara',
    location: 'Santa Barbara, CA',
    date: 'Sep 2022 - Dec 2026',
    degrees: [
      { name: 'Bachelor of Science in Computer Science', gpa: '3.87' },
      { name: 'Master of Science in Computer Science (starting Jan 2026)' }
    ],
    courses: 'Data Structures/Algorithms, Operating Systems, Databases, Artificial Intelligence, Deep Learning, Networks, Compilers, Computer Architecture, Object-Oriented Programming',
    honors: '8x Engineering Dean\'s Honors List, Engineering Honors'
  }
];

const experienceData = [
  {
    title: 'Software Engineering Intern',
    company: 'Pacific Life',
    text: 'Architected economic scenario generation tool to streamline quantitative analysis workflows utilizing React/TypeScript frontend and AWS serverless backend, reducing manual processing time by 60%. Containerizing simulation engine with Docker, codifying infrastructure with Terraform, and implementing SQS-based asynchronous processing to enable parallel workload execution. Delivering features in Agile sprints via Azure DevOps, collaborating closely with quantitative analysts and fellow engineers on planning, code reviews, and CI/CD.',
    imageUrl: '/portfolio/pl2.jpeg',
    link: 'https://www.pacificlife.com/',
    date: 'June 2025 - September 2025',
    location: 'Newport Beach, CA',
    skills: 'React, TypeScript, AWS, Docker, Terraform, SQS, Azure DevOps, Agile, CI/CD'
  },
  {
    title: 'Machine Learning Researcher',
    company: 'UCSB NLP Group',
    text: 'Researching applications of multi-modal assistants for physical tasks under Prof. Xifeng Yan. Utilizing OpenCV and pre-trained HuggingFace Transformer models to create video processing pipeline and generate real-time feedback. Fine-tuning vision models to recognize task correctness and deliver instant corrective guidance.',
    imageUrl: '/portfolio/ucsblogo.png',
    link: 'https://nlp.cs.ucsb.edu/',
    date: 'April 2025 - Present',
    location: 'Isla Vista, CA',
    skills: 'Python, OpenCV, HuggingFace Transformers, Computer Vision, NLP'
  },
  {
    title: 'Software Development Intern',
    company: 'NOAA Channel Islands',
    text: 'Developed end-to-end full-stack project utilizing PHP for backend systems and API development, JavaScript for interactive frontend components, and MySQL for database systems. Integrated REST APIs to develop custom plugins, reducing API response times by 10% through caching. Integrated retrieval augmented generation chatbot into application utilizing Python, Langchain, and Chroma vector embeddings.',
    imageUrl: 'https://pbs.twimg.com/profile_images/1451221298277875717/sEfSx43N_400x400.jpg',
    link: 'https://channelislands.noaa.gov/',
    date: 'June 2024 - Feb 2025',
    location: 'Santa Barbara, CA',
    skills: 'PHP, JavaScript, MySQL, REST APIs, Python, Langchain, Chroma, RAG'
  },
  {
    title: 'Undergraduate Researcher',
    company: 'UCSB ArchLab',
    text: 'Prototyped and benchmarked subgraph isomorphism algorithms and heuristics using Python circuit-modeling libraries along with Pandas, Matplotlib, and Numpy. Researching applications of graph neural networks utilizing PyTorch PyG library for computer architecture applications.',
    imageUrl: 'https://www.ce.ucsb.edu/sites/default/files/styles/medium/public/2020-12/archlab-800-sw_0.jpg?h=dab54920&itok=OLhyw9Lv',
    link: 'https://www.arch.cs.ucsb.edu/',
    date: 'Jan 2024 - Apr 2025',
    location: 'Isla Vista, CA',
    skills: 'Python, PyTorch, Graph Neural Networks, Pandas, Matplotlib, NumPy'
  }
];

const leadershipData = [
  {
    organization: 'Gaucho Sports Analytics Club',
    role: 'Co-Founder, Co-President',
    location: 'Isla Vista, CA',
    date: 'October 2024 - Present',
    description: 'Led over 200 members in data analysis/visualization, machine learning, and deep learning workshops using Python libraries. Spearheading and managing technical consulting projects with UCSB Division 1 Baseball/Basketball teams. Co-organized two-day hackathon with 200+ participants, accruing over $30,000 in event funding. Coordinated a guest speaker panel featuring leading sports analytics professionals.',
    imageUrl: '/portfolio/gsa (2).png',
    link: 'https://www.instagram.com/gauchosportsanalytics/'
  },
  {
    organization: 'The Leukemia & Lymphoma Society',
    role: 'Candidate',
    location: 'Folsom, CA',
    date: '2021',
    description: 'Raised over $10,000 with group through fundraising campaigns and community outreach initiatives to support blood cancer research and patient services.',
    imageUrl: '/portfolio/lls.png',
    link: 'https://www.lls.org/'
  }
];

const projectList = [
  {
    title: 'Fantasy Football Copilot',
    subtitle: 'July 2025 - Present',
    brief: 'Full-stack fantasy football analysis platform',
    description: 'Developed full-stack fantasy football analysis platform with FastAPI backend and Next.js frontend, integrating multi-source data from ESPN API, Reddit, FantasyPros, and web scraping. Implemented comprehensive player evaluation system using composite scoring algorithm across production, reliability, sentiment, and value metrics with automated data pipeline processing.',
    tags: 'Python, FastAPI, TypeScript, Next.js, Pandas, ESPN API',
    link: 'https://ff-copilot.vercel.app/'
  },
  {
    title: 'GM-Agents',
    subtitle: 'May - June 2025',
    brief: 'Multi-agent system for strategy-based game automation',
    description: 'Developed a multi-agent, heuristic-driven system that automates and optimizes strategy-based decision making and roster management in the Basketball GM browser game. Augmented browsing agent with object-oriented scaffolding for heuristics and game state evaluation, integrating human-in-the-loop assessment workflows to validate and optimize automated decision-making processes.',
    tags: 'Python, CrewAI, Playwright, LangGraph',
    link: 'https://github.com/skanda-vasishta/gm-agents'
  },
  {
    title: 'KOS',
    subtitle: 'Jan - March 2025',
    brief: 'Linux-like operating system',
    description: 'Designed and implemented core components of a Linux-like operating system. Features include: process management, standard I/O, dynamic memory, Linux system calls, file management, and inter-process communication via pipes.',
    tags: 'C, Makefile, Git/GitHub, Linux'
  },
  {
    title: 'Video Streaming Packet Analysis',
    subtitle: 'Nov - Dec 2024',
    brief: 'ML pipeline for video-chunk download prediction',
    description: 'Built an end-to-end ML pipeline that predicts video-chunk download times (R² = 0.90). Automated packet capture and feature engineering, then validated the model on the Stanford Puffer dataset alongside freshly captured traces from YouTube, Twitch, and Vimeo.',
    tags: 'Python, Pandas, Numpy, Matplotlib, Scikit-Learn, NetUnicorn',
    link: 'https://github.com/skanda-vasishta/CS190N-Project'
  },
  {
    title: 'Classify',
    subtitle: 'Jan 2024',
    brief: 'Course scheduling application',
    description: 'Developed a course scheduling application. Built frontend with React Native and backend with Node.js, using MongoDB for data management. Scraped data with Python and BeautifulSoup, and integrated Google Cloud Natural Language Processing API for sentiment analysis to generate detailed rankings of courses and professors.',
    tags: 'Node.js, React Native, Google Cloud NLP API, BeautifulSoup, Python, MongoDB',
    link: 'https://devpost.com/software/classify-4uia06'
  },
  {
    title: 'Touch Grass',
    subtitle: 'May 2023',
    brief: 'Location-centric social media for college students',
    description: 'Developed location-centric social media mobile application for college students utilizing React Native, TypeScript, Node.js, and Firebase. Won award for "Best Use of Google Cloud" at SB Hacks IX for Firebase, Google Maps API integration.',
    tags: 'Node.js, React Native, Google Firebase, Google Maps API, TypeScript',
    link: 'https://devpost.com/software/touchgrass'
  }
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h2 className="about-name">Skanda Vasishta</h2>
        <div className="about-contact">
          <a href="mailto:skandavasishta@ucsb.edu" className="contact-link">skandavasishta@ucsb.edu</a>
          <span className="contact-separator">•</span>
          <a href="tel:9168174425" className="contact-link">916-817-4425</a>
        </div>
      </div>

      <section className="section">
        <h3>Education</h3>
        <Education education={educationData} />
      </section>

      <section className="section">
        <h3>Experience</h3>
        <Experience items={experienceData} />
      </section>

      <section className="section">
        <h3>Leadership</h3>
        <Leadership items={leadershipData} />
      </section>

      <section className="section">
        <h3>Projects</h3>
        <Projects projects={projectList} />
      </section>    

      <section className="section">
        <h3>Skills</h3>
        <div className="skills-description">
          <p><strong>Languages:</strong> Python, C, C++, JavaScript, TypeScript, Java, C#, SQL, PHP, Bash, HTML, CSS</p>
          <p><strong>Frameworks/Libraries:</strong> Django, React Native, React.js, Express, Bootstrap, Spring, jQuery, NumPy, SciPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow, PyTorch, Streamlit</p>
          <p><strong>Other:</strong> PostgreSQL, MySQL, Linux, Git, GitHub, AWS, MongoDB, Agile, Docker, Kubernetes, CI/CD</p>
        </div>
      </section>        
    </div>
  );
};

export default About;
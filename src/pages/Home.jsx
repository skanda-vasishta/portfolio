// src/pages/Home.jsx
import React from 'react';
import './Page.css';
import Introduction from '../components/Introduction';
import Socials from '../components/Socials';


const Home = () => {
    return (
        <div>
            <Introduction />
            <Socials />
        </div>
    );
};

export default Home;
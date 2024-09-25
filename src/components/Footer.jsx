// Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import './Footer.css'; // Import CSS for styling

const socials = [
    {
        icon: <FaLinkedin />,
        url: 'https://www.linkedin.com/in/skandavasishta',
        name: 'LinkedIn',
    },
    {
        icon: <FaGithub />,
        url: 'https://github.com/skanda-vasishta',
        name: 'GitHub',
    },
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/skandavasishta',
        name: 'Instagram',
    },
    {
        icon: <FaSpotify />,
        url: 'https://open.spotify.com/user/q2l6kd1zf9iloi64qv4om0ehw?si=ff23f6ca99c44d75',
        name: 'Spotify',
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Made with React</h2>
                <div className="social-icons">
                    {socials.map((social, index) => (
                        <a 
                            key={index}
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

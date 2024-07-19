import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container" id="footerContainer">
                <ul className="footer-menu">
                    <li className="footer-item"><a href="#privacy">Linkedin</a></li>
                    <li className="footer-item"><a href="#terms">GitHub</a></li>
                    <li className="footer-item"><a href="#contact">Instagram</a></li>
                </ul>
                <p className="footer-text"> Made with React.js</p>
            </div>
        </div>
    );
};

export default Footer;

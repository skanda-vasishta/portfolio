import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa';
import './Socials.css'; // Optional: Add custom styles here

const Socials = () => {
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

  return (
    <div className="socials-container">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.name}
        >
          <div className="social-icon">{social.icon}</div>
          {/* <span className="social-name">{social.name}</span> */}
        </a>
      ))}
    </div>
  );
};

export default Socials;
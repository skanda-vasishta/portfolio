import React from 'react';
import { TagCloud } from 'react-tagcloud';
import { FaJs, FaReact, FaNodeJs, FaPython, FaHtml5, FaJava, FaPhp} from 'react-icons/fa'; 
import { SiCplusplus, SiTensorflow, SiDjango } from 'react-icons/si'; 
import './Skills.css'; 

const Skills = () => {
  const skills = [
    { icon: <FaJs />, count: 38 },
    { icon: <FaReact />, count: 30 },
    { icon: <FaNodeJs />, count: 28 },
    { icon: <FaPython />, count: 40 },
    { icon: <SiTensorflow />, count: 33 },
    // { icon: <FaCss5 />, count: 35 },
    { icon: <SiDjango />, count: 22 },
    { icon: <SiCplusplus />, count: 18 },
    // { icon: <FaGithub />, count: 20 },
    { icon: <FaPhp />, count: 20 },
  ];

  return (
    <div className="skills-container">
      <TagCloud
        minSize={100}
        maxSize={200}
        tags={skills}
        className="simple-cloud"
        renderer={(tag, size, color) => (
          <span
            key={tag.icon}
            style={{
              fontSize: `${size}px`,
              color: color,
              margin: '5px',
              transition: 'transform 0.2s',
              display: 'inline-block',
            }}
          >
            {tag.icon}
          </span>
        )}
      />
    </div>
  );
};

export default Skills;

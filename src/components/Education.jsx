import React from 'react';
import Card from 'react-bootstrap/Card';
import './Education.css';

const Education = ({ education }) => {
  return (
    <div className="education-container">
      {education.map((edu, idx) => (
        <Card key={idx} className="education-card">
          <Card.Body className="education-card-body">
            <div className="education-header">
              <div className="education-title-section">
                <Card.Title className="education-school">{edu.school}</Card.Title>
                <Card.Subtitle className="education-location">{edu.location}</Card.Subtitle>
              </div>
            </div>
            <div className="education-degrees">
              {edu.degrees.map((degree, i) => (
                <div key={i} className="degree-item">
                  <div className="degree-info">
                    <span className="degree-name">{degree.name}</span>
                    {degree.date && <span className="degree-date">{degree.date}</span>}
                  </div>
                  {degree.gpa && <span className="degree-gpa">GPA: {degree.gpa}</span>}
                </div>
              ))}
            </div>
            {edu.courses && (
              <div className="education-courses">
                <strong>Relevant Courses:</strong> {edu.courses}
              </div>
            )}
            {edu.honors && (
              <div className="education-honors">
                <strong>Awards/Honors:</strong> {edu.honors}
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Education;

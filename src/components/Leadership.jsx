import React from 'react';
import Card from 'react-bootstrap/Card';
import './Leadership.css';

const Leadership = ({ items }) => {
  const handleImageClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="leadership-container">
      {items.map((item, idx) => (
        <div key={idx} className="leadership-wrapper">
          {item.imageUrl && (
            <div className="leadership-image-container">
              <img
                src={item.imageUrl}
                alt={item.organization}
                className="leadership-image"
                onClick={() => handleImageClick(item.link)}
              />
            </div>
          )}
          <Card className="leadership-card">
            <Card.Body className="leadership-card-body">
              <div className="leadership-header">
                <div className="leadership-title-section">
                  <Card.Title className="leadership-org">{item.organization}</Card.Title>
                  <Card.Subtitle className="leadership-role">{item.role}</Card.Subtitle>
                </div>
                <div className="leadership-meta">
                  <div className="leadership-location">{item.location}</div>
                  <div className="leadership-date">{item.date}</div>
                </div>
              </div>
              <div className="leadership-description">
                {item.description}
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Leadership;

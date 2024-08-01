import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Experience.css'; 

const Experience = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  const handleCardClick = (item) => {
    setModalTitle(item.company);
    setModalText(item.text);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Row xs={1} md={2} className="g-4 experience-row">
        {items.map((item, idx) => (
          <Col key={idx} className="experience-col">
            <div className="experience-container">
              <div className="experience-image-container">
                <img src={item.imageUrl} alt={item.title} className="experience-image" />
              </div>
              <Card
                className="experience-card"
                onClick={() => handleCardClick(item)}
                role="button"
                aria-haspopup="dialog"
              >
                <Card.Body className="experience-card-body">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.company}</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>What I Do At {modalTitle}:</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Experience;

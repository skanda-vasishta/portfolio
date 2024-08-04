import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Projects.css'; 

const Projects = ({ projects }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState('');
  const [modalText, setModalText] = React.useState('');

  const handleCardClick = (project) => {
    setModalTitle(project.title);
    setModalText(project.description);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Row xs={1} md={3} className="g-4 projects-row">
        {projects.map((project, idx) => (
          <Col key={idx} className="projects-col">
            <Card
              className="projects-card"
              onClick={() => handleCardClick(project)}
              role="button"
              aria-haspopup="dialog"
            >
              <Card.Body className="projects-card-body">
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>
                <Card.Text>{project.brief}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
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

export default Projects;

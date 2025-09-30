import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Projects.css'; 

const Projects = ({ projects }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState('');
  const [modalText, setModalText] = React.useState('');
  const [modalTags, setModalTags] = React.useState('');
  const [modalLink, setModalLink] = React.useState('');

  const handleCardClick = (project) => {
    setModalTitle(project.title);
    setModalText(project.description);
    setModalTags(project.tags || '');
    setModalLink(project.link || '');
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="projects-col">
            <Card
              className="projects-card"
              onClick={() => handleCardClick(project)}
              role="button"
              aria-haspopup="dialog"
            >
              <Card.Body className="projects-card-body">
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2">{project.subtitle}</Card.Subtitle>
                <Card.Text>{project.brief}</Card.Text>
                {project.tags && (
                  <div className="project-tags">
                    {project.tags}
                  </div>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-project-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project →
                  </a>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-description">{modalText}</div>
          {modalTags && (
            <div className="modal-tags">
              <strong>Technologies:</strong> {modalTags}
            </div>
          )}
        </Modal.Body>
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

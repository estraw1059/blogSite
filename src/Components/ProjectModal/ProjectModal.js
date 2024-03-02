import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ProjectModal = ({displayModal, setDisplayModal, modalInfo}) => {
    const handleClose = () => {
        setDisplayModal(false);
    }
    return (
        <Modal show={displayModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{modalInfo?.projectName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalInfo?.projectDesc}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;
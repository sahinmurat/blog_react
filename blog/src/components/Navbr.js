import Modal from 'react-modal'
import React, {useState} from 'react'
import { TextField, Button, Icon } from '@material-ui/core';
import Swal from 'sweetalert2'
function Navbr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => 
  Swal.fire({
    title: 'You are not the owner of this post!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbr
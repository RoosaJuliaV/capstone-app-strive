/* import { React, useState } from "react";
// import Modal from '@mui/material/Modal'
import { Button } from "react-bootstrap"
import { MDBInput, MDBIcon, MDBModalBody, MDBModalFooter, MDBModalHeader } from "mdbreact";
import { Link } from "react-router-dom"
import Modal from "react-modal";


const PlayMod = () =>  {

    const [isOpen, setIsOpen] = useState(false);

function toggleModal() {
  setIsOpen(!isOpen);
}

return (
  <div>
   
    <button onClick={toggleModal}>Open modal</button>

    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="playModalDiv"
    >
        <div className="playModalDiv">
      <button className="modalBtn" onClick={toggleModal}>Close modal</button>
      </div>
    </Modal>
  
</div>
);
}

export default PlayMod



/* const PlayMod = () => {

    const [open, setOpen] = useState(false);
  
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
 
    return (
        <div>
        <Modal
         open={open}
         onClose={handleClose}>
        <div className="playmodaldiv col-lg-10 ml-auto">
      <div className="modalbtndiv ml-auto d-flex">
      <Button id="modalbtnclose" className="ml-1" onClick={handleClose}>Close</Button>
      </div>
      </div>
      </Modal>
      </div>
    )
}

export default PlayMod */

/*
const PlayMod = ({ open }) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        
    <div>
          <Modal
            show={show}
            onHide={handleClose}
          >
            <div className="playmodaldiv col-lg-10 ml-auto">
            <div className="modalbtndiv ml-auto d-flex">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
              </div>
            </div>
          </Modal>
          </div>
        
      );
    }

  export default PlayMod */

  

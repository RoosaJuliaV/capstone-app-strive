import { React, useState } from "react";
import Modal from '@mui/material/Modal'
import { Button } from "react-bootstrap"
import { MDBInput, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom"


const JoinMod = ({ open, handleClose }) => {
 

    return (
        <div>
        <Modal
         open={open}
         onClose={handleClose}
        >{/*<button onClick={handleClose}>Button</button>*/}
        <div className="modaldiv col-lg-4 ml-auto">
        <h4 className="text-white ml-2"><strong>Join now</strong></h4>
        <div className="form-group">
        <input
          type="name"
          className="form-control form-control-lg mt-3"
          id="formGroupExampleInput"
          placeholder="First name"
        />
      </div>
        <div className="form-group">
        <input
          type="name"
          className="form-control form-control-lg mt-3"
          id="formGroupExampleInput"
          placeholder="Last name"
        />
      </div>
        <div className="form-group">
        <input
          type="email"
          className="form-control form-control-lg mt-3"
          id="formGroupExampleInput"
          placeholder="E-mail"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control form-control-lg mt-4"
          id="formGroupExampleInput"
          placeholder="Password"
        />
      </div>
      <div className="modalbtndiv ml-auto d-flex">
      <Button id="modalbtnclose" className="ml-1" onClick={handleClose}>Close</Button>
      <Link className="text-white ml-auto" to="/home"><Button id="joinmodbtn">Join</Button></Link>
      </div>
      </div>
      </Modal>
      </div>

    )
}

export default JoinMod
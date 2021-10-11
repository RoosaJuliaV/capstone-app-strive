import { React, useState } from "react";
import Modal from '@mui/material/Modal'
import { Button } from "react-bootstrap"
import { MDBInput } from "mdbreact";
import { Link } from "react-router-dom"


const LoginMod = ({open, handleClose, handleOpen }) => {

    return (
        <div>
        <Modal
        open={open}
        onClose={handleClose}
        >{/*<button onClick={handleClose}>Button</button>*/}
        <div className="modaldiv col-lg-6 mx-auto">
        <h4 className="text-white ml-2"><strong>Login</strong></h4>
        <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg mt-3"
          id="formGroupExampleInput"
          placeholder="E-mail"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg mt-4"
          id="formGroupExampleInput"
          placeholder="Password"
        />
      </div>
      <div className="modalbtndiv d-flex flex-row">
      <Link className="text-white" to="/home"><Button id="modalbtn">Login</Button></Link>
      <Button id="modalbtn">Close</Button>
      </div>
      </div>
      </Modal>
        </div>

    )
}

export default LoginMod
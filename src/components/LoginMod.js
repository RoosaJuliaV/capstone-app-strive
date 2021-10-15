import { React, useState } from "react";
import Modal from '@mui/material/Modal'
import { Button } from "react-bootstrap"
import { MDBInput, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom"


const LoginMod = ({ open }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
      <Link className="text-white ml-auto" to="/home"><Button id="modalbtn">Login</Button></Link>
      </div>
      </div>
      </Modal>
        </div>

    )
}

export default LoginMod
import React from 'react';
import './ModalLogin.css';
import {Modal, Form} from "react-bootstrap";
import { useState } from 'react';
import { useRef } from 'react';

const ModalLogin = ({...props}) => {
  const [openRegister, setOpenRegister] = useState(false);
  const emailLogin = useRef(null);
  const passwordLogin= useRef(null);

  const login = () => {
    console.log(emailLogin.current.value)
    if(emailLogin.current.value !== "cong@mail.com"){
      return alert("Email chưa đăng ký !");
    } else if(passwordLogin.current.value !== "123456"){
      return alert("Sai mật khẩu");
    }
    props.setModalLogin(false);
    localStorage.setItem("username", emailLogin.current.value)
  }
  
  return (
    <Modal
    show={props.modalLogin}
    onHide={() => props.setModalLogin(false)}
    aria-labelledby="contained-modal-title-vcenter"
    centered
    size="lg"
  >
    {openRegister ? 
    <React.Fragment>
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="p-1">
        Đăng ký tài khoản
        <br/>
        <small>
        Đăng ký tài khoản để sử dụng full tính năng tại truyenfull
        </small>
      </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Nhập lại password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>
          
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Tôi đồng ý với các điều khoản & điều kiện" />
          </Form.Group>
          <div className="text-center">
            <button className="btn login-btn w-100" type="submit" onClick={() => setOpenRegister(true)}>Đăng ký tài khoản</button>
          </div>
        </Form>
        <div className="mt-4 text-center">
          Bạn đã có tài khoản. Vui lòng <a href="#" onClick={() => setOpenRegister(false)}>Đăng nhập</a>
        </div>
      </Modal.Body>
    </React.Fragment>
    :
    <React.Fragment>
      <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Đăng nhập
        <br/>
        <small>
        Chào mừng trở lại! Xin hãy đăng nhập vào tài khoản của bạn.
        </small>
      </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-5">
        <Form id="login-form" onSubmit={() => login()}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailLogin} type="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordLogin} type="password" placeholder="Password" required/>
          </Form.Group>
          
          <div className="d-flex justify-content-between">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <a href="/">Forgot password</a>
          </div>
        </Form>
        <button className="btn login-btn" type="submit" form="login-form">Đăng nhập</button>
        <button className="btn ml-3 register-btn" onClick={() => setOpenRegister(true)}>Đăng ký</button>
      </Modal.Body>
    </React.Fragment>
    }
  </Modal>
)};

ModalLogin.propTypes = {};

ModalLogin.defaultProps = {};

export default ModalLogin;

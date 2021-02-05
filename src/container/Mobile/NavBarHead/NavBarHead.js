import React, { useEffect, useState } from 'react';
import { Image, DropdownButton, Dropdown } from 'react-bootstrap';
// import PropTypes from 'prop-types';


const NavBar = ({...props}) => {
  // const [keySearch, setKeySearch] = useState('');
  const [account, setAccount ] = useState(localStorage.getItem("username"));
  useEffect(() => {
    setAccount(localStorage.getItem("username"))
  }, [props.modalLogin]);
  return (
    <nav className="navbar d-flex justify-content-around  navbar-expand-lg navbar-light">
      <div className="w-25">
        <i class="fas fa-bars" style={{ fontSize: "22px"}}></i>
      </div>
      <div className="w-50 text-center">
        <a href="/">
          <img alt="img" src="/img/logo.png" style={{width: "40%", minWidth: "151px"}} />
        </a>
      </div>
      {account ? 
        <div className="d-flex justify-content-end w-25">
          <button className="btn notification" type="submit">
            <i className="fas fa-bell"></i>
          </button>
          <span className="avatar">
            <DropdownButton
              menuAlign="right"
              title={<Image width={33} className="ml-3" src="/img/avatar.jpg" roundedCircle />}
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="1">Đã đọc gần đây</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4" onClick={() => {
                localStorage.removeItem("username"); 
                setAccount(null)}}
              >
                Đăng xuất
              </Dropdown.Item>
            </DropdownButton>
          </span>
        </div>
        :
        <div className="w-25 text-right">
          <button className="btn btn-warning" type="submit" onClick={() => props.setModalLogin(true)}>ĐĂNG NHẬP</button>
        </div>
        }
    </nav>
  )
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;

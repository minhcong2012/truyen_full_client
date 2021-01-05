import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';


const NavBar = () => (
  <nav className="navbar d-flex justify-content-around navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/">
      <img src="/img/logo.png"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="input-group">
      <select className="selectpicker custom-select-nav">
        <option defaultValue>Truyện full -</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <select className="selectpicker custom-select-nav">
        <option defaultValue>Chọn thể loại -</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <input className="form-control" type="search" placeholder="Nhập tên truyện ..."/>
      <button className="btn primary" type="submit">TÌM KIẾM</button>
    </div>
    <div>
      <button className="btn notification" type="submit">
        <i className="fas fa-bell"></i>
      </button>
      <button className="btn primary" type="submit">ĐĂNG NHẬP</button>
    </div>
  </nav>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;

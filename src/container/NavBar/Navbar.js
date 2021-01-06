import React, { useState } from 'react';
import PropTypes from 'prop-types';


const NavBar = () => {
  const [keySearch, setKeySearch] = useState('');

  return (
    <nav className="navbar d-flex justify-content-between navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <img src="/img/logo.png" />
      </a>
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
        <input className="form-control" type="search" onChange={e => setKeySearch(e.target.value)} placeholder="Nhập tên truyện ..." />
        <button className="btn btn-main" type="submit">TÌM KIẾM</button>
        {keySearch && 
          <div className="list-group recommend-paper">
            <a href="/" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 mb-1">
                <small className="label-status__updating">UPDATING</small>
                <small className="label-status__new">NEW</small>
              </div>
              <h6 className="mb-3">Quỷ Đế Cuồng Thê: Đại Tiểu Thư Ăn Chơi Trác Táng</h6>
              <small>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">Ngôn tình</li>
                  <li className="breadcrumb-item active" aria-current="page"><u>34 chương</u></li>
                </ol>
              </small>
            </a>
            <div className="list-group-item list-group-item-action text-center" aria-current="true">
              <button className="btn btn-warning" type="button">Hiển thị thêm kết quả</button>
            </div>
          </div>
        }
      </div>
      <div>
        <button className="btn notification" type="submit">
          <i className="fas fa-bell"></i>
        </button>
        <button className="btn btn-warning" type="submit">ĐĂNG NHẬP</button>
      </div>
    </nav>
  )
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;

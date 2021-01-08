import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const MenuHeader = () => {

  const [openMenu, setOpenMenu] = useState(false); 
  return (
    <div className="menu-header">
      <div className="pos-relavtive d-flex justify-content-between">
        <Button className="btn-main" onBlur={() => setOpenMenu(false)} onClick={() => setOpenMenu(!openMenu)}>DANH SÁCH LOẠI TRUYỆN</Button>
        <div className="categories">
          <Button><a href="/truyen-ngon-tinh">TRUYỆN NGÔN TÌNH</a></Button>
          <Button><a href="/truyen-ngon-tinh">TRUYỆN KIẾM HIỆP</a></Button>
          <Button><a href="/truyen-ngon-tinh">TRUYỆN TRINH THÁM</a></Button>
          <Button><a href="/truyen-ngon-tinh">TIỂU THUYẾT</a></Button>
          <Button><a href="/truyen-ngon-tinh">TRUYỆN TEEN</a></Button>
        </div>
        <div>
          <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </div>
        {openMenu && 
          <div className="d-flex categories-list">
            <ul className="list-group">
              <li className="list-group-item">Truyện kiếm hiệp</li>
              <li className="list-group-item">Truyện ngôn tình</li>
              <li className="list-group-item">Truyện dị giới</li>
              <li className="list-group-item">Truyện dị năng</li>
              <li className="list-group-item">Truyện quân sự</li>
              <li className="list-group-item">Truyện xuyên không</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">Truyện kiếm hiệp</li>
              <li className="list-group-item">Truyện ngôn tình</li>
              <li className="list-group-item">Truyện dị giới</li>
              <li className="list-group-item">Truyện dị năng</li>
              <li className="list-group-item">Truyện quân sự</li>
              <li className="list-group-item">Truyện xuyên không</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">Truyện kiếm hiệp</li>
              <li className="list-group-item">Truyện ngôn tình</li>
              <li className="list-group-item">Truyện dị giới</li>
              <li className="list-group-item">Truyện dị năng</li>
              <li className="list-group-item">Truyện quân sự</li>
              <li className="list-group-item">Truyện xuyên không</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">Truyện kiếm hiệp</li>
              <li className="list-group-item">Truyện ngôn tình</li>
              <li className="list-group-item">Truyện dị giới</li>
              <li className="list-group-item">Truyện dị năng</li>
              <li className="list-group-item">Truyện quân sự</li>
              <li className="list-group-item">Truyện xuyên không</li>
            </ul>
            <ul className="list-group">
              <li className="list-group-item">Truyện kiếm hiệp</li>
              <li className="list-group-item">Truyện ngôn tình</li>
              <li className="list-group-item">Truyện dị giới</li>
              <li className="list-group-item">Truyện dị năng</li>
              <li className="list-group-item">Truyện quân sự</li>
              <li className="list-group-item">Truyện xuyên không</li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
};

MenuHeader.propTypes = {};

MenuHeader.defaultProps = {};

export default MenuHeader;

import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MenuHeader = () => {

  const [openMenu, setOpenMenu] = useState(false); 
  return (
    <div className="menu-header">
      <div className="pos-relavtive d-flex justify-content-between">
        <button className="btn btn-main" type="submit" onBlur={() => setOpenMenu(false)} onClick={() => setOpenMenu(!openMenu)}>DANH SÁCH LOẠI TRUYỆN</button>
        <div className="categories">
          <button className="btn" type="submit">TRUYỆN NGÔN TÌNH</button>
          <button className="btn" type="submit">TRUYỆN KIẾM HIỆP</button>
          <button className="btn" type="submit">TRUYỆN TRINH THÁM</button>
          <button className="btn" type="submit">TIỂU THUYẾT</button>
          <button className="btn" type="submit">TRUYỆN TEEN</button>
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

import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';

const Full = () => (
  <Card>
    <Card.Header>
      TRUYỆN FULL
    </Card.Header>
    <Card.Body>
      <ListGroup>
        <ListGroup.Item>
          <div className="d-flex">
            <img src="/img/recommend-cover.png" height={104}/>
            <div className="ml-3">
              <div className="mb-1">
                <small className="label-status-updating">UPDATING</small>
                <small className="label-status-new">NEW</small>
              </div>
              <h6 className="mb-3">Quỷ Đế Cuồng Thê: Đại Tiểu Thư Ăn Chơi Trác Táng</h6>
              <small>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">Ngôn tình</li>
                  <li className="breadcrumb-item active" aria-current="page"><u>34 chương</u></li>
                </ol>
              </small>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex">
            <img src="/img/recommend-cover.png" height={104}/>
            <div className="ml-3">
              <div className="mb-1">
                <small className="label-status-full">FULL</small>
                <small className="label-status-new">NEW</small>
              </div>
              <h6 className="mb-3">Quỷ Đế Cuồng Thê: Đại Tiểu Thư Ăn Chơi Trác Táng</h6>
              <small>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">Ngôn tình</li>
                  <li className="breadcrumb-item active" aria-current="page"><u>34 chương</u></li>
                </ol>
              </small>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex">
            <img src="/img/recommend-cover.png" height={104}/>
            <div className="ml-3">
              <div className="mb-1">
                <small className="label-status-updating">UPDATING</small>
                <small className="label-status-new">NEW</small>
              </div>
              <h6 className="mb-3">Quỷ Đế Cuồng Thê: Đại Tiểu Thư Ăn Chơi Trác Táng</h6>
              <small>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">Ngôn tình</li>
                  <li className="breadcrumb-item active" aria-current="page"><u>34 chương</u></li>
                </ol>
              </small>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
);

Full.propTypes = {};

Full.defaultProps = {};

export default Full;

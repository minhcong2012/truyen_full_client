import React from 'react';
// import PropTypes from 'prop-types';
import { Accordion, Card, ListGroup } from 'react-bootstrap';

const Reading = () => (
  <Card>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
      TRUYỆN ĐANG ĐỌC (3)
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>
            <div className="d-flex w-100 mb-1">
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
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex w-100 mb-1">
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
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex w-100 mb-1">
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
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

Reading.propTypes = {};

Reading.defaultProps = {};

export default Reading;

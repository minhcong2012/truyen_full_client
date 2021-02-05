import React from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Breadcrumb, Col, Container, Nav, Row, Card } from "react-bootstrap";

const Recommend = () => {
  const history = useHistory();

  return(
    <div className="Recommend">
      <Nav className="d-flex justify-content-between">
        <Nav.Item className="active title">TRUYỆN ĐỀ XUẤT</Nav.Item>
        <Nav.Item className="active more"><a href="/">Xem tất cả  &gt;&gt;</a></Nav.Item>
      </Nav>
      <Container>
        <Row xl={4} lg={3}>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-updating">UPDATING</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-updating">UPDATING</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-updating">UPDATING</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                  <div className="label-status-new">NEW</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                  <div className="label-status-new">NEW</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                  <div className="label-status-new">NEW</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                  <div className="label-status-new">NEW</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col onClick={() => history.push("/truyen/1")}>
            <Card>
              <div className="card__label-text">HOT</div>
              <div className="card__label-bg">
                <div id="pentagon"></div>
              </div>
              <Card.Img src="img/recommend-cover.png" className="card-img-top" alt="..."/>
              <Card.Body>
                <div className="d-flex">
                  <div className="label-status-full">FULL</div>
                </div>
                <div className="card-body__start-rate">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="card-body__point-rate">5.0</span>
                </div>
                <Card.Text className="card-body__story-name">Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</Card.Text>
                <small>
                  <Breadcrumb>
                    <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                    <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                  </Breadcrumb>
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    )
};

Recommend.propTypes = {};

Recommend.defaultProps = {};

export default Recommend;

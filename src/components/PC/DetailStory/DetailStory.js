import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { Table, Button, Nav, Form, Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import CommentSections from './parts/CommentSection';

const DetailStory = () => {
  const [ tab, setTab ] = useState(1);
  return (
    <div className="DetailStory">
      <div className="story-name">LUÔN CÓ NGƯỜI ĐIÊN CUỒNG CỐ CHẤP MUỐN ĐỘC CHIẾM TÔI</div>
      <Table striped>
        <tbody>
          <tr>
            <td rowSpan="8" className="story-img">
              <img alt="img" src="/img/recommend-cover.png"/>
            </td>
            <td className="story-info">
              <div><b>Tác giả:</b> Phi Thiên Ngư</div>
              <div><b>Thể loại:</b> Truyện Tiên Hiệp , Truyện Trọng Sinh</div>
              <div><b>Nguồn:</b> VIP</div>
              <div><b>Trạng thái:</b> </div>
              <div><b>Lượt đọc:</b> 702801</div>
              <div><b>Cập nhật:</b> 24/12/2020</div>
            </td>
          </tr>
          <tr>
            <td>
              <Button className="btn-readnow" href="/truyen/luon-co-nguoi-dien/doc-truyen"><i className="fas fa-book-open icon-btn"></i>Đọc truyện ngay</Button>
              <Button className="btn-savestory"><i className="fas fa-plus icon-btn"></i>Lưu truyện đọc sau</Button>
            </td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-star"></i>
              &nbsp;
              <i className="fas fa-star"></i>
              &nbsp;
              <i className="fas fa-star"></i>
              &nbsp;
              <i className="fas fa-star"></i>
              &nbsp;
              <i className="fas fa-star"></i>
              &nbsp;
              &nbsp;
              <span>5.0</span>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <i className="fas fa-heart"></i>
              &nbsp;
              1234
            </td>
          </tr>
        </tbody>
      </Table>
      <Nav variant="pills" activeKey={tab}>
        <Nav.Item>
          <Nav.Link eventKey="1" onClick={() => setTab(1)}>
            Chi tiết truyện
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" onClick={() => setTab(2)} title="Item">
            Danh sách các chương
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <div style={{ padding: "0.5rem 1rem"}}>
            Xếp truyện theo:
          </div>
        </Nav.Item>
        <Form inline>
          <Form.Group>
            <Form.Control as="select">
              <option>Chương đầu - Chương cuối</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Nav>
      <div className="story-des">
        <div className="title-des">Tóm tắt một câu: Cùng nhau sống lại, sau đó phát hiện, thì ra là cùng một người】</div>
        <div className="content-des">
          Đời trước, Hoắc Trọng Lâu với chị gái của Tần Khả là một đôi được hai bên gia đình xác nhận. Thế nhưng không ngờ Hoắc Trọng Lâu lại bị hủy dung, vì thế cô chị đào hôn ngay trong đêm.
          Bị cha mẹ nuôi ép buộc, Tần Khả trở thành thế thân, sau đó bị lừa lên giường Hoắc thiếu. Sau đó nữa, anh ta lại chơi trò kim ốc tàng kiều, cô còn bị chị gái âm mưu tính kế trở thành tàn phế... cho đến chết, cô cũng không thể trốn khỏi người đàn ông đó.
          Thời điểm tám trăm năm sau, Trương Nhược Trần sống lại một lần nữa liền phát hiện ra vị hôn thê đã từng giết chết mình kia đã là chủ của Cô Lôn giới, nắm trong tay trung ương đệ nhất thiên hạ, được vạn người tôn xưng là Trì Dao nữ hoàng.
          <br/>
          <br/>
          Trì Dao nữ hoàng, thống trị thiên hạ, danh chấn bát phương, thanh xuân vĩnh trú, bất tử bất diệt.
          <br/>
          <br/>
          Phi Thiên Ngư, một trong hai mươi tác giả lớn được ứng cử vào danh sách đại thần văn học mạng Trung Quốc năm 2019, mà có lẽ rất nhiều độc giả đã quá quen thuộc, trong đó cột mốc quan trọng để vị đại thần này được độc giả yêu mến và quan tâm nhiều nhất chính là tác phẩm Vạn Cổ Thần Đế, tác phẩm được phong thần của năm 2019.
          <br/>
          <br/>
          Có câu ngạn ngữ nói bọ ngựa bắt ve, chim sẽ núp đằng sau, nhưng chim sẽ có phải thật là người thắng cuối cùng không, sau lưng chim sẽ không có kẻ thù rình rập sao?
          <br/>
          <br/>
          Trong Vạn Cổ Thần Đế, một âm mưu kinh thiên bao trùm cả chư thiên vạn giới, kéo dài từ vạn cổ tới hiện tại, các nhân vật trong truyện giống như những quân cờ, bị bàn tay vô hình điều khiển sai khiến, thân bất do kỷ, tính mạng giống như cỏ rác, làm sao có thể nhảy ra bàn cờ, cúi đầu nhìn chúng sinh đang giãy dụa cầu sinh trong chư thiên vạn giới.
          <br/>
          <br/>
          Trương Nhược Trần từ một thiên chi kiêu tử, lại bị vị hôn thê của mình ám sát, lần nữa trùng sinh ở 800 năm sau, làm sao có thể từng bước đi tới đỉnh phong, giành lại tất cả thuộc về mình? Khi hắn biết mình chỉ là quân cờ trong một âm mưu to lớn, hắn phải đối mặt như thế nào, làm sao có thể thoát khỏi bàn cờ, trở thành người đánh cờ nắm lấy vận mệnh của mình?
          <br/>
          <br/>
          Ái hận tình thù, nhiệt huyết nam nhi, âm mưu quỷ kế… tất cả đều sẽ được miêu tả cực kỳ đặc sắc qua ngòi bút của Phi Thiên Ngư trong Vạn Cổ Thần Đế. Và trong tác phẩm, các độc giả sẽ cảm nhận được cái gì là kế trong kế, cái gì là bọ ngựa bắt ve, chim sẽ núp đằng sau…
        </div>
      </div>
      <CommentSections/>
      <div className="relate-story">
        <Nav className="d-flex justify-content-between">
          <Nav.Item className="active title-relate">TRUYỆN ĐỀ XUẤT</Nav.Item>
          <u><a href="/">Xem tất cả &gt;&gt;</a></u>
        </Nav>
        <Container>
          <Row xs={4} className="row-custom-5">
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
                      <Breadcrumb.Item active>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                      <Breadcrumb.Item active><u>34 chương</u></Breadcrumb.Item>
                    </Breadcrumb>
                  </small>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
            <Col>
              <Card>
                <div className="card__label-text">HOT</div>
                <div className="card__label-bg">
                  <div id="pentagon"></div>
                </div>
                <Card.Img src="/img/recommend-cover.png" className="card-img-top" alt="..."/>
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
    </div>
  )
};

DetailStory.propTypes = {};

DetailStory.defaultProps = {};

export default DetailStory;

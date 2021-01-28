import React, {useState, useRef, useEffect} from 'react';
// import PropTypes from 'prop-types';
import { Button, Card, Container, Media, Row, Col, ListGroup } from "react-bootstrap";

const ReadStory = () => {
  const [openFormSearch, setOpenFormSearch] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openPop, setOpenPop] = useState(null);
  const [colorPaper, setColorPaper]= useState("color-7");
  const [fontSizePaper, setFontSizePaper] = useState("17px");

  const onClosePopSetting = () => {
    setOpenSetting(false);
    setOpenFormSearch(false);
  }
  
  const togglePop = value => {
    if((value === "share" && openPop === "share") || (value === "font-size" && openPop === "font-size") || (value === "bg" && openPop === "bg")){
      return setOpenPop(null)
    }
    else return setOpenPop(value)
  }


  const endPage = useRef(null)


  const toggleSize = value => {
    setFontSizePaper(value);
  }

  useEffect(() => {
    endPage.current.scrollIntoView({ behavior: 'smooth' });
  },[fontSizePaper]);

  return (
    <div className="ReadStory">
      <div className="body-story">
        <i  className={`fas fa-chevron-left icon-btn-back + ${colorPaper}`}></i>
        <Card className={colorPaper}>
          <Card.Body>
            <Card.Title>
              <span>Chương 1</span>
            </Card.Title>
            <Card.Text onClick={() => onClosePopSetting()} style={{ fontSize: `${fontSizePaper}`}}>
              Đời trước, Hoắc Trọng Lâu với chị gái của Tần Khả là một đôi được hai bên gia đình xác nhận. Thế nhưng không ngờ Hoắc Trọng Lâu lại bị hủy dung, vì thế cô chị đào hôn ngay trong đêm.
              <br/>
              <br/>
              Bị cha mẹ nuôi ép buộc, Tần Khả trở thành thế thân, sau đó bị lừa lên giường Hoắc thiếu. Sau đó nữa, anh ta lại chơi trò kim ốc tàng kiều, cô còn bị chị gái âm mưu tính kế trở thành tàn phế... cho đến chết, cô cũng không thể trốn khỏi người đàn ông đó.
              <br/>
              <br/>
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
              Có câu ngạn ngữ nói bọ ngựa bắt ve, chim sẽ núp đằng sau, nhưng chim sẽ có phải thật là người thắng cuối cùng không, sau lưng chim sẽ không có kẻ thù rình rập sao?
              <br/>
              <br/>
              Trong Vạn Cổ Thần Đế, một âm mưu kinh thiên bao trùm cả chư thiên vạn giới, kéo dài từ vạn cổ tới hiện tại, các nhân vật trong truyện giống như những quân cờ, bị bàn tay vô hình điều khiển sai khiến, thân bất do kỷ, tính mạng giống như cỏ rác, làm sao có thể nhảy ra bàn cờ, cúi đầu nhìn chúng sinh đang giãy dụa cầu sinh trong chư thiên vạn giới.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Container className="footer-setting-story" ref={endPage}>
        <Row>
          <Col>
            <Media>
              <img
                width={40}
                height={52}
                className="mr-3"
                src="/img/recommend-cover.png"
                alt="img"
              />
              <Media.Body>
                Luôn có người điên cuồng cố chấp muốn độc chiếm tôi
              </Media.Body>
            </Media>
          </Col>
          <Col className="btn-form-search-wrapper">
            <i className="fas fa-chevron-left prev-btn"></i>
            <Button className="btn-setting-footer" onClick={() => setOpenFormSearch(!openFormSearch)}>
              <i className="fas fa-bars"></i>
              <span className="text-btn-form">Danh sách chương</span>
            </Button>
            <i className="fas fa-chevron-right next-btn"></i>
            <div className="form-search-chapter" style={{ display: openFormSearch ? "block" : "none"}} >
              <div className="form-search-chapter__header d-flex justify-content-between">
                <div className="form-search-chapter__title">Tìm chương nhanh</div>
                <i className="fas fa-times" onClick={() => setOpenFormSearch(false)}></i>
              </div>
              <div className="form-search-chapter__search-box">
                <input type="text" placeholder="Nhập số chương. Ví dụ: 500" />
                <i className="fa fa-search"></i>
              </div>
              <ListGroup>
                <ListGroup.Item>Chương 1: Tám trăm năm sau</ListGroup.Item>
                <ListGroup.Item>Chương 2: Mở Ra Thần Võ Ấn Ký</ListGroup.Item>
                <ListGroup.Item>Chương 3: Bức Tranh Ba Mươi Sáu Đường...</ListGroup.Item>
                <ListGroup.Item>Chương 4: Xinh Đẹp Tuyệt Trần</ListGroup.Item>
                <ListGroup.Item>Chương 5: Hoàng Cực Cảnh Tiểu Cực</ListGroup.Item>
                <ListGroup.Item>Chương 1: Tám trăm năm sau</ListGroup.Item>
                <ListGroup.Item>Chương 2: Mở Ra Thần Võ Ấn Ký</ListGroup.Item>
                <ListGroup.Item>Chương 3: Bức Tranh Ba Mươi Sáu Đường...</ListGroup.Item>
                <ListGroup.Item>Chương 4: Xinh Đẹp Tuyệt Trần</ListGroup.Item>
                <ListGroup.Item>Chương 5: Hoàng Cực Cảnh Tiểu Cực</ListGroup.Item>
                <ListGroup.Item>Chương 1: Tám trăm năm sau</ListGroup.Item>
                <ListGroup.Item>Chương 2: Mở Ra Thần Võ Ấn Ký</ListGroup.Item>
                <ListGroup.Item>Chương 3: Bức Tranh Ba Mươi Sáu Đường...</ListGroup.Item>
                <ListGroup.Item>Chương 4: Xinh Đẹp Tuyệt Trần</ListGroup.Item>
                <ListGroup.Item>Chương 5: Hoàng Cực Cảnh Tiểu Cực</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col className="btn-setting-wrapper">
            <Button className="btn-setting-footer" onClick={() => setOpenSetting(!openSetting)}>
              <i className="fas fa-cog"></i>
              <span className="text-btn-form">Cài đặt</span>
            </Button>
            {openSetting && 
              <ListGroup>
                <ListGroup.Item>
                  <i className="fas fa-plus"></i>
                  &nbsp;
                  <span>Thêm danh sách đang đọc</span>
                </ListGroup.Item>
                <ListGroup.Item className="share-story" onClick={() => togglePop("share")}>
                  <i className="fas fa-share"></i>
                  &nbsp;
                  <span>Chia sẻ truyện này</span>
                </ListGroup.Item>
                <ListGroup.Item onClick={() => togglePop("font-size")}>
                  <i className="fas fa-font"></i>
                  &nbsp;
                  <span>Chỉnh sửa cỡ chữ</span>
                </ListGroup.Item>
                <ListGroup.Item onClick={() => togglePop("bg")}>
                  <i className="fas fa-palette"></i>
                  &nbsp;
                  <span>Chỉnh màu nền truyện</span>
                </ListGroup.Item>
              </ListGroup>
            }
            {openSetting && openPop === "share" && 
              <ListGroup className="pop-share">
                <ListGroup.Item>
                  <i className="fab fa-facebook"></i>
                  &nbsp;
                  <span>Facebook</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <img alt="zalo" src="/img/zalo.svg"/>
                  &nbsp;
                  <span>Zalo</span>
                </ListGroup.Item>
              </ListGroup>
            }
            {openSetting && openPop === "font-size" &&  
              <div className="d-flex justify-content-around pop-size">
                <Button onClick={() => toggleSize("17px")} className="17px-font" style={{ backgroundColor: fontSizePaper === "17px" && "#007bff"}}>Aa</Button>
                <Button onClick={() => toggleSize("20px")} className="normal-font" style={{ backgroundColor: fontSizePaper === "20px" && "#007bff"}}>Aa <sup>+</sup></Button>
                <Button onClick={() => toggleSize("22px")} className="22px-font" style={{ backgroundColor: fontSizePaper === "22px" && "#007bff"}}>Aa<sup>+ +</sup></Button>
              </div>
            }
            {openSetting && openPop === "bg" &&  
              <div className="pop-color">
                <div className="d-flex mb-2 justify-content-around">
                  <div className="circle-color color-1" onClick={() => setColorPaper("color-1")}>
                    {colorPaper === "color-1" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                  <div className="circle-color color-2" onClick={() => setColorPaper("color-2")}>
                    {colorPaper === "color-2" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                  <div className="circle-color color-3" onClick={() => setColorPaper("color-3")}>
                    {colorPaper === "color-3" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                  <div className="circle-color color-4" onClick={() => setColorPaper("color-4")}>
                    {colorPaper === "color-4" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <div className="circle-color color-5" onClick={() => setColorPaper("color-5")}>
                    {colorPaper === "color-5" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                  <div className="circle-color color-6" onClick={() => setColorPaper("color-6")}>
                    {colorPaper === "color-6" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                  <div className="circle-color color-7" onClick={() => setColorPaper("color-7")}>
                    {colorPaper === "color-7" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                  <div className="circle-color color-8" onClick={() => setColorPaper("color-8")}>
                    {colorPaper === "color-8" && 
                      <i className="fas fa-check"></i>
                    }
                  </div>
                </div>
              </div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
};

ReadStory.propTypes = {};

ReadStory.defaultProps = {};

export default ReadStory;

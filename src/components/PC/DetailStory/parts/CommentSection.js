import React from "react";
import {Container, Row, Col, Media, Image} from "react-bootstrap";

const CommentSections = () => {
  return (
    <Container className="comment-wrapper">
      <Row className="title-comment-wrapper"><span className="title-comment">Ý kiến bạn đọc (24)</span></Row>
      <Media>
        <Image
          width={40}
          roundedCircle
          height={40}
          className="mr-3"
          src="https://i.imgur.com/RpzrMR2.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Minh Công</h5>
          <div className="comment-content">
            <p className="commnent-text">
              Dịch giả đang bị lụt mất điện các độc giả thông cảm vài hôm 
            </p>
            <div className="fas fa-thumbs-up">Like (24)&nbsp;&nbsp;<span className="btn-reply">Reply</span></div>
          </div>
          <Media>
            <Image
              width={40}
              height={40}
              roundedCircle
              className="mr-3"
              src="https://i.imgur.com/RpzrMR2.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Minh Công</h5>
              <div className="comment-content">
                <p className="commnent-text">
                  Dịch giả đang bị lụt mất điện các độc giả thông cảm vài hôm 
                </p>
                <div className="fas fa-thumbs-up">Like (24)&nbsp;&nbsp;<span className="btn-reply">Reply</span></div>
              </div>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media>
      <div className="more-comment">
        Xem thêm 23 bình luận
      </div>
      <div className="login-require">
        Vui lòng <a href="#">đăng nhập</a> để bình luận
      </div>
      <div className="bg-light p-2">
        <div className="d-flex flex-row align-items-start">
          <img alt="img" className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
          <textarea className="form-control ml-1 shadow-none textarea"></textarea>
        </div>
        <div className="mt-2 text-right">
          <button className="btn btn-primary btn-sm shadow-none" type="button">Đăng</button>
        </div>
      </div>
    </Container>
  )
}

export default CommentSections;

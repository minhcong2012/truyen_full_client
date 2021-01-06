import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
  <div className="Footer">
    <div>
      <div className="d-flex">
        <div className="content-footer">
          <h6>Truyenfull - Kho truyện online lớn nhất Việt Nam</h6>
          <br />
          <p>
          Truyenfull được thành lập bởi những bạn trẻ yêu thích đọc truyện, tiểu thuyết, truyện chữ, truyện Trung Quốc hiện đại. Với mục tiêu cung cấp kho truyện hay đầy đủ lớn nhất với hơn 25.000 bộ truyện, đủ các thể loại truyện ngôn tình, truyện teen, truyện đam mỹ, truyện tiên hiệp, kiếm hiệp, sủng, ngược, H văn...
          </p>
          <p>
          Truyenfull luôn nỗ lực không ngừng nghỉ để đem đến cho bạn đọc những bộ truyện hay, truyện full, truyện hot. Đặc biệt là cập nhật truyện mới, chương mới, truyện dịch sớm nhất.
          </p>
          <p>
          Chúng tôi không ngừng cải tiến giao diện, tính năng của website, nâng cấp server công nghệ để độc giả có thể đọc truyện thoải mái, nhanh chóng, thuận tiện trên laptop, điện thoại, máy tình bản. Đọc truyện online, offline.
          </p>
          <p>
          Rất mong được quý độc giả ủng hộ, góp ý hoặc gửi yêu cầu truyện để chúng tôi ngày càng hoàn thiện mình và phục vụ bạn đọc tốt hơn.
          </p>
          <p>
          Website đọc truyện online đầy đủ cập nhật mới nhất 2020. Đọc truyện online, truyện mới, truyện full, truyện dài, truyện dịch, truyện hay, truyện chữ, tiểu thuyết. Với nhiều thể loại hấp dẫn Tiên Hiệp, Kiếm Hiệp, Ngôn Tình, Đam Mỹ...
          </p>
        </div>
        <div className="side-bar-footer">
          <h6 style={{ padding: "0.75rem 1.25rem"}}>CHỦ ĐỀ TRUYỆN</h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Truyện ngôn tình</li>
            <li className="list-group-item">Truyện kiếm hiệp</li>
            <li className="list-group-item">Truyện trinh thám</li>
            <li className="list-group-item">Truyện tiểu thuyết</li>
            <li className="list-group-item">Truyện teen</li>
          </ul>
          <h6 style={{ padding: "0.75rem 1.25rem"}}>LIÊN HỆ ADMIN</h6>
          <div style={{ padding: "0.75rem 1.25rem"}}>
            <span className="fas fa-envelope icon"></span>
            <span>adsdoctruyen@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;

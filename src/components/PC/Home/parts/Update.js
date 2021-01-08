import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Table, Breadcrumb, Nav } from "react-bootstrap";

const Update = () => {

const [ tab, setTab ] = useState(1);
  return (
    <div className="Update">
      <Nav variant="tabs" activeKey={tab}>
        <Nav.Item>
          <Nav.Link eventKey={1} onClick={() => setTab(1)}>TRUYỆN MỚI CẬP NHẬT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={2} onClick={() => setTab(2)}>TRUYỆN NGÔN TÌNH</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={3} onClick={() => setTab(3)}>TRUYỆN KIẾM HIỆP</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={4} onClick={() => setTab(4)}>TRUYỆN TRINH THÁM</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={5} onClick={() => setTab(5)}>TRUYỆN TIỂU THUYẾT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={6} onClick={() => setTab(6)}>TRUYỆN TEEN</Nav.Link>
        </Nav.Item>
      </Nav>
      <Table className="ml-10">
        <thead>
          <tr>
            <th scope="col">Tên truyện</th>
            <th scope="col">Tình trạng</th>
            <th scope="col">Thời gian</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
          <tr>
            <td>
              <div className="label-status-full">FULL</div>
              <p>Yêu Sâu Nặng: Đế Thiếu Âm Thầm Cưng Chiều Vợ</p>
              <small>
                <Breadcrumb>
                  <Breadcrumb.Item>Ngôn Tình, Nhìn Xuyên Không</Breadcrumb.Item>
                  <Breadcrumb.Item><u>34 chương</u></Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </td>
            <td>
              Full
              <br/>
              174 Chương
            </td>
            <td><span className="fas fa-clock"></span>&nbsp;<span>23 phút trước</span></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
};

Update.propTypes = {};

Update.defaultProps = {};

export default Update;

import React from 'react';
import PropTypes from 'prop-types';
import Recommend from './parts/Recommend';
import Full from './parts/Full';
import Update from './parts/Update';
import Saved from './parts/Saved';
import Reading from './parts/Reading';
import { Accordion, Card, ListGroup } from 'react-bootstrap';

const Home = () => (
  <div className="Home">
    <div className="d-flex">
      <div className="content-home">
        <Recommend/>
        <Update/>
      </div>
      <div className="side-bar-home">
      <Accordion defaultActiveKey="0">
        <Reading/>
        <Saved/>
      </Accordion>
      <Full/>
      </div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

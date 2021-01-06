import React from 'react';
import PropTypes from 'prop-types';
import Recommend from './parts/Recommend';
import Full from './parts/Full';
import Update from './parts/Update';
import Saved from './parts/Saved';
import Reading from './parts/Reading';

const Home = () => (
  <div className="Home">
    <div>
      <div className="d-flex">
        <div className="content-home">
          <Recommend/>
          <Update/>
        </div>
        <div className="side-bar-home">
          <Reading/>
          <Saved/>
          <Full/>
        </div>
      </div>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

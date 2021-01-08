import React from 'react';
import PropTypes from 'prop-types';
import Recommend from './parts/Recommend';
import Update from './parts/Update';

const Home = () => (
  <div className="Home">
    <Recommend/>
    <Update/>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

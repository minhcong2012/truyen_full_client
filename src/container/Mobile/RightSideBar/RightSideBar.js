import React from 'react';
// import PropTypes from 'prop-types';
import Full from './parts/Full';
import Saved from './parts/Saved';
import Reading from './parts/Reading';
import { Accordion } from 'react-bootstrap';

const RightSideBar = () => (
  <React.Fragment>
    <Accordion defaultActiveKey="0">
      <Reading/>
      <Saved/>
    </Accordion>
    <Full/>
  </React.Fragment>
);

RightSideBar.propTypes = {};

RightSideBar.defaultProps = {};

export default RightSideBar;

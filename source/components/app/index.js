import React from 'react';
import PropTypes from 'prop-types';

export function App(props) {
  return (
    <div>{props.children}</div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

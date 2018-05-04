import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '~/root';

export function init() {
  ReactDOM.render(<Root />, document.getElementById('app'));
}

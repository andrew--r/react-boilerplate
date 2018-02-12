import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './components/hello';

const targetNode = document.getElementById('app');

function render() {
  ReactDOM.render(
    (
      <AppContainer>
        <Hello />
      </AppContainer>
    ),
    targetNode,
  );
}

if (module.hot) {
  module.hot.accept(render);
}

render();

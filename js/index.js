import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './components/calc';

require('babel-polyfill');


document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Calc />, document.getElementById('app'))
);

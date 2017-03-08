require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './calc';

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<Calc />, document.getElementByID('app'))
);

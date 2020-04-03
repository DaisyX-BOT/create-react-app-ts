import React from 'react';
import ReactDOM from 'react-dom';
import './assest/style/index.less';
import Main from './main';
import * as serviceWorker from './serviceWorker';

// import 'babel-polyfill'
// import 'url-polyfill'
// require('es6-promise').polyfill()

ReactDOM.render(
  <Main/>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

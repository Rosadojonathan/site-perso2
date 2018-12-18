import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

// import TagManager from 'react-gtm-module';
//
// const tagManagerArgs = {
//   gtmId: 'GTM-WQ35TQS'
// }
// 
// TagManager.initialize(tagManagerArgs)

ReactDOM.render(
<BrowserRouter>
   <App />
</BrowserRouter>
  , document.getElementById('root'));
// registerServiceWorker();

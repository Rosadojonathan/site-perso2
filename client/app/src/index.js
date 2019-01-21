import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, stateLoader } from './redux/store/store';

// import TagManager from 'react-gtm-module';
//
// const tagManagerArgs = {
//   gtmId: 'GTM-WQ35TQS'
// }
// 
// TagManager.initialize(tagManagerArgs)


store.subscribe(() => {
  stateLoader.saveState(store.getState());
});
window.store = store;




ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>  
  , document.getElementById('root'));
// registerServiceWorker();

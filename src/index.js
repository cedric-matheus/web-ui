/* istanbul ignore file */
// STYLES (in this file styles need to be loading before all code)
import './style.less';

// CORE LIBS
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// ANTD LIBS
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

// COMPONENTS
import App from './components/App';

// STORE
import store from './store';

// SERVICE WORKER
import * as serviceWorker from './serviceWorker';

// CONFIGURE REACT AXE
if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

// initializing react app
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ConfigProvider locale={ptBR}>
        <App />
      </ConfigProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

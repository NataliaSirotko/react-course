import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import Provider from './context/Card-context';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.interceptors.request.use(request => request,
  error => {
    console.log(error);
    Promise.reject(error)
  }
);

axios.interceptors.request.use(response => response,
  error => {
    console.log(error);
    Promise.reject(error)
  }
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from "./app/store"
import { Provider } from "react-redux";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Auth0Provider
     domain="dev-uboy704fmg1ozm5x.us.auth0.com"
     clientId="kjQQAYaAAV6fF12NKK083hwG4zVIUxlL"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}>
      <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

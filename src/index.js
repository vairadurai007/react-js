import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import LoginForm from './components/loginForm/LoginForm';
// import CrudTask from './crudClassComponend/CrudTask';
// import Read from '../src/crud/Read'
// import CrudForm from './crud/Create'
import { BrowserRouter } from 'react-router-dom';
// import Head from './components/route/Route';
// import CrudForm from './crud/Create';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LoginForm/> */}
    {/* <CrudTask/> */}
    {/* <Read/> */}
    <App/>
    <BrowserRouter>
    {/* <Head/> */}
    {/* <CrudForm/> */}
    </BrowserRouter>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

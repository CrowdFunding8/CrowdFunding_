import React from 'react';
import ReactDOM from 'react-dom/client';
import NewIdea from './components/newIdea/newIdea';
// import Idea from './components/ideas/idea';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Register from './components/register/register';
// import Forgot from './components/forgotPassword/forgot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register /> */}
    {/* <Forgot /> */}
    {/* <Idea/> */}
    <NewIdea/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

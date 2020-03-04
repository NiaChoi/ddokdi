import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import LoginLayout from './LoginLayout';
// import EventScheduler from './tempfiles/EventScheduler'
import Medicine from './Medicine';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<LoginLayout />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<EventScheduler />, document.getElementById('root'));

// ReactDOM.render(<Medicine />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

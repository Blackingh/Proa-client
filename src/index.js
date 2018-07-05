//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
//Routes
import App from './App'
//Assest
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

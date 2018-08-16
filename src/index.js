import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './TodoStore'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

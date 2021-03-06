import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history/createMemoryHistory';

ReactDOM.render(
    (<Router history={createBrowserHistory}>
            <App/>
    </Router>),
    document.getElementById('root')
);
registerServiceWorker();

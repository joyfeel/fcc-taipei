import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';
//import 'font-awesome/css/font-awesome.min.css!';

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
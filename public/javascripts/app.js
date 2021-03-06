import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import routes from './config/routes';

import {createBrowserHistory} from 'history';

//import 'font-awesome/css/font-awesome.min.css!';

ReactDOM.render(<Router history={createBrowserHistory}>{routes}</Router>, document.getElementById('app'));
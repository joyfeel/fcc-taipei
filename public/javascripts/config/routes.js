import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Landing from '../pages/Landing';
import Entry from '../pages/Entry';
import Register from '../pages/Register';
import Testpage from '../pages/Testpage';

export default (
	<Route path='/' component={Landing}>
		<Route path='register' component={Register}></Route>
		<Route path='testpage' component={Testpage}></Route>
		<IndexRoute component={Entry} />
	</Route>
);

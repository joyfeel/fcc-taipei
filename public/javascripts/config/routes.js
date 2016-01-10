import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Landing from '../pages/Landing';
import Entry from '../pages/Entry';
import Register from '../pages/Register';

export default (
	<Route path='/' component={Landing}>
		<IndexRoute component={Entry} />
		<Route path='/register' component={Register}></Route>
	</Route>
);

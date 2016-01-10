import React from 'react';
import Entry from '../components/Entry/Entry';
import Main from '../components/Main';
import {Route, IndexRoute} from 'react-router';

export default (
	<Route path='/' component={Main}>
		<IndexRoute component={Entry} />
	</Route>
);

import '@a-ui/core/dist/main.css';
import { QueryParamProvider } from '@redactie/utils';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from './routes';

function App() {
	return (
		<Router>
			<QueryParamProvider ReactRouterRoute={Route}>{routes}</QueryParamProvider>
		</Router>
	);
}

export default App;

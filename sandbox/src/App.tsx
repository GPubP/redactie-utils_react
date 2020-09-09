import '@a-ui/core/dist/main.css';
import { Container } from '@acpaas-ui/react-editorial-components';
import { QueryParamProvider, AlertContainer } from '@redactie/utils';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from './routes';

function App() {
	return (
		<Container>
			<AlertContainer />
			<Router>
				<QueryParamProvider ReactRouterRoute={Route}>{routes}</QueryParamProvider>
			</Router>
		</Container>
	);
}

export default App;

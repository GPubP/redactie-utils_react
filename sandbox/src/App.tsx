import '@a-ui/core/dist/main.css';
import { Container } from '@acpaas-ui/react-editorial-components';
import { CheckboxList } from '@redactie/utils';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from './routes';

function App() {
	return (
		<Container>
			{/* <AlertContainer /> */}
			<Router>
				{/* <QueryParamProvider ReactRouterRoute={Route}>{routes}</QueryParamProvider> */}
				<Formik initialValues={{ languages: ['one'] }} onSubmit={console.log}>
					{() => (
						<Form>
							<Field
								as={CheckboxList}
								name='languages'
								options={[{
									label: 'One',
									value: 'one',
									key: 'one'
								}, {
									label: 'Two',
									value: 'two',
									key: 'two'
								}]}
							/>
							<input type="submit" />
						</Form>
					)}
				</Formik>
			</Router>
		</Container>
	);
}

export default App;

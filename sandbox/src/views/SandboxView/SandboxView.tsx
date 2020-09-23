import { Button, ButtonGroup, TextField } from '@acpaas-ui/react-components';
import { useAPIQueryParams, alertService, ErrorMessage } from '@redactie/utils';
import { Field, Form, Formik } from 'formik';
import React, { FC, useEffect } from 'react';

const SandboxView: FC = () => {
	const [query, setQuery] = useAPIQueryParams({
		search: { defaultValue: 'lorem ipsum', type: 'string' },
	});

	useEffect(() => {
		if (query.sort !== 'data.property') {
			setQuery({
				pagesize: 20,
				sort: 'data.property',
				direction: 'desc',
			});
		}
	}, [query, setQuery]);

	const onPageChange = (page: number) => {
		if (page === 0) {
			return;
		}
		setQuery({ page });
	};

	const validateUsername = (value: string) => {
		let error;
		if (value === 'admin') {
			error = 'Nice try!, try to fill in an other username';
		}
		return error;
	}

	return (
		<>
			<h2 className="u-margin-bottom-xs">Components</h2>
			<h3 className="u-margin-bottom">Formik ErrorMessage</h3>
			<div className="u-margin-bottom">
				<Formik
					initialValues={{
						username: '',
					}}
					onSubmit={values => {
						// same shape as initial values
						console.log(values);
					}}
					>
					{() => (
						<Form>
						<Field
							as={TextField}
							label="username"
							description="Fill in a username, admin will throw an error"
							name="username"
							validate={validateUsername} />
						<ErrorMessage name="username"/>

						<button type="submit">Submit</button>
						</Form>
					)}
				</Formik>
			</div>
			<h2 className="u-margin-bottom-xs">Hooks</h2>
			<h3 className="u-margin-bottom">useAPIQueryParams</h3>
			<div className="u-margin-bottom">
				<code>{JSON.stringify(query)}</code>
			</div>
			<ButtonGroup>
				<Button onClick={() => onPageChange(query.page - 1)}>Previous page</Button>
				<Button onClick={() => onPageChange(query.page + 1)}>Next page</Button>
			</ButtonGroup>

			<h2 className="u-margin-top-lg u-margin-bottom-xs">Services</h2>
			<h3 className="u-margin-bottom">alertService</h3>
			<Button
				onClick={() =>
					alertService.info({ title: 'This is an info alert', message: 'Lorem ipsum' })
				}
			>
				Alert me
			</Button>
			<Button
				onClick={() => {
					alertService.dismiss();
					alertService.success({
						title: 'This is a success alert',
						message: 'Lorem ipsum',
					});
				}}
				type="danger"
			>
				Clear alerts
			</Button>
		</>
	);
};

export default SandboxView;

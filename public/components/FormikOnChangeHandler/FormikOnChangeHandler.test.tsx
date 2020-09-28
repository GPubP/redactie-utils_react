import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { Field, Form, Formik, FormikValues } from 'formik';
import React from 'react';

import FormikOnChangeHandler from './FormikOnChangeHandler';

jest.mock('lodash.debounce', () => (fn: () => null) => fn);

const renderFormikForm = (
	onChangeHanlder: (values: FormikValues) => void,
	delay = 300
): RenderResult => {
	return render(
		<Formik
			initialValues={{
				name: '',
			}}
			onSubmit={() => {
				//
			}}
		>
			{() => (
				<Form>
					<FormikOnChangeHandler
						delay={delay}
						onChange={(values) => onChangeHanlder(values)}
					/>
					<Field name="name" />
				</Form>
			)}
		</Formik>
	);
};

describe('<FormikOnChangeHandler/>', () => {
	it('should call the onChangle handler when the form value has changed', async () => {
		const onChangeHanlder = jest.fn();
		const { container } = renderFormikForm(onChangeHanlder);
		const input = container.querySelector('input[name="name"]');
		await waitFor(() => {
			if (input) {
				fireEvent.change(input, { target: { value: 'admin' } });
				fireEvent.blur(input);
			}
		});

		expect(onChangeHanlder).toHaveBeenCalledWith({
			name: 'admin',
		});
	});
});

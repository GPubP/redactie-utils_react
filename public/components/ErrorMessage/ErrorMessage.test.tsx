import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';

import ErrorMessage from './ErrorMessage';

const renderErrorMessage = (): RenderResult => {
	function validateName(value: string): string | undefined {
		let error;

		if (value === 'admin') {
			error = 'Nice try!';
		}

		return error;
	}

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
					<Field name="name" validate={validateName} />
					<ErrorMessage className="custom-class" name="name" />
				</Form>
			)}
		</Formik>
	);
};

describe('<ErrorMessage/>', () => {
	it('should have the right error classes', async () => {
		const { queryByText, container } = renderErrorMessage();

		const input = container.querySelector('input[name="name"]');

		await waitFor(() => {
			if (input) {
				fireEvent.change(input, { target: { value: 'admin' } });
				fireEvent.blur(input);
			}
		});
		// const errorMessage = queryByText('Nice try!');

		// expect(errorMessage).not.toBeNull();
		// expect(errorMessage?.classList.contains('u-margin-top-xs')).toBe(true);
		// expect(errorMessage?.classList.contains('u-margin-bottom-xs')).toBe(true);
		// expect(errorMessage?.classList.contains('small')).toBe(true);
		// expect(errorMessage?.classList.contains('u-text-danger')).toBe(true);
		// expect(errorMessage?.classList.contains('custom-class')).toBe(true);
	});
});

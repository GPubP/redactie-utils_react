import { FormikErrors, FormikValues, useFormikContext } from 'formik';
import debounce from 'lodash.debounce';
import { equals } from 'ramda';
import { FC, useEffect, useRef } from 'react';

import { FormikOnChangeHandlerProps } from './FormikOnChangeHandler.types';

const FormikOnChangeHandler: FC<FormikOnChangeHandlerProps> = ({
	delay = 300,
	onChange = () => null,
	onError = () => null,
	...formikProps
}): null => {
	const { initialValues, values, initialErrors, errors } = useFormikContext() || formikProps;
	const oldValues = useRef(initialValues);
	const oldErrors = useRef(initialErrors);
	const debouncedOnChange = debounce(onChange, delay, {
		leading: true,
	});

	const debouncedOnError = debounce(onError, delay, {
		leading: true,
	});

	useEffect(() => {
		if (!equals(oldValues.current, values)) {
			oldValues.current = values;
			debouncedOnChange(values as FormikValues);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	useEffect(() => {
		if (!equals(oldErrors.current, errors)) {
			oldErrors.current = errors;
			debouncedOnError(values as FormikValues, errors as FormikErrors<FormikValues>);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values, errors]);

	return null;
};

export default FormikOnChangeHandler;

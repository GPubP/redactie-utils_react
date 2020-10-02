import { FormikValues, useFormikContext } from 'formik';
import debounce from 'lodash.debounce';
import { equals } from 'ramda';
import { FC, useEffect, useRef } from 'react';

import { FormikOnChangeHandlerProps } from './FormikOnChangeHandler.types';

const FormikOnChangeHandler: FC<FormikOnChangeHandlerProps> = ({
	delay = 300,
	onChange = () => null,
	...formikProps
}): null => {
	const { initialValues, values } = useFormikContext() || formikProps;
	const oldValues = useRef(initialValues);
	const debouncedOnChange = debounce(onChange, delay, {
		leading: true,
	});

	useEffect(() => {
		if (!equals(oldValues.current, values)) {
			oldValues.current = values;
			debouncedOnChange(values as FormikValues);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values]);

	return null;
};

export default FormikOnChangeHandler;

import { FormikErrors, FormikValues } from 'formik';

import { LanguageErrors } from './FormikMultilanguageField.types';

const handleErrors = (
	values: FormikValues,
	errors: FormikErrors<FormikValues>,
	existingErrors?: LanguageErrors
): LanguageErrors => {
	const newErrors: LanguageErrors = existingErrors || {};

	Object.keys(values).forEach((i) => {
		if (values[i].multiLanguage) {
			const fieldErrors = errors[i] || null;
			//check for errors
			if (fieldErrors) {
				Object.keys(fieldErrors).forEach((j) => {
					if (!newErrors[j]) {
						newErrors[j] = [i];
					} else if (!newErrors[j].includes(i)) {
						newErrors[j].push(i);
					}
				});
			}
		} else if (typeof values[i] === 'object') {
			return handleErrors(errors, values[i], newErrors);
		}
	});

	return newErrors;
};

export const handleMultilanguageFormErrors = (
	errors: FormikErrors<FormikValues>,
	values: FormikValues
): LanguageErrors => {
	return handleErrors(values, errors);
};

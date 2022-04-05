import { FormikErrors, FormikValues } from 'formik';

import { LanguageErrors } from './FormikMultilanguageField.types';

const handleErrors = (
	values: FormikValues,
	errors: FormikErrors<FormikValues>,
	existingErrors?: LanguageErrors,
	parentPrefix?: string
): LanguageErrors => {
	const newErrors: LanguageErrors = existingErrors || {};

	Object.keys(values).forEach((i) => {
		if (values[i].multilanguage) {
			const fieldErrors = errors[i] || null;
			//check for errors
			if (fieldErrors) {
				Object.keys(fieldErrors).forEach((j) => {
					if (!newErrors[j]) {
						newErrors[j] = [`${parentPrefix || ''}${i}`];
					} else if (!newErrors[j].includes(`${parentPrefix || ''}${i}`)) {
						newErrors[j].push(`${parentPrefix || ''}${i}`);
					}
				});
			}
		} else if (typeof values[i] === 'object') {
			return handleErrors(errors, values[i], newErrors, `${i}.`);
		}
	});

	return newErrors;
};

export const handleMultilanguageFormErrors = (
	errors: FormikErrors<FormikValues>,
	values: FormikValues,
	filterErrors?: (errors: LanguageErrors) => LanguageErrors
): LanguageErrors => {
	const err = handleErrors(values, errors);

	return filterErrors ? filterErrors(err) : err;
};

import { FormikErrors, FormikValues } from 'formik';

import { LanguageErrors } from './FormikMultilanguageField.types';

export const handleMultilanguageFormErrors = (
	errors: FormikErrors<FormikValues>,
	values: FormikValues
): LanguageErrors => {
	const newErrors: LanguageErrors = {};
	Object.keys(values).forEach((i) => {
		if (values[i].multilanguage) {
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
		}
	});

	return newErrors;
};

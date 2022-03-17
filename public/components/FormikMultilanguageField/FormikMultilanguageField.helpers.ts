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
				console.log(fieldErrors);
				Object.keys(fieldErrors).forEach((j) => {
					console.log(!newErrors[j]);
					if (!newErrors[j] || (newErrors[j] && !newErrors[j].includes(i))) {
						newErrors[j].push(i);
					}
					console.log(newErrors);
				});
			}
		}
	});

	return newErrors;
};

import { FormikErrors, FormikValues } from 'formik';
import * as Yup from 'yup';

import { LanguageErrors } from './FormikMultilanguageField.types';

export const addMultiLanguageValidatorToYup = (yup: typeof Yup): void => {
	yup.addMethod(yup.mixed, 'validateMultiLanguage', function (languages, validation) {
		return this.test('validateMultiLanguage', function (value):
			| boolean
			| Yup.ValidationError
			| Promise<boolean | Yup.ValidationError> {
			if (!value) {
				return false;
			}

			// eslint-disable-next-line no-async-promise-executor
			return new Promise(async (resolve, reject) => {
				const errors = languages.map((l: any) => {
					return validation
						.validate(value[l.key])
						.then(() => null)
						.catch(({ message }: any) =>
							this.createError({ path: `${this.path}.${l.key}`, message })
						);
				});

				await Promise.allSettled(errors).then((e: any) => {
					reject(new yup.ValidationError(e.map((i: any) => i.value)));
				});

				resolve(true);
			});
		});
	});
};

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

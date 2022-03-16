import { LanguageHeaderContext, MultilanguageField } from '@acpaas-ui/react-editorial-components';
import { Field, useFormikContext } from 'formik';
import { pathOr } from 'ramda';
import React, { FC, useContext } from 'react';
import { ValidationError } from 'yup';

import { FormikMultilanguageFieldProps, Language } from './FormikMultilanguageField.types';

const FormikMultilanguageField: FC<FormikMultilanguageFieldProps> = ({
	name,
	validation,
	...props
}) => {
	const { activeLanguage, languages, errors, setErrors } = useContext(LanguageHeaderContext);
	const { values, setFieldValue } = useFormikContext();

	if (!activeLanguage) {
		return null;
	}

	const validateForAllLanguages = (): void => {
		if (!validation) {
			return;
		}

		languages.forEach(({ key }: Language) => {
			const value = pathOr(null, [name, key], values);
			validation
				.validate(value)
				.then(() => {
					//no error
					//remove field from errors
					if (!errors[key] || !errors[key].includes(name)) {
						return;
					} else {
						const newErrors = errors;
						const filteredKey = newErrors[key].filter(
							(fieldName: string) => fieldName !== name
						);
						setErrors({ ...newErrors, [key]: filteredKey });
					}
				})
				.catch(() => {
					//validation error
					//push field to errors
					if (errors[key] && errors[key].includes(name)) {
						return;
					} else {
						const newErrors = errors;
						if (!newErrors[key]) {
							newErrors[key] = [name];
							setErrors(newErrors);
						} else {
							newErrors[key].push(name);
							setErrors(newErrors);
						}
					}
				});
		});
	};

	const validateFieldForActiveLang = (value: any): any => {
		if (!validation) {
			return;
		}

		// invalid validation will return an object, based on the name, specified in the field below.
		return validation
			.validate(value)
			.then(() => {
				return;
			})
			.catch((err: ValidationError) => {
				return err;
			});
	};

	const getFieldValue = (): unknown => {
		// NICE TO HAVE: remove value if languages does not contain key of value

		const value = pathOr(null, [name], values);

		// if multilanguage, get value for active language
		if (pathOr(false, ['multilanguage'], value)) {
			return pathOr('', [activeLanguage.key], value);
		}

		// else, create multilanguage object and set empty value for active language
		setFieldValue(name, {
			multilanguage: true,
			[activeLanguage.key]: value || '',
		});

		return value || '';
	};

	validateForAllLanguages();

	return (
		<Field
			as={MultilanguageField}
			name={`${name}.${activeLanguage.key}`}
			value={getFieldValue()}
			validate={validateFieldForActiveLang}
			{...props}
		/>
	);
};

export default FormikMultilanguageField;

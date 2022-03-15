import { LanguageHeaderContext, MultilanguageField } from '@acpaas-ui/react-editorial-components';
import { Field, useFormikContext } from 'formik';
import { pathOr } from 'ramda';
import React, { FC, useContext } from 'react';
import { ValidationError } from 'yup';

import { FormikMultilanguageFieldProps } from './FormikMultilanguageField.types';

const FormikMultilanguageField: FC<FormikMultilanguageFieldProps> = ({
	name,
	validation,
	...props
}) => {
	const { activeLanguage } = useContext(LanguageHeaderContext);
	const { values, setFieldValue } = useFormikContext();

	if (!activeLanguage) {
		return null;
	}

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

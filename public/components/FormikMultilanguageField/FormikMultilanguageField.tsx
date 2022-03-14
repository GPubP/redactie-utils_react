import { LanguageHeaderContext, MultilanguageField } from '@acpaas-ui/react-editorial-components';
import { Field, useFormikContext } from 'formik';
import { pathOr } from 'ramda';
import React, { FC, useContext } from 'react';
import { lazy, object } from 'yup';

import { FormikMultilanguageFieldProps, Language } from './FormikMultilanguageField.types';

const FormikMultilanguageField: FC<FormikMultilanguageFieldProps> = ({
	name,
	validation,
	...props
}) => {
	const { activeLanguage, languages } = useContext(LanguageHeaderContext);
	const { values, setFieldValue } = useFormikContext();

	if (!activeLanguage) {
		return null;
	}

	const validateField = (value: any): any => {
		console.log({ value, validation });
		const schema = object().shape({
			[name]: object().shape(
				languages.reduce((acc: any, l: Language) => ({ ...acc, [l.key]: validation }), {})
			),
		});

		console.log(schema);
		console.log({ name, activeLanguage });

		console.log({ [name[activeLanguage.key]]: value });

		return schema.validateSync({ [activeLanguage.key]: value });
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

		console.log(value);

		return value || '';
	};

	return (
		<Field
			as={MultilanguageField}
			name={`${name}.${activeLanguage.key}`}
			value={getFieldValue()}
			validate={validateField}
			{...props}
		/>
	);
};

export default FormikMultilanguageField;

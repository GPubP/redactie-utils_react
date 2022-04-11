import { LanguageHeaderContext, MultilanguageField } from '@acpaas-ui/react-editorial-components';
import { Field, useFormikContext } from 'formik';
import { pathOr } from 'ramda';
import React, { FC, useContext } from 'react';

import { FieldWithError } from './FieldWithError';
import { FormikMultilanguageFieldProps } from './FormikMultilanguageField.types';

const FormikMultilanguageField: FC<FormikMultilanguageFieldProps> = ({
	name,
	asComponent,
	...props
}) => {
	const { activeLanguage } = useContext(LanguageHeaderContext);
	const { values, setFieldValue } = useFormikContext();

	if (!activeLanguage) {
		return null;
	}

	const getFieldValue = (): unknown => {
		// NICE TO HAVE: remove value if languages does not contain key of value

		const value = pathOr(null, name.split('.'), values);

		// if multilanguage, get value for active language
		if (pathOr(false, ['multiLanguage'], value)) {
			return pathOr('', [activeLanguage.key], value);
		}

		// else, create multilanguage object and set empty value for active language
		setFieldValue(name, {
			multiLanguage: true,
			[activeLanguage.key]: value || '',
		});

		return value || '';
	};

	return (
		<>
			<Field
				name={`${name}.${activeLanguage.key}`}
				as={MultilanguageField}
				asComponent={FieldWithError}
				fieldWithErrorComponent={asComponent}
				value={getFieldValue()}
				{...props}
			/>
		</>
	);
};

export default FormikMultilanguageField;

import React from 'react';
import { AnySchema } from 'yup';

export type FormikMultilanguageFieldProps = {
	name: string;
	validation?: AnySchema;
	asComponent: React.FC<any>;
	disableErrorMessages?: boolean;
	[key: string]: unknown;
};

export interface FieldWithErrorProps extends FormikMultilanguageFieldProps {
	fieldWithErrorComponent: React.FC<any>;
}

export type Language = {
	key: string;
	primary?: boolean;
};

export type LanguageErrors = {
	[key: string]: string[];
};

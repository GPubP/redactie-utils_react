import { AnySchema } from 'yup';

export type FormikMultilanguageFieldProps = {
	name: string;
	validation?: AnySchema;
	asComponent: unknown;
	[key: string]: unknown;
};

export type Language = {
	key: string;
	primary?: boolean;
};

export type LanguageErrors = {
	[key: string]: string[];
};

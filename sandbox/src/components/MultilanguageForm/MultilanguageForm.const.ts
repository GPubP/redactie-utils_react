import { object, string } from 'yup';

export const FORM_VALIDATION_SCHEMA = object().shape({
  title: string().required('Titel is een verplicht veld'),
});

export const MULTILANGUAGE_FIELDS_VALIDATION_SCHEMA = object().shape({
	description: string().required('Beschrijving is een verplicht veld')
});

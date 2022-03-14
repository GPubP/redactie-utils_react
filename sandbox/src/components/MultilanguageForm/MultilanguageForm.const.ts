import { object, string } from 'yup';

export const FORM_VALIDATION_SCHEMA = object().shape({
  title: string().required('Titel is een verplicht veld'),
});

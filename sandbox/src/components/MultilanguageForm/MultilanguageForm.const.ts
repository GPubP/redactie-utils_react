import * as Yup from 'yup';
import { addMultiLanguageValidatorToYup, Language } from '@redactie/utils';

addMultiLanguageValidatorToYup(Yup);

export const FORM_VALIDATION_SCHEMA = (languages: Language[]) =>
	Yup.object().shape({
		title: Yup.string().required('Titel is een verplicht veld'),
		description: Yup.object().validateMultiLanguage(
			languages,
			Yup.string().required('Beschrijving is een verplicht veld')
		),
	});

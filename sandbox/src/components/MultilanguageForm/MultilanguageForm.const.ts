import { MultilanguageYup } from '@redactie/utils';

//addMultiLanguageValidatorToYup(Yup);

export const FORM_VALIDATION_SCHEMA = (languages: any) =>
	MultilanguageYup.object().shape({
		title: MultilanguageYup.string().required('Titel is een verplicht veld'),
		url: MultilanguageYup.object().shape({
			description: MultilanguageYup.object().validateMultiLanguage(
				languages,
				MultilanguageYup.string().required('Beschrijving is een verplicht veld')
			),
		})
	});

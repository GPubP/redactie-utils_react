/* eslint-disable max-len */

export const LANGUAGE_HEADER_MOCK_LANGUAGES = [
	{
		key: 'nl',
		primary: true,
	},
	{
		key: 'fr',
	},
	{
		key: 'de',
	},
	{
		key: 'en',
	},
];

export const LANGUAGE_HEADER_MOCK_TOOLTIP = 'Er zijn opties voor meerdere talen in dit formulier. Selecteer een taal om specifieke instellingen te configureren.';

export const INITIAL_VALUES_MOCK = {
	title: '',
	info: { nl: 'nederlands', fr: 'frans', multilanguage: true },
	url: {
		description: { nl: 'nederlands', fr: 'frans', multiLanguage: true }
	},
	slug: {
		description: { nl: 'nederlands', fr: 'frans', multiLanguage: true }
	}
};
// export const INITIAL_VALUES_MOCK = { title: '', description: 'test' };

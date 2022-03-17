import * as Yup from 'yup';

Yup.addMethod(Yup.mixed, 'validateMultiLanguage', function (languages, validation) {
	return this.test('validateMultiLanguage', function (value) {
		if(!value) {
			return
		};

		return new Promise(async (resolve, reject) => {
			const errors = languages.map( (l) => {
				return validation
					.validate(value[l.key])
					.then(() => null)
					.catch(({ message }) => this.createError({ path: `${this.path}.${l.key}`, message }));
			});

			await Promise.allSettled(errors).then((e) => {
				reject(new Yup.ValidationError(e.map((i) => i.value)));
			})

			resolve(true);
		});
	});
});

export const FORM_VALIDATION_SCHEMA = (languages) =>
	Yup.object().shape({
		title: Yup.string().required('Titel is een verplicht veld'),
		description: Yup.object().validateMultiLanguage(
			languages,
			Yup.string().required('Beschrijving is een verplicht veld')
		),
	});

import * as yup from 'yup';

import { Language } from './FormikMultilanguageField.types';

yup.addMethod<yup.ObjectSchema<any, any, any>>(
	yup.object,
	'validateMultiLanguage',
	function (languages, validation) {
		return this.test('validateMultiLanguage', function (value: any):
			| boolean
			| yup.ValidationError
			| Promise<boolean | yup.ValidationError> {
			if (!value) {
				return false;
			}

			// eslint-disable-next-line no-async-promise-executor
			return new Promise(async (resolve, reject) => {
				const errors = languages.map((l: any) => {
					return validation
						.validate(value[l.key])
						.then(() => null)
						.catch(({ message }: any) => {
							return this.createError({ path: `${this.path}.${l.key}`, message });
						});
				});

				await Promise.allSettled(errors).then((e: any) => {
					reject(
						new yup.ValidationError(
							e.filter((i: any) => i.value).map((i: any) => i.value)
						)
					);
				});

				resolve(true);
			});
		});
	}
);

declare module 'yup' {
	interface ObjectSchema<TShape, TContext, TIn, TOut> {
		validateMultiLanguage(languages: Language[], schema: yup.AnySchema): any;
	}
}

export default yup;
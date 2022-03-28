import * as yup from 'yup';

yup.addMethod(yup.mixed, 'validateMultiLanguage', function (languages, validation) {
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
					.catch(({ message }: any) =>
						this.createError({ path: `${this.path}.${l.key}`, message })
					);
			});

			await Promise.allSettled(errors).then((e: any) => {
				reject(new yup.ValidationError(e.map((i: any) => i.value)));
			});

			resolve(true);
		});
	});
});

declare module 'yup' {
	interface MixedSchema<TType, TContext, TOut> extends yup.BaseSchema<TType, TContext, TOut> {
		validateMultiLanguage(): MixedSchema<TType, TContext, TOut>;
	}
}

export default yup;

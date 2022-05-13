import * as yup from 'yup';
import { AnyObject, AssertsShape, ObjectShape, TypeOfShape } from 'yup/lib/object';
import { Maybe, Optionals } from 'yup/lib/types';

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
	interface ObjectSchema<
		TShape extends ObjectShape,
		TContext extends AnyObject = AnyObject,
		TIn extends Maybe<TypeOfShape<TShape>> = TypeOfShape<TShape>,
		TOut extends Maybe<AssertsShape<TShape>> = AssertsShape<TShape> | Optionals<TIn>
	> extends yup.BaseSchema<TIn, TContext, TOut> {
		validateMultiLanguage(languages: Language[], schema: yup.AnySchema): any;
	}
}

export default yup;

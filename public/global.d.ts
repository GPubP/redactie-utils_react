import * as yup from 'yup';

import { Language } from './components';

declare module 'yup' {
	interface OptionalObjectSchema {
		validateMultiLanguage(languages: Language[], schema: yup.AnySchema);
	}
}

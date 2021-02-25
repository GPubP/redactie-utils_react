import { QUERY_PARAMS_MAP } from './useAPIQueryParams.const';

type FlatObject<V = string> = { [key: string]: V | null | undefined };

export type APIQueryParamType =
	| 'string'
	| 'number'
	| 'boolean'
	| 'object'
	| 'date'
	| 'dateTime'
	| 'numericObject'
	| 'array'
	| 'delimitedArray'
	| 'numericArray'
	| 'delimitedNumericArray'
	| 'json';

export type APIQueryParamsConfig = {
	[paramName: string]: {
		defaultValue?:
			| string
			| number
			| boolean
			| Date
			| FlatObject
			| FlatObject<number>
			| (string | null)[]
			| (number | null)[]
			| any; // Any accounts for the JsonParam serialize
		type: APIQueryParamType;
	};
};

export type QueryParamsMap = typeof QUERY_PARAMS_MAP;

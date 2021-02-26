import { DecodedValueMap, SetQuery } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS_CONFIG, QUERY_PARAMS_MAP } from './useAPIQueryParams.const';

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
export type DefaultAPIQueryParamsConfig = typeof DEFAULT_API_QUERY_PARAMS_CONFIG;

export type Config<C extends APIQueryParamsConfig, E extends boolean> = E extends true
	? C & DefaultAPIQueryParamsConfig
	: C;
export type ConfigMap<C extends APIQueryParamsConfig, E extends boolean> = {
	[P in keyof Config<C, E>]: QueryParamsMap[Config<C, E>[P]['type']];
};

export type UseAPIQUeryParamsReturnValue<C extends APIQueryParamsConfig, E extends boolean> = [
	DecodedValueMap<ConfigMap<C, E>>,
	SetQuery<ConfigMap<C, E>>
];

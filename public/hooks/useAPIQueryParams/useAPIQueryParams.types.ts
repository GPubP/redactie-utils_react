import { QueryParamConfig, QueryParamConfigMap } from 'use-query-params';

type FlatObject<V = string> = { [key: string]: V | null | undefined };

export type ApiQueryParamType =
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

export type APIQueryParamsConfig<C extends { [key: string]: { type: APIQUeryParamValue } }> = {
	[K in keyof C]: {
		defaultValue?: C[K]['type'] extends 'string'
			? string
			: C[K]['type'] extends 'number'
			? number
			: C[K]['type'] extends 'boolean'
			? boolean
			: C[K]['type'] extends 'date' | 'dateTime'
			? Date
			: C[K]['type'] extends 'object'
			? FlatObject
			: C[K]['type'] extends 'numericObject'
			? FlatObject<number>
			: C[K]['type'] extends 'array' | 'delimitedArray'
			? (string | null)[]
			: C[K]['type'] extends 'numericArray' | 'delimitedNumericArray'
			? (number | null)[]
			: any; // Any value is for json
		type: ApiQueryParamType;
	};
};

export interface DefaultAPIQueryParams extends QueryParamConfigMap {
	page: QueryParamConfig<number>;
	pagesize: QueryParamConfig<number>;
}

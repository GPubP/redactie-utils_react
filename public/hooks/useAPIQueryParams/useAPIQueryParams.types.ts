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
	[key: string]: {
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

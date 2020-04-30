import {
	ArrayParam,
	BooleanParam,
	DateParam,
	DateTimeParam,
	DelimitedArrayParam,
	DelimitedNumericArrayParam,
	JsonParam,
	NumberParam,
	NumericArrayParam,
	NumericObjectParam,
	ObjectParam,
	StringParam,
} from 'use-query-params';

import { APIQueryParamsConfig } from './useAPIQueryParams.types';

export const DEFAULT_API_QUERY_PARAMS_CONFIG: APIQueryParamsConfig = {
	page: {
		defaultValue: 1,
		type: 'number',
	},
	pagesize: {
		defaultValue: 20,
		type: 'number',
	},
	sort: {
		type: 'string',
	},
	direction: {
		type: 'string',
	},
};

export const QUERY_PARAMS_MAP = {
	string: StringParam,
	number: NumberParam,
	object: ObjectParam,
	array: ArrayParam,
	json: JsonParam,
	date: DateParam,
	dateTime: DateTimeParam,
	boolean: BooleanParam,
	numericObject: NumericObjectParam,
	numericArray: NumericArrayParam,
	delimitedArray: DelimitedArrayParam,
	delimitedNumericArray: DelimitedNumericArrayParam,
};

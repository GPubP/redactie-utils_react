import { DefaultAPIQueryParams } from './useAPIQueryParams.types';
import {
	withDefault,
	NumberParam,
	StringParam,
	ObjectParam,
	ArrayParam,
	JsonParam,
	DateParam,
	DateTimeParam,
	BooleanParam,
	NumericObjectParam,
	DelimitedArrayParam,
	DelimitedNumericArrayParam,
	NumericArrayParam,
} from 'use-query-params';

const DEFAULT_API_QUERY_PARAM_VALUES = {
	page: 1,
	pagesize: 20,
};

export const DEFAULT_API_QUERY_PARAMS: DefaultAPIQueryParams = {
	page: withDefault(NumberParam, DEFAULT_API_QUERY_PARAM_VALUES.page),
	pagesize: withDefault(NumberParam, DEFAULT_API_QUERY_PARAM_VALUES.pagesize),
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

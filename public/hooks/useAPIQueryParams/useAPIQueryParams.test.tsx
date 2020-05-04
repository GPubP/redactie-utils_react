import { ArrayParam, DateTimeParam, NumberParam, withDefault } from 'use-query-params';

import { generateAPIQueryParams } from './useAPIQueryParams.helpers';
import { APIQueryParamsConfig } from './useAPIQueryParams.types';

const MOCK_CONFIG: APIQueryParamsConfig = {
	skip: {
		defaultValue: 10,
		type: 'number',
	},
	limit: {
		defaultValue: 25,
		type: 'number',
	},
	search: {
		type: 'array',
	},
	createdAt: {
		type: 'dateTime',
	},
};

const MOCK_CONFIG_RESULT = {
	skip: withDefault(NumberParam, 10),
	limit: withDefault(NumberParam, 25),
	search: ArrayParam,
	createdAt: DateTimeParam,
};

describe('Hooks: useAPIQueryParams', () => {
	it('Should generate query params from a given config', () => {
		const queryParams = generateAPIQueryParams(MOCK_CONFIG);
		expect(JSON.stringify(queryParams)).toBe(JSON.stringify(MOCK_CONFIG_RESULT));
	});
});

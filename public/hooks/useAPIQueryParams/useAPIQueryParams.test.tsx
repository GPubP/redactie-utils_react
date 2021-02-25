import { renderHook } from '@testing-library/react-hooks';
import { createMemoryHistory } from 'history';
import React, { ReactElement } from 'react';
import {
	ArrayParam,
	DateTimeParam,
	NumberParam,
	QueryParamProvider,
	withDefault,
} from 'use-query-params';

import useAPIQueryParams from './useAPIQueryParams';
import { generateAPIQueryParams } from './useAPIQueryParams.helpers';

const MOCK_CONFIG = {
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
} as const;

const MOCK_CONFIG_RESULT = {
	skip: withDefault(NumberParam, 10),
	limit: withDefault(NumberParam, 25),
	search: ArrayParam,
	createdAt: DateTimeParam,
};

const memoryHistory = createMemoryHistory({ initialEntries: ['/'] });

describe('Hooks: useAPIQueryParams', () => {
	it('Should generate query params from a given config', () => {
		const queryParams = generateAPIQueryParams(MOCK_CONFIG);
		expect(JSON.stringify(queryParams)).toBe(JSON.stringify(MOCK_CONFIG_RESULT));
	});

	it('Should return a query object and setter', async () => {
		const wrapper = ({ children }: any): ReactElement => (
			<QueryParamProvider history={memoryHistory as any}>{children}</QueryParamProvider>
		);
		const { result } = renderHook(
			() =>
				useAPIQueryParams({
					search: {
						type: 'string',
					},
				}),
			{ wrapper }
		);
		const [query, setQuery] = result.current;

		expect(query.search).toBeUndefined();

		setQuery({ search: 'query' });

		expect(memoryHistory.location.search).toBe('?search=query');
	});
});

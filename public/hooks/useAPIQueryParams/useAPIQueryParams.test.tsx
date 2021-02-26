import { renderHook, RenderHookResult } from '@testing-library/react-hooks';
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
import { APIQueryParamsConfig } from './useAPIQueryParams.types';

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

const renderUseAPIQueryParams = (
	config: APIQueryParamsConfig,
	extend = true
): RenderHookResult<{}, ReturnType<typeof useAPIQueryParams>> => {
	const wrapper = ({ children }: any): ReactElement => (
		<QueryParamProvider history={memoryHistory as any}>{children}</QueryParamProvider>
	);
	return renderHook(() => useAPIQueryParams(config, extend), { wrapper });
};

describe('Hooks: useAPIQueryParams', () => {
	it('Should generate query params from a given config', () => {
		const queryParams = generateAPIQueryParams(MOCK_CONFIG);
		expect(JSON.stringify(queryParams)).toBe(JSON.stringify(MOCK_CONFIG_RESULT));
	});

	it('Should update url search params when updating query', () => {
		const searchValue = 'query';
		const { result } = renderUseAPIQueryParams({
			search: { type: 'string' },
		});
		const [query, setQuery] = result.current;

		expect(query.search).toBeUndefined();
		expect(memoryHistory.location.search).toBe('');

		setQuery({ search: searchValue });

		expect(memoryHistory.location.search).toBe(`?search=${searchValue}`);
	});

	it('Should extend from default config by default', () => {
		const { result } = renderUseAPIQueryParams({
			search: { type: 'string' },
		});
		const [query] = result.current;

		expect(query.page).toBeDefined();
		expect(query.pagesize).toBeDefined();
		// These keys don't have default values but they still exist on the query object
		// with the value being undefined
		expect(query).toHaveProperty('sort');
		expect(query).toHaveProperty('direction');
	});

	it('Should not extend from default config when passing false', () => {
		const { result } = renderUseAPIQueryParams(
			{
				search: { type: 'string' },
			},
			false
		);
		const [query] = result.current;

		expect(query.page).toBeUndefined();
		expect(query.pagesize).toBeUndefined();
		expect(query.sort).toBeUndefined();
		expect(query.direction).toBeUndefined();
	});
});

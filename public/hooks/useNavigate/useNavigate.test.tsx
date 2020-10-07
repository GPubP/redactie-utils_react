import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import { TenantContext } from '../../context';

import useNavigate from './useNavigate';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
	...Object.assign({}, jest.requireActual('react-router-dom')),
	useHistory: () => ({
		push: mockHistoryPush,
	}),
}));

// eslint-disable-next-line react/display-name
const RenderRouterWrapper = (pathname: string, tenantId: string) => ({
	children,
}: {
	children: any;
}) => {
	return (
		<Router initialIndex={0} initialEntries={[{ pathname }]}>
			<TenantContext.Provider value={{ tenantId }}>{children}</TenantContext.Provider>
		</Router>
	);
};

describe('useNavigate', () => {
	it('should navigate correctly', () => {
		const path = '/home';
		const tenantId = '123';
		const siteId = '123';
		const search = 'searchTerm';
		const pathPrefix = 'sites';
		const state = {
			value: 'locaction state',
		};
		const searchParams = new URLSearchParams({
			search,
		});
		const { result } = renderHook(() => useNavigate(pathPrefix), {
			wrapper: RenderRouterWrapper(path, tenantId),
		});

		result.current.navigate('/:siteId/child-path', { siteId }, state, searchParams);

		const generatedPath = result.current.generatePath(
			'/:siteId/child-path',
			{ siteId },
			searchParams
		);

		expect(mockHistoryPush).toHaveBeenCalledWith(
			`/${tenantId}/${pathPrefix}/${siteId}/child-path?search=${search}`,
			state
		);

		expect(generatedPath).toBe(
			`/${tenantId}/${pathPrefix}/${siteId}/child-path?search=${search}`
		);
	});
});

import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { TenantContext } from '../../context';

import useTenantContext from './useTenantContext';

// eslint-disable-next-line react/display-name
const RenderSiteContextWrapper = (tenantId: string) => ({ children }: { children: any }) => {
	return <TenantContext.Provider value={{ tenantId }}>{children}</TenantContext.Provider>;
};

describe('useTenantContext', () => {
	it('should return the siteContext', () => {
		const tenantId = '123';

		const { result } = renderHook(() => useTenantContext(), {
			wrapper: RenderSiteContextWrapper(tenantId),
		});

		expect(result.current.tenantId).toBe(tenantId);
	});
});

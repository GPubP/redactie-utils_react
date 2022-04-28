import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { SiteContext } from '../../context';

import useSiteContext from './useSiteContext';

const RenderSiteContextWrapper =
	(siteId: string) =>
	// eslint-disable-next-line react/display-name
	({ children }: { children: any }) => {
		return <SiteContext.Provider value={{ siteId }}>{children}</SiteContext.Provider>;
	};

describe('useSiteContext', () => {
	it('should return the siteContext', () => {
		const siteId = '123';

		const { result } = renderHook(() => useSiteContext(), {
			wrapper: RenderSiteContextWrapper(siteId),
		});

		expect(result.current.siteId).toBe(siteId);
	});
});

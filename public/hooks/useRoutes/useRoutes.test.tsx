import Core from '@redactie/redactie-core';
import { renderHook } from '@testing-library/react-hooks';
import { of } from 'rxjs';

import useRoutes from './useRoutes';

jest.mock('@redactie/redactie-core', () => {
	return {
		__esModule: true,
		default: {
			routes: {
				routesChanges: '',
			},
		},
	};
});

describe('useRoute', () => {
	it('Should get the current routes', async () => {
		const routes = [{ path: 'some-path' }];
		Core.routes.routesChanges = of(routes) as any;
		const { result } = renderHook(() => useRoutes());

		expect(result.current).toEqual(routes);
	});
});

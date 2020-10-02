import Core, { ModuleRouteConfig } from '@redactie/redactie-core';
import { render, RenderResult } from '@testing-library/react';
import React from 'react';

import RenderChildRoutes from './RenderChildRoutes';

const routes: ModuleRouteConfig[] = [
	{
		component: () => null,
		path: 'some-path',
		guardOptions: {
			guards: [],
		},
	},
];
// extra meta data send to the quards
const guardsMeta = {
	tenantId: 'some id',
};
// extra routes options
const extraOptions = {
	data: 'some data',
};

const renderChildRoutes = (
	routes: ModuleRouteConfig[],
	guardsMeta: Record<string, any>,
	extraOptions: Record<string, any>
): RenderResult => {
	return render(
		<RenderChildRoutes routes={routes} guardsMeta={guardsMeta} extraOptions={extraOptions} />
	);
};

describe('<RenderChildRoutes/>', () => {
	it('Shoudl call the render function on the Core API with the right data', () => {
		const renderRoutesSpy = jest.spyOn(Core.routes, 'render').mockImplementation(jest.fn());

		renderChildRoutes(routes, guardsMeta, extraOptions);

		expect(renderRoutesSpy).toHaveBeenCalledWith(
			[
				{
					...routes[0],
					guardOptions: {
						...routes[0].guardOptions,
						meta: guardsMeta,
					},
				},
			],
			extraOptions
		);

		renderRoutesSpy.mockRestore();
	});
});

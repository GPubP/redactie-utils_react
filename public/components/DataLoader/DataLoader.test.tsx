import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';

import { LoadingState } from '../../types/index.types';

import DataLoader from './DataLoader';

const renderDataLoader = (
	loadingState: LoadingState,
	renderComponent: () => ReactElement | null
): RenderResult => {
	return render(<DataLoader loadingState={loadingState} render={renderComponent} />);
};

const DummyComponent = (): ReactElement => {
	return <p>component loaded</p>;
};

describe('<DataLoader/>', () => {
	it('should show a spinner when the loading state is loading', async () => {
		const { queryByRole, queryByText } = renderDataLoader(LoadingState.Loading, DummyComponent);

		const spinner = queryByRole('status');
		const renderComponent = queryByText('component loaded');

		expect(spinner).not.toBeNull();
		expect(renderComponent).toBeNull();
	});

	it('should show a not found message when the render function returns null', () => {
		const DummyComponentReturnNull = (): ReactElement | null => null;
		const { queryByText } = renderDataLoader(LoadingState.Loaded, DummyComponentReturnNull);

		const renderComponent = queryByText('component loaded');
		const notFound = queryByText('Geen data gevonden');

		expect(notFound).not.toBeNull();
		expect(renderComponent).toBeNull();
	});

	it('should render the renderComponent when the loading state is loaded', () => {
		const { queryByText } = renderDataLoader(LoadingState.Loaded, DummyComponent);

		const renderComponent = queryByText('component loaded');
		expect(renderComponent).not.toBeNull();
	});

	it('should show an error message when the loading state is error', () => {
		const { queryByText } = renderDataLoader(LoadingState.Error, DummyComponent);

		const errorMessage = queryByText('Er ging iets mis tijdens het ophalen van de data');
		const renderComponent = queryByText('component loaded');

		expect(errorMessage).not.toBeNull();
		expect(renderComponent).toBeNull();
	});
});

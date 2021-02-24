import { render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';

import { LoadingState } from '../../types';

import DataLoader from './DataLoader';
import { DATALOADER_DEFAULT_PROPS } from './DataLoader.const';

const loadedText = 'component loaded';
const DummyComponent = (): ReactElement => <p>{loadedText}</p>;

const renderDataLoader = (
	loadingState: LoadingState | boolean,
	renderComponent: () => ReactElement | null = DummyComponent
): RenderResult => {
	return render(<DataLoader loadingState={loadingState} render={renderComponent} />);
};

describe('<DataLoader/>', () => {
	it('should show a spinner when the loading state is loading', async () => {
		const { queryByRole, queryByText } = renderDataLoader(LoadingState.Loading);

		const spinner = queryByRole('status');
		const renderComponent = queryByText(loadedText);

		expect(spinner).not.toBeNull();
		expect(renderComponent).toBeNull();
	});

	it('should show a not found message when the render function returns null', () => {
		const DummyComponentReturnNull = (): ReactElement | null => null;
		const { queryByText } = renderDataLoader(LoadingState.Loaded, DummyComponentReturnNull);

		const renderComponent = queryByText(loadedText);
		const notFound = queryByText(DATALOADER_DEFAULT_PROPS.notFoundMessage);

		expect(notFound).not.toBeNull();
		expect(renderComponent).toBeNull();
	});

	it('should render the renderComponent when the loading state is loaded', () => {
		const { queryByText } = renderDataLoader(LoadingState.Loaded);

		const renderComponent = queryByText(loadedText);
		expect(renderComponent).not.toBeNull();
	});

	it('should show an error message when the loading state is error', () => {
		const { queryByText } = renderDataLoader(LoadingState.Error);

		const errorMessage = queryByText(DATALOADER_DEFAULT_PROPS.errorMessage);
		const renderComponent = queryByText(loadedText);

		expect(errorMessage).not.toBeNull();
		expect(renderComponent).toBeNull();
	});

	it('should support boolean as loadingState', () => {
		const { queryByRole, queryByText, rerender } = renderDataLoader(true);

		const spinner = queryByRole('status');
		expect(spinner).not.toBeNull();

		rerender(<DataLoader loadingState={false} render={DummyComponent} />);

		const renderComponent = queryByText(loadedText);
		expect(renderComponent).not.toBeNull();
	});
});

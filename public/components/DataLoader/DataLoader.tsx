import { Spinner } from '@acpaas-ui/react-components';
import React, { FC, ReactElement } from 'react';

import { LoadingState } from '../../types/index.types';

import { DATALOADER_DEFAULT_PROPS } from './DataLoader.const';
import { DataLoaderProps } from './DataLoader.types';

const DataLoader: FC<DataLoaderProps> = ({
	errorMessage = DATALOADER_DEFAULT_PROPS.errorMessage,
	loadingState,
	notFoundMessage = DATALOADER_DEFAULT_PROPS.notFoundMessage,
	render,
}) => {
	const renderLoading = (): ReactElement => (
		<div className="u-text-center u-margin-top">
			<Spinner />
		</div>
	);

	const renderLoaded = (): ReactElement =>
		render() || <p className="u-text-prewrap">{notFoundMessage}</p>;

	if (typeof loadingState === 'boolean') {
		return loadingState ? renderLoading() : renderLoaded();
	}

	switch (loadingState) {
		case LoadingState.Loading:
			return renderLoading();

		case LoadingState.Loaded:
			return renderLoaded();

		case LoadingState.Error:
			return <p>{errorMessage}</p>;

		default:
			return null;
	}
};

export default DataLoader;

import { Spinner } from '@acpaas-ui/react-components';
import React, { FC } from 'react';

import { LoadingState } from '../../types/index.types';

import { DATALOADER_DEFAULT_PROPS } from './DataLoader.const';
import { DataLoaderProps } from './DataLoader.types';

const DataLoader: FC<DataLoaderProps> = ({
	errorMessage = DATALOADER_DEFAULT_PROPS.errorMessage,
	loadingState,
	notFoundMessage = DATALOADER_DEFAULT_PROPS.notFoundMessage,
	render,
}) => {
	switch (loadingState) {
		case LoadingState.Loading:
		case true:
			return (
				<div className="u-text-center u-margin-top">
					<Spinner />
				</div>
			);

		case LoadingState.Loaded:
		case false:
			return render() || <p className="u-text-prewrap">{notFoundMessage}</p>;

		case LoadingState.Error:
			return <p>{errorMessage}</p>;

		default:
			return null;
	}
};

export default DataLoader;

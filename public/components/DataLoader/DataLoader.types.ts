import { ReactElement } from 'react';

import { LoadingState } from '../../types/index.types';

export interface DataLoaderProps {
	errorMessage?: string;
	loadingState: LoadingState | boolean;
	notFoundMessage?: string;
	render: () => ReactElement | null;
}

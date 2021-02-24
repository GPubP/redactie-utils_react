import { ReactElement } from 'react';

import { LoadingState } from '../../types';

export interface DataLoaderProps {
	errorMessage?: string;
	loadingState: LoadingState | boolean;
	notFoundMessage?: string;
	render: () => ReactElement | null;
}

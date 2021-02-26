import { ReactElement, ReactNode } from 'react';

import { LoadingState } from '../../types';

export interface DataLoaderProps {
	errorMessage?: ReactNode;
	loadingState: LoadingState | boolean;
	notFoundMessage?: ReactNode;
	render: () => ReactElement | null;
}

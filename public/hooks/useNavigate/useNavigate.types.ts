import * as H from 'history';

export type NavigateParams = { [paramName: string]: string | number | boolean | undefined };
export type NavigateQuery = { [paramName: string]: string | number | boolean | undefined };
export type NavigateGenerateFn = (
	path: string,
	params?: NavigateParams,
	query?: URLSearchParams
) => string;
export type NavigateFn = (
	path: string,
	params?: NavigateParams,
	state?: H.LocationState,
	query?: URLSearchParams
) => void;

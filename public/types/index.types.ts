export enum LoadingState {
	Loading = 'loading',
	Creating = 'creating',
	Updating = 'updating',
	Loaded = 'loaded',
	Error = 'error',
}

export type HandlerFn = (...args: any[]) => any;

export enum LoadingState {
	Loading = 'loading',
	Creating = 'creating',
	Updating = 'updating',
	Loaded = 'loaded',
	Error = 'error',
}

export interface SearchParams {
	page?: number;
	pagesize?: number;
	skip?: number;
	limit?: number;
	sort?: string;
	search?: string;
}

export interface OrderBy {
	key: string;
	order: 'asc' | 'desc';
}

export type HandlerFn = (...args: any[]) => any;

export * from './workers.types';

export enum LoadingState {
	Loading = 'loading',
	Creating = 'creating',
	Updating = 'updating',
	Loaded = 'loaded',
	Error = 'error',
}

export interface Tab {
	name: string;
	target: string;
	active: boolean;
	disabled?: boolean;
}

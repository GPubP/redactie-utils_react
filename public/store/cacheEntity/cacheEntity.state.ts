import { EntityState } from '@datorama/akita';

export interface CacheEntityUI {
	isUpdating: boolean;
	isFetching: boolean;
	isDeleting: boolean;
	error: any;
}

export interface CacheEntityState<State = any, IDType = any> extends EntityState<State, IDType> {
	isFetching: boolean;
	isCreating: boolean;
}

export type CacheEntityUIState<UIState = any, IDType = any> = EntityState<
	CacheEntityUI & UIState,
	IDType
>;

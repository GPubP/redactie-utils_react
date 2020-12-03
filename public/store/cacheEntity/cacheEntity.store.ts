import {
	EntityStore,
	EntityUIStore,
	getEntityType,
	getIDType,
	OrArray,
	StoreConfigOptions,
} from '@datorama/akita';
import { isNil } from 'ramda';

import { DEFAULT_INITIAL_STATE, DEFAULT_INITIAL_UI_STATE } from './caceEntity.const';
import { CacheEntityState, CacheEntityUIState } from './cacheEntity.state';

export class CacheEntityStore<
	UIState extends CacheEntityUIState = any,
	State extends CacheEntityState = any,
	EntityType = getEntityType<State>,
	IDType = getIDType<State>
> extends EntityStore<State, EntityType, IDType> {
	ui!: EntityUIStore<UIState>;

	constructor(
		initialState: Partial<State> = DEFAULT_INITIAL_STATE as Partial<State>,
		initialUIState: Record<string, any> = DEFAULT_INITIAL_UI_STATE,
		options?: Partial<StoreConfigOptions>
	) {
		super(
			{
				...DEFAULT_INITIAL_STATE,
				...initialState,
			},
			options
		);
		this.createUIStore().setInitialEntityState({
			...DEFAULT_INITIAL_UI_STATE,
			...initialUIState,
		});
	}

	/**
	 * GLOBAL UI STATE
	 */

	public setIsFetching(isFetching = false): void {
		this.selLoadingState('isFetching', isFetching);
	}

	public setIsCreating(isCreating = false): void {
		this.selLoadingState('isCreating', isCreating);
	}

	/**
	 * ENTITY UI STATE
	 */

	public setIsFetchingEntity(isFetching = false, entityId: OrArray<getIDType<UIState>>): void {
		this.selLoadingState('isFetching', isFetching, entityId);
	}

	public setIsUpdatingEntity(isUpdating = false, entityId: OrArray<getIDType<UIState>>): void {
		this.selLoadingState('isUpdating', isUpdating, entityId);
	}

	public setIsDeletingEntity(isDeleting = false, entityId: OrArray<getIDType<UIState>>): void {
		this.selLoadingState('isDeleting', isDeleting, entityId);
	}

	private selLoadingState(
		prop: string,
		value: boolean,
		entityId?: OrArray<getIDType<UIState>>
	): void {
		if (!prop) {
			return;
		}
		if (!isNil(entityId)) {
			this.ui.upsert(
				entityId,
				(uiState) =>
					({
						...uiState,
						[prop]: !!value,
					} as getEntityType<UIState>)
			);
			return;
		}

		this.update((state) => ({
			...state,
			[prop]: !!value,
		}));
	}
}

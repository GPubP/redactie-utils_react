import { EntityUIQuery, getIDType, QueryConfigOptions, QueryEntity } from '@datorama/akita';
import { isNil } from 'ramda';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CacheEntityState, CacheEntityUIState } from './cacheEntity.state';
import { CacheEntityStore } from './cacheEntity.store';

export class CacheEntityQuery<
	UIState extends CacheEntityUIState = any,
	State extends CacheEntityState<unknown, unknown> = any
> extends QueryEntity<State> {
	ui!: EntityUIQuery<UIState>;

	constructor(protected store: CacheEntityStore<UIState, State>, options?: QueryConfigOptions) {
		super(store, options);
		this.createUIQuery();
	}

	/**
	 * GLOBAL UI STATES
	 */

	public isCreating$ = this.select('isCreating');
	public isFetching$ = this.select('isFetching');
	public error$ = this.selectError();

	/**
	 * ENTITY UI STATE QUERIES
	 */

	public selectIsFetchingEntity(entityId: getIDType<UIState>): Observable<boolean> {
		return this.selectIsProp('isFetching', entityId);
	}

	public selectIsUpdatingEntity(entityId: getIDType<UIState>): Observable<boolean> {
		return this.selectIsProp('isUpdating', entityId);
	}

	public selectIsDeletingEntity(entityId: getIDType<UIState>): Observable<boolean> {
		return this.selectIsProp('isDeleting', entityId);
	}

	public selectEntityError(entityId: getIDType<UIState>): Observable<any> {
		if (isNil(entityId) || !this.ui.hasEntity(entityId)) {
			return EMPTY;
		}
		return this.ui.selectEntity(entityId, 'error');
	}

	/**
	 * HELPERS
	 */

	protected selectIsProp(prop: string, entityId: getIDType<UIState>): Observable<boolean> {
		if (isNil(entityId) || !this.ui.hasEntity(entityId) || !prop) {
			return EMPTY;
		}

		return this.ui.selectEntity(entityId, prop).pipe(map((value: any) => !!value));
	}
}

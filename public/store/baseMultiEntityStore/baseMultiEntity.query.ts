import { getEntityType, getIDType, QueryConfigOptions, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { LoadingState } from '../../index.types';

import { BaseMultiEntityState } from './baseMultiEntity.state';
import { BaseMultiEntityStore } from './baseMultiEntity.store';

export class BaseMultiEntityQuery<S extends BaseMultiEntityState<any, any>> extends QueryEntity<S> {
	constructor(protected store: BaseMultiEntityStore<S>, options?: QueryConfigOptions) {
		super(store as any, options);
	}

	protected convertModelToLoadingState(item: getEntityType<S> | undefined): LoadingState {
		if (item?.isFetching) {
			return LoadingState.Loading;
		}

		return LoadingState.Loaded;
	}

	protected convertBoolToLoadingState(bool: boolean): LoadingState {
		if (bool) {
			return LoadingState.Loading;
		}

		return LoadingState.Loaded;
	}

	public getItem = (uuid: getIDType<S>): Observable<getEntityType<S> | undefined> =>
		this.selectEntity(uuid).pipe(distinctUntilChanged<getEntityType<S> | undefined>());
	public getItemValue = (uuid: getIDType<S>): Observable<getEntityType<S>['value']> =>
		this.selectEntity(uuid).pipe(
			distinctUntilChanged(),
			map((item) => item?.value as getEntityType<S>)
		);
	public getItemError = (uuid: getIDType<S>): Observable<any> =>
		this.getItem(uuid).pipe(
			distinctUntilChanged(),
			map((item) => item?.error)
		);
	public getItemIsFetching = (uuid: getIDType<S>): Observable<LoadingState> =>
		this.selectEntity(uuid).pipe(map(this.convertModelToLoadingState));
	public isCreating$ = this.select((state) => state.isCreating).pipe(
		map(this.convertBoolToLoadingState)
	);

	public isUpdating$ = this.select((state) => state.isUpdating).pipe(
		map(this.convertBoolToLoadingState)
	);
}

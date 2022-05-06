import { getEntityType, getIDType, QueryConfigOptions, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { LoadingState } from '../../types';

import { BaseMultiEntityState } from './baseMultiEntity.state';
import { BaseMultiEntityStore } from './baseMultiEntity.store';

export class BaseMultiEntityQuery<S extends BaseMultiEntityState<any, any>> extends QueryEntity<S> {
	constructor(protected store: BaseMultiEntityStore<S>, options?: QueryConfigOptions) {
		super(store as any, options);
	}

	protected convertModelToLoadingState(
		item: getEntityType<S> | undefined,
		property: keyof getEntityType<S>
	): LoadingState {
		if (item && item[property]) {
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

	public getItem = (uuid: getIDType<S>): getEntityType<S> | undefined => this.getEntity(uuid);
	public getItemValue = (uuid: getIDType<S>): getEntityType<S>['value'] | undefined =>
		this.getItem(uuid)?.value;
	public getItemError = (uuid: getIDType<S>): any => this.getItem(uuid)?.error;
	public getItemIsFetching = (uuid: getIDType<S>): boolean | undefined =>
		this.getItem(uuid)?.isFetching;
	public getItemIsCreating = (uuid: getIDType<S>): boolean | undefined =>
		this.getItem(uuid)?.isCreating;
	public getItemIsUpdating = (uuid: getIDType<S>): boolean | undefined =>
		this.getItem(uuid)?.isUpdating;
	public getItemIsRemoving = (uuid: getIDType<S>): boolean | undefined =>
		this.getItem(uuid)?.isRemoving;

	public selectItem = (uuid: getIDType<S>): Observable<getEntityType<S> | undefined> =>
		this.selectEntity(uuid).pipe(distinctUntilChanged<getEntityType<S> | undefined>());
	public selectItemValue = (uuid: getIDType<S>): Observable<getEntityType<S>['value']> =>
		this.selectEntity(uuid).pipe(
			distinctUntilChanged(),
			map((item) => item?.value as getEntityType<S>)
		);
	public selectItemError = (uuid: getIDType<S>): Observable<any> =>
		this.selectItem(uuid).pipe(
			distinctUntilChanged(),
			map((item) => item?.error)
		);
	public selectItemIsFetching = (uuid: getIDType<S>): Observable<LoadingState> =>
		this.selectEntity(uuid).pipe(
			map((item) => this.convertModelToLoadingState(item, 'isFetching'))
		);
	public selectItemIsCreating = (uuid: getIDType<S>): Observable<LoadingState> =>
		this.selectEntity(uuid).pipe(
			map((item) => this.convertModelToLoadingState(item, 'isCreating'))
		);
	public selectItemIsUpdating = (uuid: getIDType<S>): Observable<LoadingState> =>
		this.selectEntity(uuid).pipe(
			map((item) => this.convertModelToLoadingState(item, 'isUpdating'))
		);
	public selectItemIsRemoving = (uuid: getIDType<S>): Observable<LoadingState> =>
		this.selectEntity(uuid).pipe(
			map((item) => this.convertModelToLoadingState(item, 'isRemoving'))
		);

	public isCreating$ = this.select((state) => state.isCreating).pipe(
		map(this.convertBoolToLoadingState)
	);
	public isUpdating$ = this.select((state) => state.isUpdating).pipe(
		map(this.convertBoolToLoadingState)
	);
}

import { getIDType } from '@datorama/akita';
import { Observable } from 'rxjs';

import { CacheEntityQuery } from './cacheEntity.query';
import { CacheEntityStore } from './cacheEntity.store';

export class CacheEntityFacade<
	Store extends CacheEntityStore<any, any, any>,
	Service,
	Query extends CacheEntityQuery<any, any>
> {
	constructor(protected store: Store, protected service: Service, protected query: Query) {}

	public readonly isFetching$ = this.query.isFetching$;
	public readonly isCreating$ = this.query.isCreating$;
	public readonly error$ = this.query.error$;

	public selectIsFetchingEntity(entityId: getIDType<any>): Observable<boolean> {
		return this.query.selectIsFetchingEntity(entityId);
	}

	public selectIsUpdatingEntity(entityId: getIDType<any>): Observable<boolean> {
		return this.query.selectIsUpdatingEntity(entityId);
	}

	public selectIsDeletingEntity(entityId: getIDType<any>): Observable<boolean> {
		return this.query.selectIsDeletingEntity(entityId);
	}

	public selectEntityError(entityId: getIDType<any>): Observable<any> {
		return this.query.selectEntityError(entityId);
	}
}

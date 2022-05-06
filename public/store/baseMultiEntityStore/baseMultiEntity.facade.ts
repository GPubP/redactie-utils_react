import { BaseMultiEntityQuery } from './baseMultiEntity.query';
import { GetBaseMultiEntityStateByStore } from './baseMultiEntity.state';
import { BaseMultiEntityStore } from './baseMultiEntity.store';

export class BaseMultiEntityFacade<
	S extends BaseMultiEntityStore<any>,
	SE,
	Q extends BaseMultiEntityQuery<GetBaseMultiEntityStateByStore<S>>
> {
	constructor(protected store: S, protected service: SE, protected query: Q) {}

	public readonly getItem = this.query.getItem;
	public readonly getItemValue = this.query.getItemValue;
	public readonly getItemError = this.query.getItemError;
	public readonly getIsFetching = this.query.getItemIsFetching;
	public readonly getIsUpdating = this.query.getItemIsUpdating;
	public readonly getIsCreating = this.query.getItemIsCreating;
	public readonly getIsRemoving = this.query.getItemIsRemoving;

	public readonly selectItem = this.query.selectItem;
	public readonly selectItemValue = this.query.selectItemValue;
	public readonly selectItemError = this.query.selectItemError;
	public readonly selectItemIsFetching = this.query.selectItemIsFetching;
	public readonly selectItemIsUpdating = this.query.selectItemIsUpdating;
	public readonly selectItemIsCreating = this.query.selectItemIsCreating;
	public readonly selectItemIsRemoving = this.query.selectItemIsRemoving;

	public readonly isCreating$ = this.query.isCreating$;
	public readonly isUpdating$ = this.query.isUpdating$;
}

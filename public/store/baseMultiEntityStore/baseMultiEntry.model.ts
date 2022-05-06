export interface BaseMultiEntityModel<EntityType, IDType = string> {
	error: any;
	isFetching: boolean;
	isCreating: boolean;
	isRemoving: boolean;
	isUpdating: boolean;
	id: IDType;
	value: EntityType;
}

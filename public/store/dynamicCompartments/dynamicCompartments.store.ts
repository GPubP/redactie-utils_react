import { EntityState, EntityStore, guid } from '@datorama/akita';

import { DynamicCompartmentModel } from './dynamicCompartments.model';

export class DynamicCompartmentsStore<
	State extends EntityState<DynamicCompartmentModel, string> = EntityState<
		DynamicCompartmentModel,
		string
	>
> extends EntityStore<State> {
	constructor(name: string, initialState?: Partial<State>) {
		super(initialState, {
			name: `${name}-compartments-${guid()}`,
			idKey: 'name',
			resettable: true,
		});
	}
}

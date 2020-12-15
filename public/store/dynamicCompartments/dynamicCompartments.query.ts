import { EntityState, QueryEntity } from '@datorama/akita';

import { DynamicCompartmentModel } from './dynamicCompartments.model';
import { DynamicCompartmentsStore } from './dynamicCompartments.store';

export class DynamicCompartmentsQuery<
	State extends EntityState<DynamicCompartmentModel, string> = EntityState<
		DynamicCompartmentModel,
		string
	>
> extends QueryEntity<State> {
	public all$ = this.selectAll();
	public active$ = this.selectActive();

	constructor(protected store: DynamicCompartmentsStore<State>) {
		super(store);
	}
}

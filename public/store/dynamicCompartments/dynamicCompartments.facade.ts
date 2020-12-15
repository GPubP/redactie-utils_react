import {
	EntityState,
	getEntityType,
	getIDType,
	OrArray,
	UpdateEntityPredicate,
} from '@datorama/akita';
import { Observable } from 'rxjs';

import {
	DynamicCompartmentModel,
	DynamicCompartmentRegisterOptions,
} from './dynamicCompartments.model';
import { DynamicCompartmentsQuery } from './dynamicCompartments.query';
import { DynamicCompartmentsStore } from './dynamicCompartments.store';

export class DynamicCompartmentsFacade<
	State extends EntityState<DynamicCompartmentModel, string> = EntityState<
		DynamicCompartmentModel,
		string
	>
> {
	constructor(
		protected store: DynamicCompartmentsStore<State>,
		protected query: DynamicCompartmentsQuery<State>
	) {}

	public readonly all$ = this.query.all$;
	public readonly active$ = this.query.active$ as Observable<getEntityType<State>>;

	public register<CompartmentType extends getEntityType<State> = getEntityType<State>>(
		data: CompartmentType | CompartmentType[],
		options: DynamicCompartmentRegisterOptions = {}
	): void {
		const compartments = Array.isArray(data) ? data : [data];

		compartments.forEach((compartment) => {
			if (!options?.replace) {
				this.store.add(compartment);
				return;
			}
			this.store.upsert(compartment.name as OrArray<getIDType<State>>, compartment);
		});
	}

	public clearCompartments(): void {
		this.store.reset();
	}

	public setActiveByNamOrSlug(id: State['active']): void {
		const compartment = this.query.getAll().find((compartment) => compartment.slug === id);

		if (compartment) {
			this.setActive(compartment.name as State['active']);
			return;
		}

		return this.setActive(id);
	}

	public setActive(name: State['active']): void {
		this.store.setActive(name);
	}

	public setValid(name: string, isValid: boolean): void {
		this.store.update(
			(name as unknown) as UpdateEntityPredicate<getEntityType<State>>,
			{ isValid } as Partial<getEntityType<State>>
		);
	}

	public validate(values: Record<string, any>, meta: Record<string, any>): boolean {
		// Create array of booleans from compartment validation
		const validatedCompartments: boolean[] = this.query.getAll().map((compartment) => {
			if (compartment.validate) {
				const isValid = compartment.validate(values, meta);
				this.setValid(compartment.name, isValid);

				return isValid;
			}

			// Compartment is valid if no validate function is given
			return true;
		});

		// Return false if one of the compartments is invalid
		return !validatedCompartments.includes(false);
	}
}

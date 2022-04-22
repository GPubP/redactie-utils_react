import { EntityState, getEntityType } from '@datorama/akita';

import { useObservable } from '../../hooks';

import { DynamicCompartmentsFacade } from './dynamicCompartments.facade';
import {
	DynamicCompartmentModel,
	DynamicCompartmentRegisterOptions,
} from './dynamicCompartments.model';
import { DynamicCompartmentsQuery } from './dynamicCompartments.query';
import { DynamicCompartmentsStore } from './dynamicCompartments.store';
import { UseCompartments } from './dynamicCompartments.types';

const createDynamicCompartmentsStore = <
	State extends EntityState<DynamicCompartmentModel, string> = EntityState<
		DynamicCompartmentModel,
		string
	>
>(
	name: string,
	initialState?: Partial<State>
): {
	store: DynamicCompartmentsStore<State>;
	query: DynamicCompartmentsQuery<State>;
	facade: DynamicCompartmentsFacade<State>;
} => {
	const store = new DynamicCompartmentsStore<State>(name, initialState);
	const query = new DynamicCompartmentsQuery(store);
	const facade = new DynamicCompartmentsFacade(store, query);

	return {
		store,
		query,
		facade,
	};
};

const createUseCompartments =
	<
		State extends EntityState<DynamicCompartmentModel, string> = EntityState<
			DynamicCompartmentModel,
			string
		>,
		Facade extends DynamicCompartmentsFacade<State> = DynamicCompartmentsFacade<State>
	>(
		facade: Facade
	): UseCompartments<State> =>
	() => {
		const register = (
			compartments: getEntityType<State>[] | getEntityType<State>,
			options: DynamicCompartmentRegisterOptions
		): void => {
			facade.register(compartments, options);
		};
		const activate = (name: State['active']): void => facade.setActiveByNamOrSlug(name);
		const setValid = (name: string, isValid: boolean): void => facade.setValid(name, isValid);

		const compartments = useObservable(facade.all$, []);
		const active = useObservable(facade.active$);

		return [{ compartments, active }, register, activate, setValid];
	};

const createDynamicCompartmentsHooks = <
	State extends EntityState<DynamicCompartmentModel, string> = EntityState<
		DynamicCompartmentModel,
		string
	>,
	Facade extends DynamicCompartmentsFacade<State> = DynamicCompartmentsFacade<State>
>(
	facade: Facade
): [UseCompartments<State>] => {
	return [createUseCompartments<State, Facade>(facade)];
};

export default {
	createStore: createDynamicCompartmentsStore,
	createHooks: createDynamicCompartmentsHooks,
};

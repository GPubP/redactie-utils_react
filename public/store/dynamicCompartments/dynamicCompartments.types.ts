import { EntityState, getEntityType } from '@datorama/akita';

import {
	DynamicCompartmentModel,
	DynamicCompartmentRegisterOptions,
} from './dynamicCompartments.model';

export type UseCompartments<
	State extends EntityState<DynamicCompartmentModel, string> = EntityState<
		DynamicCompartmentModel,
		string
	>
> = () => [
	{
		compartments: getEntityType<State>[];
		active: getEntityType<State> | undefined;
	},
	(compartments: getEntityType<State>[], options: DynamicCompartmentRegisterOptions) => void,
	(name: State['active']) => void,
	(name: string, isValid: boolean) => void
];

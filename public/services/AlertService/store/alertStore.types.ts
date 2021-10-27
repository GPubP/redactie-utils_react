import { Id } from 'react-toastify';

import { AlertProps, AlertType, CustomOptions } from '../AlertService.types';

export interface AlertEntity {
	props: AlertProps;
	options: CustomOptions;
	type?: AlertType;
}

export interface AlertStoreState {
	[containerId: string]: AlertEntity[];
}

export enum AlertStoreActionTypes {
	Add = '@alert/add',
	Clear = '@alert/clear',
	ClearOne = '@alert/clearOne',
}

export interface AlertStoreAddAction {
	type: AlertStoreActionTypes.Add;
	payload: AlertEntity;
}

export interface AlertStoreClearAction {
	type: AlertStoreActionTypes.Clear;
	payload: Id | undefined;
}

export interface AlertStoreClearOneAction {
	type: AlertStoreActionTypes.ClearOne;
	payload: {
		containerId: Id | undefined;
		index: number;
	};
}

export type AlertStoreActions =
	| AlertStoreAddAction
	| AlertStoreClearAction
	| AlertStoreClearOneAction;

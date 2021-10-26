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
	Add = '@alert/ADD',
	Clear = '@alert/CLEAR',
}

export interface AlertStoreAddAction {
	type: AlertStoreActionTypes.Add;
	payload: AlertEntity;
}

export interface AlertStoreClearAction {
	type: AlertStoreActionTypes.Clear;
	payload: Id;
}

export type AlertStoreActions = AlertStoreAddAction | AlertStoreClearAction;

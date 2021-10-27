import { omit, remove } from 'ramda';
import { Id } from 'react-toastify';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

import { AlertProps, AlertType, CustomOptions } from '..';

import {
	AlertEntity,
	AlertStoreActions,
	AlertStoreActionTypes,
	AlertStoreAddAction,
	AlertStoreClearAction,
	AlertStoreClearOneAction,
	AlertStoreState,
} from './alertStore.types';

class AlertStore {
	private state: BehaviorSubject<AlertStoreState> = new BehaviorSubject({});

	public selectById(containerId: Id): Observable<AlertEntity[]> {
		return this.state.pipe(
			pluck(String(containerId)),
			filter((alerts) => !!alerts && alerts.length > 0)
		);
	}

	public dispatch(action: AlertStoreActions): void {
		const oldState = this.state.getValue();
		const newState = this.reducer(oldState, action);

		this.state.next(newState);
	}

	public addAlert(props: AlertProps, options: CustomOptions, type?: AlertType): void {
		this.dispatch({ type: AlertStoreActionTypes.Add, payload: { props, options, type } });
	}

	public clearAlerts(containerId: Id | undefined): void {
		this.dispatch({ type: AlertStoreActionTypes.Clear, payload: containerId });
	}

	public clearAlert(containerId: Id | undefined, index: number): void {
		this.dispatch({ type: AlertStoreActionTypes.ClearOne, payload: { containerId, index } });
	}

	private reducer(state: AlertStoreState, action: AlertStoreActions): AlertStoreState {
		switch (action.type) {
			case AlertStoreActionTypes.Add: {
				const { payload } = action as AlertStoreAddAction;
				const { containerId } = payload.options;

				if (!containerId) {
					return state;
				}

				const alertsState = state[containerId] ?? [];
				const alertIndex = alertsState.length;
				const { options } = payload;

				const onClose = (): void => {
					if (options.onClose) {
						options.onClose({});
					}

					this.clearAlert(containerId, alertIndex);
				};
				const newOptions = { ...options, onClose };
				const newAlert = { ...payload, options: newOptions };

				return {
					...state,
					[containerId]: alertsState.concat(newAlert),
				};
			}
			case AlertStoreActionTypes.Clear: {
				const { payload: containerId } = action as AlertStoreClearAction;

				if (!containerId) {
					return state;
				}

				return omit([String(containerId)], state);
			}
			case AlertStoreActionTypes.ClearOne: {
				const { payload } = action as AlertStoreClearOneAction;
				const { containerId, index } = payload;

				if (!containerId) {
					return state;
				}

				const alertsState = state[containerId] ?? [];

				return {
					...state,
					[containerId]: remove(index, 1, alertsState),
				};
			}

			default:
				return state;
		}
	}
}

export const alertStore = new AlertStore();

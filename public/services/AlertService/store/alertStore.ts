import { omit } from 'ramda';
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

	private reducer(state: AlertStoreState, action: AlertStoreActions): AlertStoreState {
		switch (action.type) {
			case AlertStoreActionTypes.Add: {
				const { payload } = action as AlertStoreAddAction;
				const containerId = payload.options.containerId;

				if (!containerId) {
					return state;
				}

				return {
					...state,
					[containerId]: (state[containerId] ?? []).concat(payload),
				};
			}
			case AlertStoreActionTypes.Clear: {
				const { payload: containerId } = action as AlertStoreClearAction;

				if (!containerId) {
					return state;
				}

				return omit([String(containerId)], state);
			}

			default:
				return state;
		}
	}
}

export const alertStore = new AlertStore();

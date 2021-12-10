import { Alert } from '@acpaas-ui/react-components';
import React, { ReactElement, ReactText } from 'react';
import { toast, ToastContentProps } from 'react-toastify';

import { AlertProps, AlertType, AlertWithOnCloseProps, CustomOptions } from './AlertService.types';
import { alertStore } from './store/alertStore';

class AlertService {
	public info(props: AlertProps, options?: CustomOptions): ReactText | void {
		if (options?.containerId) {
			return alertStore.addAlert(props, options);
		}
		return this.showAlert(props, options);
	}
	public success(props: AlertProps, options?: CustomOptions): ReactText | void {
		if (options?.containerId) {
			return alertStore.addAlert(props, options, AlertType.Success);
		}
		return this.showAlert(props, options, AlertType.Success);
	}
	public warning(props: AlertProps, options?: CustomOptions): ReactText | void {
		if (options?.containerId) {
			return alertStore.addAlert(props, options, AlertType.Warning);
		}
		return this.showAlert(props, options, AlertType.Warning);
	}
	public danger(props: AlertProps, options?: CustomOptions): ReactText | void {
		if (options?.containerId) {
			return alertStore.addAlert(props, options, AlertType.Danger);
		}
		return this.showAlert(props, options, AlertType.Danger);
	}
	public invalidForm(options?: CustomOptions): ReactText | void {
		const alert = {
			title: 'Opgelet',
			message: (
				<p>
					Er staan fouten in het formulier op deze pagina of je bent iets vergeten
					invullen. Gelieve de gemarkeerde velden na te kijken.
				</p>
			),
		};

		return this.showAlert(alert, { scrollToTop: true, ...options }, AlertType.Danger);
	}

	public clearWaitingQueue = toast.clearWaitingQueue;
	public configure = toast.configure;
	public dismiss = toast.dismiss;
	public done = toast.done;
	public isActive = toast.isActive;
	public update = toast.update;

	public showAlert(
		props: AlertProps,
		{ autoDismiss = true, scrollToTop = false, ...options }: CustomOptions = {},
		type?: AlertType
	): ReactText | void {
		const alertProps = { ...props, onClose: options?.onClose, type };
		if (autoDismiss) {
			toast.dismiss();
		}

		if (scrollToTop) {
			window.scrollTo(0, 0);
		}

		return toast((toastProps) => this.renderAlert(alertProps, toastProps), options);
	}

	private renderAlert(
		{ closable = true, message, onClose, ...rest }: AlertWithOnCloseProps,
		{ closeToast }: ToastContentProps
	): ReactElement {
		const handleClose = (): void => {
			// We have to trigger the onClose event manually because the acpaas Alert component
			// calls e.stopPropagation() which prevents react-toastify's event manager to handle
			// the event properly
			if (onClose) {
				onClose({});
			}
			if (closeToast) {
				closeToast();
			}
		};

		return (
			<Alert {...rest} closable={closable} onClose={handleClose}>
				{message}
			</Alert>
		);
	}
}

const alertService = new AlertService();

export default alertService;

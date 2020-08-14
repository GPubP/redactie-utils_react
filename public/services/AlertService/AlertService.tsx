import { Alert } from '@acpaas-ui/react-components';
import React, { ReactElement, ReactText } from 'react';
import { toast, ToastContentProps, ToastOptions } from 'react-toastify';

import { AlertProps, AlertType, AlertWithOnCloseProps } from './AlertService.types';

class AlertService {
	public info = this.showAlert;
	public success(props: AlertProps, options?: ToastOptions): ReactText {
		return this.showAlert(props, options, AlertType.Success);
	}
	public warning(props: AlertProps, options?: ToastOptions): ReactText {
		return this.showAlert(props, options, AlertType.Warning);
	}
	public danger(props: AlertProps, options?: ToastOptions): ReactText {
		return this.showAlert(props, options, AlertType.Danger);
	}

	public clearWaitingQueue = toast.clearWaitingQueue;
	public configure = toast.configure;
	public dismiss = toast.dismiss;
	public done = toast.done;
	public isActive = toast.isActive;
	public update = toast.update;

	private showAlert(props: AlertProps, options?: ToastOptions, type?: AlertType): ReactText {
		const alertProps = { ...props, onClose: options?.onClose, type };
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

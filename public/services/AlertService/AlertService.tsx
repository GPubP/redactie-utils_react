import { Alert } from '@acpaas-ui/react-components';
import React, { ReactElement, ReactText } from 'react';
import { toast, ToastContentProps, ToastOptions } from 'react-toastify';

import { AlertProps, AlertType } from './AlertService.types';

const renderAlert = (
	{ message, ...rest }: AlertProps,
	{ closeToast }: ToastContentProps
): ReactElement => (
	<Alert {...rest} onClose={closeToast}>
		{message}
	</Alert>
);

const showAlert = (props: AlertProps, options?: ToastOptions, type?: AlertType): ReactText => {
	const alertProps = { ...props, type };
	return toast((toastProps) => renderAlert(alertProps, toastProps), options);
};

const alertService = (props: AlertProps, options?: ToastOptions): ReactText =>
	showAlert(props, options);

alertService.info = showAlert;
alertService.success = (props: AlertProps, options?: ToastOptions) =>
	showAlert(props, options, AlertType.Success);
alertService.warning = (props: AlertProps, options?: ToastOptions) =>
	showAlert(props, options, AlertType.Warning);
alertService.danger = (props: AlertProps, options?: ToastOptions) =>
	showAlert(props, options, AlertType.Danger);

alertService.clearWaitingQueue = toast.clearWaitingQueue;
alertService.configure = toast.configure;
alertService.dismiss = toast.dismiss;
alertService.done = toast.done;
alertService.isActive = toast.isActive;
alertService.update = toast.update;

export default alertService;

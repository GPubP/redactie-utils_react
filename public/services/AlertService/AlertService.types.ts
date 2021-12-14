import { ReactNode } from 'react';
import { ToastOptions } from 'react-toastify';

export enum AlertType {
	Success = 'success',
	Warning = 'warning',
	Danger = 'danger',
}

export interface CustomOptions extends ToastOptions {
	autoDismiss?: boolean;
	scrollToTop?: boolean;
}

export interface AlertProps {
	className?: string;
	closable?: boolean;
	ariaLabelClose?: string;
	message: ReactNode;
	title?: string;
}

export interface AlertWithOnCloseProps extends AlertProps {
	onClose?: <T = {}>(props: T) => void;
}

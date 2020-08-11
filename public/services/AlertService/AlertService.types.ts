import { ReactNode } from 'react';

export enum AlertType {
	Success = 'success',
	Warning = 'warning',
	Danger = 'danger',
}

export interface AlertProps {
	className?: string;
	closable?: boolean;
	ariaLabelClose?: string;
	message: ReactNode;
	title?: string;
}

import { Location } from 'history';
import { ReactNode } from 'react';

export interface LeavePromptProps {
	body?: ReactNode;
	cancelText?: string;
	confirmText?: string;
	deleteText?: string;
	title?: string;
	when: boolean;
	navigate?: (path: string) => void;
	onCancel?: () => void;
	onConfirm?: () => void;
	onDelete?: () => void;
	shouldBlockNavigationOnConfirm?: (location: Location) => boolean;
}

export interface LeavePromptModalProps {
	body: ReactNode;
	node?: Element;
	onClose?: () => void;
	show: boolean;
	title: string;
}

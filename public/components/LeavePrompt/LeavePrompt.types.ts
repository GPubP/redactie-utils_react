import { Location } from 'history';
import { ReactNode } from 'react';

export interface LeavePromptProps {
	allowedPaths?: string[];
	body?: ReactNode;
	cancelText?: string;
	confirmText?: string;
	deleteText?: string;
	navigate?: (path: string) => void;
	onCancel?: () => void;
	onConfirm?: () => void;
	onDelete?: () => void;
	shouldBlockNavigation?: (location: Location) => boolean;
	title?: string;
	when: boolean;
}

export interface LeavePromptModalProps {
	body: ReactNode;
	node?: Element;
	onClose?: () => void;
	show: boolean;
	title: string;
}

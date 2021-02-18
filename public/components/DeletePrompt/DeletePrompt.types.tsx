import { ReactNode } from 'react';

export interface DeletePromptProps {
	show: boolean;
	body?: ReactNode;
	cancelText?: string;
	confirmText?: string;
	title?: string;
	onCancel?: () => void;
	onConfirm?: () => void;
}

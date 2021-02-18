import { ReactNode } from 'react';

export interface DeletePromptProps {
	body?: ReactNode;
	cancelText?: string;
	confirmText?: string;
	isDeleting?: boolean;
	show: boolean;
	title?: string;
	onCancel?: () => void;
	onConfirm?: () => void;
}

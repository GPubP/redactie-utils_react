export interface ContextHeaderBadge {
	type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	name: string;
}

export interface ContextHeaderTab {
	name: string;
	target: string;
	active: boolean;
	disabled: boolean;
}

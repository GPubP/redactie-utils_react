export interface CheckboxListProps {
	name: string;
	label: string;
	description?: string;
	required?: boolean;
	disabled?: boolean;
	value?: string | string[];
	options: {
		label: string;
		value: string;
		key: string;
	}[];
}

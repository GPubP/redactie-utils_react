export interface InfoTooltipProps {
	icon: string;
	placement: string;
	tooltipClassName?: string;
	triggerClassName?: string;
	type: string;
	onVisibilityChange?: (visible: boolean) => void;
}

export interface InfoTooltipProps {
	icon: string;
	data: {
		meta: {
			label: string;
			slug: Record<string, string>;
			site: string;
			description?: string;
			historySummary?: {
				published: boolean;
			};
			lastEditor?: {
				firstname?: string;
				lastname?: string;
			};
			status: string;
			created?: string;
			lastModified?: string;
			firstPublished?: string;
		};
	};
}

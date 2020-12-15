export interface DynamicCompartmentRegisterOptions {
	replace?: true;
}

export interface DynamicCompartmentModel {
	/**
	 * Compartment name
	 */
	name: string;
	/**
	 * Compartments slug
	 */
	slug?: string;
	/**
	 * Indicates if the compartment is valid
	 */
	isValid?: boolean;
	/**
	 * Validation function
	 */
	validate?: <Values extends Record<string, any> = {}, Meta = any>(
		values: Values,
		meta: Meta
	) => boolean;
}

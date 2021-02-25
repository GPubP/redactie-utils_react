import { QueryParamConfig, withDefault } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS_CONFIG, QUERY_PARAMS_MAP } from './useAPIQueryParams.const';
import { APIQueryParamsConfig, QueryParamsMap } from './useAPIQueryParams.types';

export const generateAPIQueryParams = <Config extends APIQueryParamsConfig>(
	config = DEFAULT_API_QUERY_PARAMS_CONFIG as Config
): { [P in keyof Config]: QueryParamsMap[Config[P]['type']] } => {
	return Object.keys(config).reduce((acc, key) => {
		const { defaultValue, type } = config[key];
		const paramType = QUERY_PARAMS_MAP[type];

		if (!paramType) {
			return acc;
		}

		const value = withDefault(paramType as QueryParamConfig<unknown>, defaultValue);

		if (value === undefined) {
			return acc;
		}

		return {
			...acc,
			[key]: value,
		};
	}, {} as { [P in keyof Config]: QueryParamsMap[Config[P]['type']] });
};

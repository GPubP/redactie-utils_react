import { QueryParamConfig, withDefault } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS_CONFIG, QUERY_PARAMS_MAP } from './useAPIQueryParams.const';
import { APIQueryParamsConfig, ConfigMap } from './useAPIQueryParams.types';

export const generateAPIQueryParams = (
	config: APIQueryParamsConfig = DEFAULT_API_QUERY_PARAMS_CONFIG
): ConfigMap<APIQueryParamsConfig, false> => {
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
	}, {} as ConfigMap<APIQueryParamsConfig, false>);
};

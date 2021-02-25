import { DecodedValueMap, SetQuery, useQueryParams } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS_CONFIG } from './useAPIQueryParams.const';
import { generateAPIQueryParams } from './useAPIQueryParams.helpers';
import { APIQueryParamsConfig, QueryParamsMap } from './useAPIQueryParams.types';

const useAPIQueryParams = <Config extends APIQueryParamsConfig>(
	config = {} as Config,
	extendDefaultConfig = true
): [
	DecodedValueMap<{ [P in keyof Config]: QueryParamsMap[Config[P]['type']] }>,
	SetQuery<{ [P in keyof Config]: QueryParamsMap[Config[P]['type']] }>
] => {
	return useQueryParams<{ [P in keyof Config]: QueryParamsMap[Config[P]['type']] }>(
		generateAPIQueryParams<Config>({
			...(extendDefaultConfig ? DEFAULT_API_QUERY_PARAMS_CONFIG : null),
			...config,
		})
	);
};

export default useAPIQueryParams;

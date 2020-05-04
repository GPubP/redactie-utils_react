import { DecodedValueMap, QueryParamConfigMap, SetQuery, useQueryParams } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS_CONFIG } from './useAPIQueryParams.const';
import { generateAPIQueryParams } from './useAPIQueryParams.helpers';
import { APIQueryParamsConfig } from './useAPIQueryParams.types';

const useAPIQueryParams = (
	config: APIQueryParamsConfig = {},
	extendDefaultConfig = true
): [DecodedValueMap<QueryParamConfigMap>, SetQuery<QueryParamConfigMap>] => {
	return useQueryParams(
		generateAPIQueryParams({
			...(extendDefaultConfig ? DEFAULT_API_QUERY_PARAMS_CONFIG : null),
			...config,
		})
	);
};

export default useAPIQueryParams;

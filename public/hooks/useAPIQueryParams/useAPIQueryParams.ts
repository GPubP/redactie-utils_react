import { DecodedValueMap, QueryParamConfigMap, SetQuery, useQueryParams } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS_CONFIG } from './useAPIQueryParams.const';
import { generateAPIQueryParams } from './useAPIQueryParams.helpers';
import { APIQueryParamsConfig } from './useAPIQueryParams.types';

const useAPIQueryParams = (
	defaults: APIQueryParamsConfig = DEFAULT_API_QUERY_PARAMS_CONFIG
): [DecodedValueMap<QueryParamConfigMap>, SetQuery<QueryParamConfigMap>] => {
	const [query, setQuery] = useQueryParams(generateAPIQueryParams(defaults));

	return [query, setQuery];
};

export default useAPIQueryParams;

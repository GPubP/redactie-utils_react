import { DecodedValueMap, SetQuery, useQueryParams, QueryParamConfigMap } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS } from './useAPIQueryParams.const';

const useAPIQueryParams = (
	defaults: QueryParamConfigMap = DEFAULT_API_QUERY_PARAMS
): [DecodedValueMap<QueryParamConfigMap>, SetQuery<QueryParamConfigMap>] => {
	const [query, setQuery] = useQueryParams(defaults);

	return [query, setQuery];
};

export default useAPIQueryParams;

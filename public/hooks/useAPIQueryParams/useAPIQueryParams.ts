import { useQueryParams } from 'use-query-params';

import { DEFAULT_API_QUERY_PARAMS_CONFIG } from './useAPIQueryParams.const';
import { generateAPIQueryParams } from './useAPIQueryParams.helpers';
import { APIQueryParamsConfig, UseAPIQUeryParamsReturnValue } from './useAPIQueryParams.types';

function useAPIQueryParams<
	C extends APIQueryParamsConfig = APIQueryParamsConfig,
	E extends boolean = true
>(
	config?: C,
	extendDefaultConfig?: E
): E extends true ? UseAPIQUeryParamsReturnValue<C, true> : UseAPIQUeryParamsReturnValue<C, false>;
function useAPIQueryParams(
	config: APIQueryParamsConfig,
	extendDefaultConfig = true
):
	| UseAPIQUeryParamsReturnValue<APIQueryParamsConfig, true>
	| UseAPIQUeryParamsReturnValue<APIQueryParamsConfig, false> {
	return useQueryParams(
		generateAPIQueryParams({
			...(extendDefaultConfig ? DEFAULT_API_QUERY_PARAMS_CONFIG : null),
			...config,
		})
	);
}

export default useAPIQueryParams;

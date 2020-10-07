import * as H from 'history';
import { ParsedQuery, parseUrl, stringifyUrl } from 'query-string';
import { useContext } from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import { TenantContext } from '../../context';

import { NavigateFn, NavigateGenerateFn, NavigateParams, NavigateQuery } from './useNavigate.types';

const useNavigate = (
	routePrefix?: string
): { generatePath: NavigateGenerateFn; navigate: NavigateFn } => {
	const { tenantId } = useContext(TenantContext);
	const history = useHistory();
	const basePath = routePrefix ? `/${tenantId}/${routePrefix}` : `/${tenantId}`;

	const combineUrlAndQuery = (url: string, query?: URLSearchParams | NavigateQuery): string => {
		const { query: originalQuery, url: originalUrl } = parseUrl(url);
		const newQueryObject: ParsedQuery<string | number | boolean | undefined> = {
			...originalQuery,
			...(query instanceof URLSearchParams ? Object.fromEntries(query) : query),
		};

		return stringifyUrl({ url: originalUrl, query: newQueryObject as ParsedQuery<string> });
	};

	const generate = (
		path: string,
		params?: NavigateParams,
		query?: URLSearchParams | NavigateQuery
	): string => generatePath(combineUrlAndQuery(`${basePath}${path}`, query), params);
	const navigate = (
		path: string,
		params?: NavigateParams,
		state?: H.LocationState,
		query?: URLSearchParams
	): void => history.push(generate(path, params, query), state);

	return {
		generatePath: generate,
		navigate,
	};
};

export default useNavigate;

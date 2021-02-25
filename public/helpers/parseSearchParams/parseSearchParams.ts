import { stringify } from 'query-string';

import { SearchParams } from '../../types';

export const parseSearchParams = (searchParams: SearchParams): string => {
	return stringify(searchParams, { arrayFormat: 'comma', skipNull: true, skipEmptyString: true });
};

import { stringify } from 'query-string';

import { OrderBy, SearchParams } from './types/index.types';

export const parseOrderByToString = (orderBy: OrderBy): string => {
	if (!orderBy || typeof orderBy.key !== 'string' || typeof orderBy.order !== 'string') {
		throw new Error(
			`orderBy.order and orderBy.key are required fields and must be of type string: ${JSON.stringify(
				orderBy
			)}`
		);
	}
	return orderBy.order === 'asc' ? orderBy.key : `-${orderBy.key}`;
};

export const parseStringToOrderBy = (orderByString = ''): OrderBy => {
	if (typeof orderByString !== 'string') {
		throw new Error('orderByString must be of type string');
	}
	const keys = orderByString.replace('-', '').split('.');
	const isDesc = orderByString.includes('-');
	return {
		key: keys.length > 1 ? keys[1] : keys[0],
		order: isDesc ? 'desc' : 'asc',
	};
};

export const parseSearchParams = (searchParams: SearchParams): string => {
	return stringify(searchParams, { arrayFormat: 'comma', skipNull: true, skipEmptyString: true });
};

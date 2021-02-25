import { OrderBy } from '../../types';

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

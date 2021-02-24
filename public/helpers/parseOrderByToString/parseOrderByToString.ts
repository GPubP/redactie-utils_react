import { OrderBy } from '../../types';

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

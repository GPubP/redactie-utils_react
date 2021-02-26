import { OrderBy } from '../../types';

export const parseOrderByToObj = (orderBy: OrderBy): { sort: string; direction: number } => {
	if (!orderBy || typeof orderBy.key !== 'string' || typeof orderBy.order !== 'string') {
		throw new Error(
			`orderBy.order and orderBy.key are required fields and must be of type string: ${JSON.stringify(
				orderBy
			)}`
		);
	}
	return { sort: orderBy.key, direction: orderBy.order === 'asc' ? 1 : -1 };
};

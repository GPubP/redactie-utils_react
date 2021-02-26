import { OrderBy } from '../../types';

export const parseObjToOrderBy = (obj: { sort: string; direction: number }): OrderBy => {
	if (!obj || typeof obj.sort !== 'string' || typeof obj.direction !== 'number') {
		throw new Error(
			`sort and direction are required fields and must have the correct type: ${JSON.stringify(
				obj
			)}`
		);
	}
	return { key: obj.sort, order: obj.direction === 1 ? 'asc' : 'desc' };
};

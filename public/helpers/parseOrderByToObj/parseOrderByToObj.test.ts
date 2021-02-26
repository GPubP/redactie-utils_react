import { OrderBy } from '../../types';

import { parseOrderByToObj } from './parseOrderByToObj';

describe('Helpers: parseOrderByToObj', () => {
	it('should parse an order by to an object', () => {
		const orderBy: OrderBy = {
			order: 'asc',
			key: 'test',
		};
		const result = parseOrderByToObj(orderBy);
		expect(result).toEqual({ sort: 'test', direction: 1 });
	});

	it('should throw an error when orderBy was not set', () => {
		expect(() => parseOrderByToObj(undefined as any)).toThrow();
	});

	it('should return an error when the key prop is not a string', () => {
		expect(() => parseOrderByToObj({ key: {}, order: 'asc' } as any)).toThrow();
	});

	it('should return an error when the order prop is not a string', () => {
		expect(() => parseOrderByToObj({ key: 'test', order: {} } as any)).toThrow();
	});
});

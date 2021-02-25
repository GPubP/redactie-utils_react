import { OrderBy } from '../../types';

import { parseOrderByToString } from './parseOrderByToString';

describe('Helpers: parseOrderByToString', () => {
	it('should parse a order by (asc) object to a string', () => {
		const orderBy: OrderBy = {
			order: 'asc',
			key: 'test',
		};
		const result = parseOrderByToString(orderBy);
		expect(result).toBe(orderBy.key);
	});

	it('should parse a order by (desc) object to a string', () => {
		const orderBy: OrderBy = {
			order: 'desc',
			key: 'test',
		};
		const result = parseOrderByToString(orderBy);
		expect(result).toBe(`-${orderBy.key}`);
	});

	it('should throw an error when orderBy was not set', () => {
		expect(() => parseOrderByToString(undefined as any)).toThrow();
	});

	it('should return an error when the key prop is not a string', () => {
		expect(() => parseOrderByToString({ key: {}, order: 'asc' } as any)).toThrow();
	});

	it('should return an error when the order prop is not a string', () => {
		expect(() => parseOrderByToString({ key: 'test', order: {} } as any)).toThrow();
	});
});

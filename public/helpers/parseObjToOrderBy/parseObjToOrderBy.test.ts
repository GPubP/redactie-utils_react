import { parseObjToOrderBy } from './parseObjToOrderBy';

describe('Helpers: parseObjToOrderBy', () => {
	it('should parse an object to an order by', () => {
		const obj = {
			sort: 'test',
			direction: -1,
		};
		const result = parseObjToOrderBy(obj);
		expect(result).toEqual({ key: 'test', order: 'desc' });
	});

	it('should throw an error when orderBy was not set', () => {
		expect(() => parseObjToOrderBy(undefined as any)).toThrow();
	});

	it('should return an error when the key prop is not a string', () => {
		expect(() => parseObjToOrderBy({ key: {}, order: 'asc' } as any)).toThrow();
	});

	it('should return an error when the direction prop is not a number', () => {
		expect(() => parseObjToOrderBy({ key: 'test', order: '1' } as any)).toThrow();
	});
});

import { OrderBy } from './types/index.types';
import { parseOrderByToString, parseSearchParams, parseStringToOrderBy } from './utils.helpers';

describe('Utils', () => {
	describe('parseOrderByToString', () => {
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

	describe('parseStringToOrderBy', () => {
		it('should return an empty key when an emty string was given', () => {
			const result = parseStringToOrderBy('');
			expect(result).toEqual({
				key: '',
				order: 'asc',
			});
		});

		it('should return a desc order when the string includes a (-)', () => {
			const result = parseStringToOrderBy('-test');
			expect(result).toEqual({
				key: 'test',
				order: 'desc',
			});
		});

		it('should return a asc order when the string does not include a (-)', () => {
			const result = parseStringToOrderBy('test');
			expect(result).toEqual({
				key: 'test',
				order: 'asc',
			});
		});

		it('should split on .', () => {
			const result = parseStringToOrderBy('-meta.test');
			expect(result).toEqual({
				key: 'test',
				order: 'desc',
			});
		});

		it('should throw an error when the given value is not a string', () => {
			expect(() => parseStringToOrderBy({} as any)).toThrow();
		});
	});

	describe('parseSearchParams', () => {
		it('should parse searchParams to a URLSearchParams object', () => {
			const searchParams = {
				page: 1,
				pagesize: 10,
				arr: [1, 2, 3],
				skip: null,
				skipEmptyString: '',
			};
			const result = parseSearchParams(searchParams);
			expect(result).toBe('arr=1,2,3&page=1&pagesize=10');
		});
	});
});

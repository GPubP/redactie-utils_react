import { parseStringToOrderBy } from './parseStringToOrderBy';

describe('Helpers: parseStringToOrderBy', () => {
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

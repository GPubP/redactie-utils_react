import { parseSearchParams } from './parseSearchParams';

describe('Helpers: parseSearchParams', () => {
	it('should parse searchParams to a URLSearchParams object', () => {
		const searchParams = {
			page: 1,
			pagesize: 10,
			arr: [1, 2, 3],
			skipNull: null,
			skipEmptyString: '',
		};
		const result = parseSearchParams(searchParams);
		expect(result).toBe('arr=1,2,3&page=1&pagesize=10');
	});
});

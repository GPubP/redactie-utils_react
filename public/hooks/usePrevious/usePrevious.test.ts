import { renderHook, RenderHookResult } from '@testing-library/react-hooks';

import usePrevious from './usePrevious';
import { CompareFn } from './usePrevious.types';

describe('usePrevious', () => {
	it('should be defined', () => {
		expect(usePrevious).toBeDefined();
	});

	function renderUsePrevious<T>(
		initialValue?: T,
		compareFunction?: CompareFn<T>
	): RenderHookResult<any, any> {
		return renderHook(({ val, cmp }) => usePrevious(val as T, cmp), {
			initialProps: {
				val: initialValue || 0,
				cmp: compareFunction,
			},
		});
	}

	it('should return undefined on init', () => {
		expect(renderUsePrevious().result.current).toBeUndefined();
	});

	it('should update previous value only after render with different value', () => {
		const hook = renderUsePrevious();

		expect(hook.result.current).toBeUndefined();
		hook.rerender({ val: 1 });
		expect(hook.result.current).toBe(0);

		hook.rerender({ val: 2 });
		expect(hook.result.current).toBe(1);

		hook.rerender({ val: 3 });
		expect(hook.result.current).toBe(2);

		hook.rerender({ val: 4 });
		expect(hook.result.current).toBe(3);

		hook.rerender({ val: 5 });
		expect(hook.result.current).toBe(4);
	});

	it('should work fine with `undefined` values', () => {
		const hook = renderUsePrevious();

		expect(hook.result.current).toBeUndefined();

		hook.rerender({ val: 1 });
		expect(hook.result.current).toBe(0);

		hook.rerender({ val: undefined });
		expect(hook.result.current).toBe(1);

		hook.rerender({ val: 2 });
		expect(hook.result.current).toBeUndefined();
	});

	it('should receive a predicate as a second parameter that will compare prev and current', () => {
		const obj1 = { label: 'John', value: 'john' };
		const obj2 = { label: 'Jonny', value: 'john' };
		const obj3 = { label: 'Kate', value: 'kate' };
		type Obj = { label: string; value: string };
		const predicate = (a: Obj | undefined, b: Obj): boolean => (a ? a.value !== b.value : true);

		const hook = renderUsePrevious(obj1, predicate);

		expect(hook.result.current).toBeUndefined();

		hook.rerender({ val: obj2, cmp: predicate });

		expect(hook.result.current).toBeUndefined();

		hook.rerender({ val: obj3, cmp: predicate });

		expect(hook.result.current).toBe(obj1);
	});
});

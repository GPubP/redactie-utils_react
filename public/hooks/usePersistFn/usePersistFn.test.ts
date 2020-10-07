import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';

import usePersistFn from './usePersistFn';

const TestHooks = (): { addCount: () => void; persistFn: () => number } => {
	const [count, setCount] = useState(0);

	const addCount = (): void => {
		setCount((c) => c + 1);
	};
	const persistFn = usePersistFn(() => count);

	return { addCount, persistFn };
};

describe('usePersistFn', () => {
	it('should be defined', () => {
		expect(usePersistFn).toBeDefined();
	});

	it('usePersistFn should work', () => {
		const hook = renderHook(() => TestHooks());
		const currentFn = hook.result.current.persistFn;
		expect(hook.result.current.persistFn()).toEqual(0);

		act(() => {
			hook.result.current.addCount();
		});

		expect(currentFn).toEqual(hook.result.current.persistFn);
		expect(hook.result.current.persistFn()).toEqual(1);
	});
});

import { useCallback, useRef } from 'react';

import { HandlerFn } from '../../types';

/**
 * Reference https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 *
 * In some rare cases you might need to memoize a callback with useCallback but the memoization doesn’t work very well because the inner function has to be re-created too often.
 * For super-complex subcomponents, re-rendering can impact performance. With usePersistFn, you can guarantee that the function reference will never change.
 */
function usePersistFn<T extends HandlerFn>(handlerFn: T): T {
	const ref = useRef<T>(handlerFn);

	// since useRef accepts an initial-value only, this is needed to make sure
	ref.current = handlerFn;

	const persistFn = useCallback(((...args) => ref.current(...args)) as T, [ref]);

	return persistFn;
}

export default usePersistFn;

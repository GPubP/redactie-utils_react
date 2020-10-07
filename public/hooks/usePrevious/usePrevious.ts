import { useRef } from 'react';

import { CompareFn } from './usePrevious.types';

/**
 * A Hook to store the previous value
 */
const usePrevious = <T>(state: T, compareFn?: CompareFn<T>): T | undefined => {
	const prevRef = useRef<T>();
	const curRef = useRef<T>();

	const needUpdate = typeof compareFn === 'function' ? compareFn(curRef.current, state) : true;
	if (needUpdate) {
		prevRef.current = curRef.current;
		curRef.current = state;
	}

	return prevRef.current;
};

export default usePrevious;

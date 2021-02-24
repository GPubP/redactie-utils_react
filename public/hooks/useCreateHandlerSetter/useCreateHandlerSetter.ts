import { MutableRefObject, useCallback, useRef } from 'react';

import { HandlerFn } from '../../types';

/**
 * Returns an array where the first item is the [ref](https://reactjs.org/docs/hooks-reference.html#useref) to a
 * callback function and the second one is setter for that function.
 *
 * Although it function looks quite similar to the [useState](https://reactjs.org/docs/hooks-reference.html#usestate),
 * hook, in this case the setter just makes sure the given callback is indeed a new function.
 *
 * NOTE!: Setting a callback ref does not imply your component to re-render.
 *
 * `useCreateHandlerSetter` is useful when abstracting other hooks to possibly implement handlers setters.
 */
const useCreateHandlerSetter = (
	handlerFn?: HandlerFn
): [MutableRefObject<HandlerFn | undefined>, HandlerFn] => {
	const handlerRef = useRef(handlerFn);

	// since useRef accepts an initial-value only, this is needed to make sure
	handlerRef.current = handlerFn;

	const setHandler = useCallback((nextHandlerFn: HandlerFn) => {
		if (typeof nextHandlerFn !== 'function') {
			throw new Error(
				"the argument supplied to the 'setHandler' function should be of type function"
			);
		}

		handlerRef.current = nextHandlerFn;
	}, []);

	return [handlerRef, setHandler];
};

export default useCreateHandlerSetter;

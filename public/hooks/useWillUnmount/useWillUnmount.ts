import { useEffect } from 'react';

import { HandlerFn } from '../../types';
import { useCreateHandlerSetter } from '../useCreateHandlerSetter';

/**
 * Returns a callback setter for a callback to be performed when the component will unmount.
 */
const useWillUnmount = (handler?: HandlerFn): HandlerFn => {
	const [onUnmountHandler, setOnUnmount] = useCreateHandlerSetter(handler);

	useEffect(
		() => () => {
			if (onUnmountHandler.current) {
				onUnmountHandler.current();
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return setOnUnmount;
};

export default useWillUnmount;

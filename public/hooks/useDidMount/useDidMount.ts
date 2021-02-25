import { useEffect } from 'react';

import { HandlerFn } from '../../types';
import { useCreateHandlerSetter } from '../useCreateHandlerSetter';

/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
const useDidMount = (handler?: HandlerFn): HandlerFn => {
	const [onMountHandler, setOnMountHandler] = useCreateHandlerSetter(handler);

	useEffect(() => {
		if (onMountHandler.current) {
			onMountHandler.current();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return setOnMountHandler;
};

export default useDidMount;

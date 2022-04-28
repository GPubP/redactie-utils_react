import { useCallback, useEffect } from 'react';

export const useClickOutside = (
	ref: Element,
	handler: (event: MouseEvent | TouchEvent) => void,
	whitelist: Element[] = []
): void => {
	const memoizedHandler = useCallback(handler, []);

	useEffect(() => {
		const clickOutsideHandler = (event: MouseEvent | TouchEvent): void => {
			if (
				ref !== event.target &&
				!ref.contains(event.target as Node) &&
				!whitelist.some(
					(element: Element) =>
						element === event.target || element?.contains(event.target as Node)
				)
			) {
				memoizedHandler(event);
			}
		};

		if (ref) {
			// Add event listeners
			document.addEventListener('mousedown', clickOutsideHandler);
			document.addEventListener('touchstart', clickOutsideHandler);

			// Remove event listeners on cleanup
			return () => {
				document.removeEventListener('mousedown', clickOutsideHandler);
				document.removeEventListener('touchstart', clickOutsideHandler);
			};
		}
	}, [memoizedHandler, ref, whitelist]);
};

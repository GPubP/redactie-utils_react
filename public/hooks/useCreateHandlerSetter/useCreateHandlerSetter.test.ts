import { act, renderHook } from '@testing-library/react-hooks';

import useCreateHandlerSetter from './useCreateHandlerSetter';

describe('createHandlerSetter', () => {
	it('should be a function', () => {
		expect(useCreateHandlerSetter).toBeInstanceOf(Function);
	});

	it('should return an array of 2 elements', () => {
		const { result } = renderHook(() => useCreateHandlerSetter());

		expect(result.current).toBeInstanceOf(Array);
		expect(result.current.length).toBe(2);
	});

	it('should return the reference to a handler', () => {
		const { result } = renderHook(() => useCreateHandlerSetter());
		const [handlerRef] = result.current;

		expect(handlerRef.current).toBeUndefined();
	});

	it('should return a handler setter', () => {
		const { result } = renderHook(() => useCreateHandlerSetter());
		const [handlerRef, setHandlerRef] = result.current;

		const fooCallback = (): void => undefined;

		expect(setHandlerRef).toBeInstanceOf(Function);

		act(() => {
			setHandlerRef(fooCallback);
		});

		expect(handlerRef.current).toEqual(fooCallback);
	});

	it('the setter should throw when changing the handler to an invalid value', () => {
		const { result } = renderHook(() => useCreateHandlerSetter());
		const [, setHandlerRef] = result.current;

		const shouldThrow = (): void => {
			setHandlerRef({ foo: 'bar' });
		};

		expect(shouldThrow).toThrow();
	});
});

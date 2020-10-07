import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React, { ReactElement } from 'react';

import useWillUnmount from './useWillUnmount';

describe('useWillUnmount', () => {
	it('should be defined', () => {
		expect(useWillUnmount).toBeDefined();
	});

	it('should call the callback function when the component did unmount', async () => {
		const fn = jest.fn();
		const hook = renderHook(() => useWillUnmount(fn));
		expect(fn).toBeCalledTimes(0);
		hook.rerender();
		expect(fn).toBeCalledTimes(0);
		hook.unmount();
		expect(fn).toBeCalledTimes(1);
	});

	it('should call the callback that is given to the returned function when de component did unmount', () => {
		const fn = jest.fn();

		const TestComponent = (): ReactElement | null => {
			const onUnMount = useWillUnmount();

			onUnMount(fn);

			return null;
		};

		const component = render(<TestComponent />);
		expect(fn).toBeCalledTimes(0);

		component.rerender(<TestComponent />);
		expect(fn).toBeCalledTimes(0);

		component.unmount();
		expect(fn).toBeCalledTimes(1);
	});
});

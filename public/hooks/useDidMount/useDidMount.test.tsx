import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React, { ReactElement } from 'react';

import useDidMount from './useDidMount';

describe('useMount', () => {
	it('should be defined', () => {
		expect(useDidMount).toBeDefined();
	});

	it('should call the callback function when the component did mount', async () => {
		const fn = jest.fn();
		const hook = renderHook(() => useDidMount(fn));
		expect(fn).toBeCalledTimes(1);
		hook.rerender();
		expect(fn).toBeCalledTimes(1);
		hook.unmount();
		expect(fn).toBeCalledTimes(1);
	});

	it('should call the callback that is given to the returned function when de component did mount', () => {
		const fn = jest.fn();

		const TestComponent = (): ReactElement | null => {
			const onMount = useDidMount();

			onMount(fn);

			return null;
		};

		const component = render(<TestComponent />);
		expect(fn).toBeCalledTimes(1);

		component.rerender(<TestComponent />);
		expect(fn).toBeCalledTimes(1);

		component.unmount();
		expect(fn).toBeCalledTimes(1);
	});
});

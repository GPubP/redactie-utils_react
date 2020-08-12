import { render } from '@testing-library/react';
import React from 'react';

import AlertContainer from './AlertContainer';

describe('Services: AlertContainer', () => {
	it('Should render a container', () => {
		const containerId = 'container-id';
		const { container } = render(<AlertContainer containerId={containerId} />);
		const alertContainer = container.querySelector(`#${containerId}`);

		expect(alertContainer).not.toBeNull();
	});

	it('Should render multiple containers with ids', () => {
		const containerId1 = 'container-1';
		const containerId2 = 'container-2';
		const { container } = render(
			<>
				<AlertContainer containerId={containerId1} />
				<AlertContainer containerId={containerId2} />
			</>
		);
		const container1 = container.querySelector(`#${containerId1}`);
		const container2 = container.querySelector(`#${containerId2}`);

		expect(container1).not.toBeNull();
		expect(container2).not.toBeNull();
	});
});

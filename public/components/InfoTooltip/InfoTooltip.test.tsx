import { fireEvent, render, RenderResult, screen, waitFor } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';

import InfoTooltip from './InfoTooltip';
import { InfoTooltipProps } from './InfoTooltip.types';

const tooltipText = 'Tooltip info';
const renderInfoTooltip = ({
	children = <p>{tooltipText}</p>,
	icon = 'edit',
	placement = 'bottom',
	type = 'primary',
	...props
}: Partial<PropsWithChildren<InfoTooltipProps>> = {}): RenderResult =>
	render(
		<InfoTooltip {...props} icon={icon} type={type} placement={placement}>
			{children}
		</InfoTooltip>
	);

describe('<InfoTooltip />', () => {
	it('Should pass a className to the trigger', async () => {
		const triggerClassName = 'c-custom-trigger';
		renderInfoTooltip({ triggerClassName });

		const button = screen.getByRole('button');
		expect(button).toHaveClass(triggerClassName);
	});

	it('Should pass a className to the tooltip', async () => {
		const tooltipClassName = 'c-custom-tooltip';
		renderInfoTooltip({ tooltipClassName });

		const button = screen.getByRole('button');
		fireEvent.click(button);

		const tooltipTextNode = await screen.findByText(tooltipText);
		expect(tooltipTextNode.closest('.a-tooltip')).toHaveClass(tooltipClassName);
	});

	it('Should toggle a tooltip onClick', async () => {
		renderInfoTooltip();

		const button = screen.getByRole('button');
		expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();

		fireEvent.click(button);

		const tooltip = await screen.findByText(tooltipText);
		expect(tooltip).toBeInTheDocument();
	});

	it('Should trigger onVisibilityChange callback when clicked', () => {
		const onVisibilityChange = jest.fn();
		renderInfoTooltip({ onVisibilityChange });

		const button = screen.getByRole('button');

		fireEvent.click(button);
		expect(onVisibilityChange).toHaveBeenCalledWith(true);

		fireEvent.click(button);
		expect(onVisibilityChange).toHaveBeenCalledWith(true);
		// We only clicked 2 times but it will also be triggered when the component mounts
		expect(onVisibilityChange).toHaveBeenCalledTimes(3);
	});

	it('Should close when clicking outside of the tooltip', async () => {
		renderInfoTooltip();

		const button = screen.getByRole('button');

		fireEvent.click(button);
		expect(await screen.findByText(tooltipText)).toBeInTheDocument();

		fireEvent.mouseDown(document.body);
		await waitFor(() => {
			expect(screen.queryByText(tooltipText)).not.toBeInTheDocument();
		});
	});
});

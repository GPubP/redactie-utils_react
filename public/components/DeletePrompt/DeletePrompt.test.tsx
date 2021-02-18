import { fireEvent, render, RenderResult } from '@testing-library/react';
import React, { ReactElement } from 'react';

import DeletePrompt from './DeletePrompt';
import { DELETE_PROMPT_DEFAULT_PROPS } from './DeletePrompt.const';

const renderDeletePrompt = (
	show: boolean,
	onConfirm: () => void = () => console.log('confirm'),
	onCancel: () => void = () => console.log('cancel')
): RenderResult => {
	return render(<DeletePrompt show={show} onConfirm={onConfirm} onCancel={onCancel} />);
};

describe('<DeletePrompt/>', () => {
	it('should trigger the confirm function', async () => {
		const confirmFn = jest.fn();
		const { getByText } = renderDeletePrompt(true, confirmFn);
		const confirmButton = getByText(DELETE_PROMPT_DEFAULT_PROPS.confirmText);

		fireEvent.click(confirmButton);

		expect(confirmFn).toHaveBeenCalled();
	});

	it('should trigger the cancel function', async () => {
		const cancelFn = jest.fn();
		const { getByText } = renderDeletePrompt(true, () => {}, cancelFn);
		const cancelButton = getByText(DELETE_PROMPT_DEFAULT_PROPS.cancelText);

		fireEvent.click(cancelButton);

		expect(cancelFn).toHaveBeenCalled();
	});
});

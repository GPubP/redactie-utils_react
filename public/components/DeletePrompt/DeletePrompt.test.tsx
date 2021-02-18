import { fireEvent, render, RenderResult } from '@testing-library/react';
import React from 'react';

import DeletePrompt from './DeletePrompt';
import { DELETE_PROMPT_DEFAULT_PROPS } from './DeletePrompt.const';
import { DeletePromptProps } from './DeletePrompt.types';

const renderDeletePrompt = ({
	isDeleting,
	show = true,
	onConfirm,
	onCancel,
}: Partial<DeletePromptProps>): RenderResult => {
	return render(
		<DeletePrompt
			isDeleting={isDeleting}
			show={show}
			onConfirm={onConfirm}
			onCancel={onCancel}
		/>
	);
};

describe('<DeletePrompt/>', () => {
	it('should trigger the confirm function', () => {
		const onConfirm = jest.fn();
		const { getByText } = renderDeletePrompt({ onConfirm });
		const confirmButton = getByText(DELETE_PROMPT_DEFAULT_PROPS.confirmText);

		fireEvent.click(confirmButton);

		expect(onConfirm).toHaveBeenCalled();
	});

	it('should trigger the cancel function', () => {
		const onCancel = jest.fn();
		const { getByText } = renderDeletePrompt({ onCancel });
		const cancelButton = getByText(DELETE_PROMPT_DEFAULT_PROPS.cancelText);

		fireEvent.click(cancelButton);

		expect(onCancel).toHaveBeenCalled();
	});

	it('should show a loading state', () => {
		const { getByText } = renderDeletePrompt({ isDeleting: true });
		const confirmButton = getByText(DELETE_PROMPT_DEFAULT_PROPS.confirmText);
		const loadingIcon = confirmButton.querySelector('.fa-circle-o-notch.fa-spin');

		expect(confirmButton).toBeDisabled();
		expect(loadingIcon).not.toBeNull();
	});
});

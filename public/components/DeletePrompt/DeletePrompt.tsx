import { Button } from '@acpaas-ui/react-components';
import {
	ControlledModal,
	ControlledModalBody,
	ControlledModalFooter,
	ControlledModalHeader,
} from '@acpaas-ui/react-editorial-components';
import React, { FC } from 'react';

import { DELETE_PROMPT_DEFAULT_PROPS } from './DeletePrompt.const';
import { DeletePromptProps } from './DeletePrompt.types';

const DeletePrompt: FC<DeletePromptProps> = ({
	body = DELETE_PROMPT_DEFAULT_PROPS.body,
	cancelText = DELETE_PROMPT_DEFAULT_PROPS.cancelText,
	confirmText = DELETE_PROMPT_DEFAULT_PROPS.confirmText,
	isDeleting = false,
	show = false,
	title = DELETE_PROMPT_DEFAULT_PROPS.title,
	onCancel,
	onConfirm,
	confirmButtonType = DELETE_PROMPT_DEFAULT_PROPS.confirmButtonType,
	confirmButtonIcon = DELETE_PROMPT_DEFAULT_PROPS.confirmButtonIcon,
}) => {
	/**
	 * Methods
	 */

	const handleConfirm = (): void => {
		if (onConfirm) {
			onConfirm();
		}
	};

	const handleCancel = (): void => {
		if (onCancel) {
			onCancel();
		}
	};

	/**
	 * Render
	 */

	return (
		<ControlledModal show={show} onClose={handleCancel} size="large">
			<ControlledModalHeader>
				<h4>{title}</h4>
			</ControlledModalHeader>
			<ControlledModalBody>
				<div>{body}</div>
			</ControlledModalBody>
			<ControlledModalFooter>
				<div className="u-flex u-flex-item u-flex-justify-end">
					<Button onClick={handleCancel} negative>
						{cancelText}
					</Button>
					<Button
						iconLeft={isDeleting ? 'circle-o-notch fa-spin' : confirmButtonIcon}
						disabled={isDeleting}
						onClick={handleConfirm}
						type={confirmButtonType}
					>
						{confirmText}
					</Button>
				</div>
			</ControlledModalFooter>
		</ControlledModal>
	);
};

export default DeletePrompt;

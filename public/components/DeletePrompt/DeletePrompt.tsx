import { Button } from '@acpaas-ui/react-components';
import { ControlledModal, ControlledModalHeader, ControlledModalFooter, ControlledModalBody } from '@acpaas-ui/react-editorial-components';

import React, { FC, useEffect, useState } from 'react';

import { DELETE_PROMPT_DEFAULT_PROPS } from './DeletePrompt.const';
import { DeletePromptProps } from './DeletePrompt.types';

const DeletePrompt: FC<DeletePromptProps> = ({
	show = false,
	title = DELETE_PROMPT_DEFAULT_PROPS.title,
	body = DELETE_PROMPT_DEFAULT_PROPS.body,
	cancelText = DELETE_PROMPT_DEFAULT_PROPS.cancelText,
	confirmText = DELETE_PROMPT_DEFAULT_PROPS.confirmText,
	onCancel,
	onConfirm,
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
				<div className="u-flex u-flex-justify-end">
					<Button onClick={handleCancel} negative>
						{cancelText}
					</Button>
					<Button onClick={handleConfirm} type="danger" iconLeft="trash">
						{confirmText}
					</Button>
				</div>
			</ControlledModalFooter>
		</ControlledModal>
	);
}
export default DeletePrompt;

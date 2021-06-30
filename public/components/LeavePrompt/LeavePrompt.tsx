import { Button } from '@acpaas-ui/react-components';
import {
	ControlledModal,
	ControlledModalBody,
	ControlledModalFooter,
	ControlledModalHeader,
} from '@acpaas-ui/react-editorial-components';
import { Location } from 'history';
import React, { FC, useEffect, useState } from 'react';
import { matchPath, Prompt, useHistory, useLocation } from 'react-router-dom';

import { LEAVE_PROMPT_DEFAULT_PROPS } from './LeavePrompt.const';
import { LeavePromptProps } from './LeavePrompt.types';

const LeavePrompt: FC<LeavePromptProps> = ({
	allowedPaths = [],
	body = LEAVE_PROMPT_DEFAULT_PROPS.body,
	cancelText = LEAVE_PROMPT_DEFAULT_PROPS.cancelText,
	confirmText = LEAVE_PROMPT_DEFAULT_PROPS.confirmText,
	deleteText = LEAVE_PROMPT_DEFAULT_PROPS.deleteText,
	navigate: navigateFn,
	onCancel,
	onConfirm,
	onDelete,
	shouldBlockNavigation = () => true,
	shouldBlockNavigationOnConfirm = false,
	title = LEAVE_PROMPT_DEFAULT_PROPS.title,
	when,
}) => {
	/**
	 * Hooks
	 */

	const [showModal, setShowModal] = useState(false);
	const [lastLocation, setLastLocation] = useState<Location | null>(null);
	const [confirmedNavigation, setConfirmedNavigation] = useState(false);
	const [onConfirmLoading, setOnConfirmLoading] = useState(false);
	const history = useHistory();
	const location = useLocation();

	const navigate = navigateFn || history.push;

	useEffect(() => {
		if (confirmedNavigation && lastLocation) {
			// Navigate to the previous blocked location with your navigate function
			navigate(`${lastLocation.pathname}${lastLocation.search}`);
		}
	}, [confirmedNavigation, lastLocation, navigate]);

	/**
	 * Methods
	 */

	const handleBlockedNavigation = (nextLocation: Location): boolean => {
		const isPathAllowed = !!allowedPaths.find((path) =>
			matchPath(nextLocation.pathname, {
				path,
				exact: true,
				strict: false,
			})
		);

		if (!confirmedNavigation && shouldBlockNavigation(nextLocation) && !isPathAllowed) {
			setShowModal(true);
			setLastLocation(nextLocation);
			return false;
		}
		return true;
	};

	const handleDelete = (): void => {
		if (onDelete) {
			onDelete();
		}
		setShowModal(false);
		setConfirmedNavigation(true);
	};

	const handleConfirm = async (): Promise<void> => {
		setOnConfirmLoading(true);
		if (onConfirm) {
			try {
				await Promise.resolve(onConfirm());
			} catch (error) {
				setOnConfirmLoading(false);
				return;
			}
		}

		setOnConfirmLoading(false);
		setShowModal(false);

		const blockOnConfirm =
			typeof shouldBlockNavigationOnConfirm === 'function'
				? shouldBlockNavigationOnConfirm(location)
				: shouldBlockNavigationOnConfirm;

		if (!blockOnConfirm) {
			setConfirmedNavigation(true);
		}
	};

	const handleCancel = (): void => {
		// Wait for confirm action to complete before closing modal
		if (onConfirmLoading) {
			return;
		}

		if (onCancel) {
			onCancel();
		}
		setShowModal(false);
	};

	/**
	 * Render
	 */

	return (
		<>
			<Prompt when={when} message={handleBlockedNavigation} />
			<ControlledModal onClose={handleCancel} show={showModal} size="large">
				<ControlledModalHeader>
					<h4>{title}</h4>
				</ControlledModalHeader>
				<ControlledModalBody>{body}</ControlledModalBody>
				<ControlledModalFooter>
					<div className="u-flex u-flex-item u-flex-justify-end">
						<Button onClick={handleCancel} disabled={onConfirmLoading} outline>
							{cancelText}
						</Button>
						<Button onClick={handleDelete} disabled={onConfirmLoading} outline type="danger">
							{deleteText}
						</Button>
						<Button
							onClick={handleConfirm}
							iconLeft={onConfirmLoading ? 'circle-o-notch fa-spin' : null}
							disabled={onConfirmLoading}
							type="success"
						>
							{confirmText}
						</Button>
					</div>
				</ControlledModalFooter>
			</ControlledModal>
		</>
	);
};

export default LeavePrompt;

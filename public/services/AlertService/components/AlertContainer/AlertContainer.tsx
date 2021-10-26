import classnames from 'classnames';
import React, { useEffect } from 'react';
import { cssTransition, ToastContainer, ToastContainerProps } from 'react-toastify';

import { alertService } from '../..';
import { alertStore } from '../../store/alertStore';

import './AlertContainer.scss';

// Prevent enter/exit flicker because of animation duration
const NoTransition = cssTransition({
	enter: 'no-in',
	exit: 'no-out',
	duration: 0,
	collapse: false,
});

const AlertContainer: React.FC<ToastContainerProps> = ({
	autoClose = false as false,
	bodyClassName,
	className,
	closeButton = false,
	closeOnClick = false,
	draggable = false,
	enableMultiContainer = true,
	hideProgressBar = true,
	limit = 1,
	progressClassName,
	toastClassName,
	transition = NoTransition,
	...rest
}) => {
	useEffect(() => {
		if (!rest.containerId) {
			return;
		}

		const s = alertStore.selectById(rest.containerId).subscribe((toasts) => {
			toasts.forEach(({ props, options, type }) => {
				alertService.showAlert(props, options, type);
			});
		});

		return () => {
			s.unsubscribe();
		};
	}, [rest.containerId]);

	return (
		<ToastContainer
			{...rest}
			autoClose={autoClose}
			bodyClassName={classnames(bodyClassName, 'o-alert-body')}
			className={classnames(className, 'o-alert-container')}
			closeButton={closeButton}
			closeOnClick={closeOnClick}
			draggable={draggable}
			enableMultiContainer={enableMultiContainer}
			hideProgressBar={hideProgressBar}
			limit={limit}
			progressClassName={classnames(progressClassName, 'o-alert-progress')}
			toastClassName={classnames(toastClassName, 'o-alert-toast')}
			transition={transition}
		/>
	);
};

export default AlertContainer;

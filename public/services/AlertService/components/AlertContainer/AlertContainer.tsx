import React from 'react';
import { cssTransition, ToastContainer, ToastContainerProps } from 'react-toastify';

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
	closeButton = false,
	closeOnClick = false,
	draggable = false,
	enableMultiContainer = true,
	hideProgressBar = true,
	limit = 1,
	transition = NoTransition,
	...rest
}) => {
	return (
		<ToastContainer
			{...rest}
			autoClose={autoClose}
			bodyClassName="o-alert-body"
			className="o-alert-container"
			closeButton={closeButton}
			closeOnClick={closeOnClick}
			draggable={draggable}
			enableMultiContainer={enableMultiContainer}
			hideProgressBar={hideProgressBar}
			limit={limit}
			progressClassName="o-alert-progress"
			toastClassName="o-alert-toast"
			transition={transition}
		/>
	);
};

export default AlertContainer;

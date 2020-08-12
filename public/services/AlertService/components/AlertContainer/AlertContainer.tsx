import React from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';

const AlertContainer: React.FC<ToastContainerProps> = ({
	autoClose = false as false,
	closeButton = false,
	closeOnClick = false,
	draggable = false,
	enableMultiContainer = true,
	hideProgressBar = true,
	limit = 1,
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
		/>
	);
};

export default AlertContainer;

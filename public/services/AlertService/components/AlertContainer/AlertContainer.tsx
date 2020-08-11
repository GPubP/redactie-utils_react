import React from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';

const AlertContainer: React.FC<ToastContainerProps> = ({
	autoClose = false as false,
	closeButton = false,
	closeOnClick = false,
	draggable = false,
	enableMultiContainer = true,
	...rest
}) => {
	return (
		<ToastContainer
			{...rest}
			autoClose={autoClose}
			closeButton={closeButton}
			closeOnClick={closeOnClick}
			draggable={draggable}
			enableMultiContainer={enableMultiContainer}
		/>
	);
};

export default AlertContainer;

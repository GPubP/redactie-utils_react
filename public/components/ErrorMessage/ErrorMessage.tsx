import classnames from 'classnames';
import { ErrorMessageProps, ErrorMessage as FormikErrorMessage } from 'formik';
import React, { FC } from 'react';

const ErrorMessage: FC<ErrorMessageProps> = ({ component = 'div', className = '', ...rest }) => {
	return (
		<FormikErrorMessage
			className={classnames(
				className,
				'small u-margin-top-xs u-margin-bottom-xs u-text-danger'
			)}
			component={component}
			{...rest}
		/>
	);
};

export default ErrorMessage;

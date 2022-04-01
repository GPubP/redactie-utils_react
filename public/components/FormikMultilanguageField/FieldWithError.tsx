import React, { FC } from 'react';

import { ErrorMessage } from '../ErrorMessage';

import { FieldWithErrorProps } from './FormikMultilanguageField.types';

export const FieldWithError: FC<FieldWithErrorProps> = ({
	name,
	disableErrorMessages,
	fieldWithErrorComponent,
	...props
}) => {
	const FormField = React.createElement(fieldWithErrorComponent, {
		name,
		...props,
	});

	return (
		<>
			{FormField}
			{!disableErrorMessages && (
				<ErrorMessage className="u-text-danger u-margin-top-xs" component="p" name={name} />
			)}
		</>
	);
};

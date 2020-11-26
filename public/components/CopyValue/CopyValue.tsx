import { Button } from '@acpaas-ui/react-components';
import React, { FC } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { CopyValueProps } from './CopyValue.types';

const CopyValue: FC<CopyValueProps> = ({
	label,
	value,
	buttonText = 'Kopieer',
	className = '',
}) => {
	return (
		<div className={className}>
			<label>{label}</label>
			<p className="u-margin-top-xs">
				<span className="u-text-light u-margin-right-xs">{value}</span>
				<CopyToClipboard text={value}>
					<Button className="u-button-as-link" htmlType="button" type="transparent">
						{buttonText}
					</Button>
				</CopyToClipboard>
			</p>
		</div>
	);
};

export default CopyValue;

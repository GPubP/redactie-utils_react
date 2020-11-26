import { Button } from '@acpaas-ui/react-components';
import React, { FC } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { CopyValueProps } from './CopyValue.types';

const CopyValue: FC<CopyValueProps> = ({ title, value, buttonText }) => {
	return (
		<div className="row u-margin-top">
			<div className="col-xs-12 ">
				<label>{title}</label>
				<p className="u-margin-top-xs">
					<span className="u-text-light u-margin-right-xs">{value}</span>
					<CopyToClipboard text={value}>
						<Button className="u-button-as-link" htmlType="button" type="transparent">
							{buttonText}
						</Button>
					</CopyToClipboard>
				</p>
			</div>
		</div>
	);
};

export default CopyValue;

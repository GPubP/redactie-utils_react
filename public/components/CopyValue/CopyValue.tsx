import { Button } from '@acpaas-ui/react-components';
import debounce from 'lodash.debounce';
import React, { FC, useCallback, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { CopyValueProps } from './CopyValue.types';

const CopyValue: FC<CopyValueProps> = ({
	label,
	value,
	buttonText = 'Kopieer',
	className = '',
}) => {
	const [showFeedback, setShowFeedback] = useState<boolean>(false);
	const debouncedHideFeedback = useCallback(
		debounce(() => setShowFeedback(false), 5000),
		[]
	);

	const handleCopy = (): void => {
		setShowFeedback(true);
		debouncedHideFeedback();
	};

	return (
		<div className={className}>
			<label>{label}</label>
			<div className="u-flex u-margin-top-xs">
				<span className="u-text-light u-margin-right-xs">{value}</span>
				<CopyToClipboard text={value} onCopy={handleCopy}>
					<Button className="u-button-as-link" htmlType="button" type="transparent">
						{buttonText}
					</Button>
				</CopyToClipboard>
				{showFeedback && <small className="u-margin-left-xs">Gekopieerd!</small>}
			</div>
		</div>
	);
};

export default CopyValue;

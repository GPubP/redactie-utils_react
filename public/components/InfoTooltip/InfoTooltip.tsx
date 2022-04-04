import { Card, CardBody, Icon } from '@acpaas-ui/react-components';
import { Tooltip } from '@acpaas-ui/react-editorial-components';
import React, { FC, useEffect, useRef, useState } from 'react';

import { InfoTooltipProps } from './InfoTooltip.types';

const InfoTooltip: FC<InfoTooltipProps> = ({
	icon,
	placement,
	type,
	children,
	onVisibilityChange,
}): any => {
	const tooltipRef = useRef(null);
	const [isVisible, setVisibility] = useState(false);

	useEffect(() => {
		onVisibilityChange && onVisibilityChange(isVisible);
	}, [isVisible, onVisibilityChange]);

	return (
		<>
			<button
				className="a-button a-button-transparent has-icon"
				ref={tooltipRef}
				onFocus={() => setVisibility(true)}
				onBlur={() => setVisibility(false)}
			>
				<Icon name={icon}></Icon>
			</button>
			<Tooltip placement={placement} isVisible={isVisible} type={type} targetRef={tooltipRef}>
				<div>
					<Card style={{ border: 'none', padding: '0.5rem' }}>
						<CardBody style={{ padding: '0.5rem' }}>{children}</CardBody>
					</Card>
				</div>
			</Tooltip>
		</>
	);
};

export default InfoTooltip;

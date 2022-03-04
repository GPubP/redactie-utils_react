import { Card, CardBody, Icon } from '@acpaas-ui/react-components';
import { Tooltip } from '@acpaas-ui/react-editorial-components';
import React, { FC, useRef, useState } from 'react';

import { InfoTooltipProps } from './InfoTooltip.types';

const InfoTooltip: FC<InfoTooltipProps> = ({ icon, placement, type, children }): any => {
	const tooltipRef = useRef(null);
	const [isVisible, setVisibility] = useState(true);

	return (
		<>
			<button
				className="a-button a-button-transparent has-icon"
				ref={tooltipRef}
				onFocus={() => setVisibility(true)}
				onBlur={() => setVisibility(true)}
			>
				<Icon name={icon}></Icon>
			</button>
			<Tooltip placement={placement} isVisible={isVisible} type={type} targetRef={tooltipRef}>
				<div>
					<Card style={{ border: 'none' }}>
						<CardBody style={{ padding: '0.5rem' }}>{children}</CardBody>
					</Card>
				</div>
			</Tooltip>
		</>
	);
};

export default InfoTooltip;

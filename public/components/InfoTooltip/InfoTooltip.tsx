import { Card, CardBody, Icon } from '@acpaas-ui/react-components';
import { Tooltip } from '@acpaas-ui/react-editorial-components';
import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';

import { InfoTooltipProps } from './InfoTooltip.types';

const InfoTooltip: FC<InfoTooltipProps> = ({
	icon,
	placement,
	type,
	children,
	tooltipClassName,
	triggerClassName,
	onVisibilityChange,
}): any => {
	const tooltipRef = useRef(null);
	const [isVisible, setVisibility] = useState(false);

	useEffect(() => {
		onVisibilityChange?.(isVisible);
	}, [isVisible, onVisibilityChange]);

	return (
		<>
			<button
				className={classNames(triggerClassName, 'a-button a-button-transparent has-icon')}
				ref={tooltipRef}
				onClick={() => setVisibility((prevIsVisible) => !prevIsVisible)}
			>
				<Icon name={icon}></Icon>
			</button>
			<Tooltip
				className={tooltipClassName}
				placement={placement}
				isVisible={isVisible}
				type={type}
				targetRef={tooltipRef}
			>
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

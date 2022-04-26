import { Card, CardBody, Icon } from '@acpaas-ui/react-components';
import { Tooltip } from '@acpaas-ui/react-editorial-components';
import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';

import { useClickOutside } from '../../hooks';

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
	const triggerRef = useRef<HTMLButtonElement | null>(null);
	const [tooltipRef, setTooltipRef] = useState<HTMLElement | null>(null);
	const [isVisible, setVisibility] = useState(false);

	useClickOutside(triggerRef.current as Element, () => setVisibility(false), [
		tooltipRef as Element,
	]);

	// Trigger callback when visibility changes
	useEffect(() => {
		onVisibilityChange?.(isVisible);
	}, [isVisible, onVisibilityChange]);

	return (
		<>
			<button
				className={classNames(triggerClassName, 'a-button a-button-transparent has-icon')}
				ref={triggerRef}
				onClick={() => setVisibility((prevIsVisible) => !prevIsVisible)}
			>
				<Icon name={icon}></Icon>
			</button>
			<Tooltip
				className={tooltipClassName}
				placement={placement}
				isVisible={isVisible}
				type={type}
				targetRef={triggerRef}
				tooltipRef={setTooltipRef}
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

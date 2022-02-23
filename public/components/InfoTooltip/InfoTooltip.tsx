import { Card, CardBody, CardTitle, Icon, Label } from '@acpaas-ui/react-components';
import { Tooltip, TooltipTypeMap } from '@acpaas-ui/react-editorial-components';
import moment from 'moment';
import React, { FC, useRef, useState } from 'react';

import { InfoTooltipProps } from './InfoTooltip.types';

const InfoTooltip: FC<InfoTooltipProps> = ({ data, icon }) => {
	const tooltipRef = useRef(null);
	const [isVisible, setVisibility] = useState(false);

	const { meta } = data;

	return (
		<button
			className="a-button a-button-transparent has-icon"
			ref={tooltipRef}
			onFocus={() => setVisibility(true)}
			onBlur={() => setVisibility(false)}
		>
			<Icon name={icon}></Icon>
			<Tooltip
				placement="bottom-end"
				isVisible={isVisible}
				type={TooltipTypeMap.WHITE}
				targetRef={tooltipRef}
			>
				<div>
					<Card style={{ border: 'none' }}>
						<CardBody style={{ padding: '0.5rem' }}>
							<CardTitle>{meta.label}</CardTitle>

							<div className="u-margin-top">
								{meta?.description && (
									<div className="u-margin-bottom u-text-light">
										{meta.description}
									</div>
								)}
								{meta?.created && (
									<div className="u-margin-bottom-xs">
										<b>Aangemaakt op: </b>
										<span>
											{moment(meta.created).format('DD/MM/YYYY [-] HH[u]mm')}
										</span>
									</div>
								)}
								{meta?.lastModified && (
									<div className="u-margin-bottom-xs">
										<b>Laatst aangepast op: </b>
										{moment(meta.lastModified).format('DD/MM/YYYY [-] HH[u]mm')}
									</div>
								)}
								{meta?.historySummary?.published && meta.firstPublished && (
									<div className="u-margin-bottom-xs">
										<b>Gepubliceerd op: </b>
										{moment(meta.firstPublished).format(
											'DD/MM/YYYY [-] HH[u]mm'
										)}
									</div>
								)}
								{meta?.lastEditor && (
									<div className="u-margin-bottom-xs">
										<b>Door: </b>
										{`${meta.lastEditor?.firstname} ${meta.lastEditor?.lastname}`}
									</div>
								)}
								<div className="u-margin-top">
									<p>
										<b>Status</b>
									</p>
									<Label type="primary">
										{/* 	CONTENT_STATUS_TRANSLATION_MAP[
												meta.status as ContentStatus
											] */}
										{meta.status}
									</Label>
								</div>
							</div>
						</CardBody>
					</Card>
				</div>
			</Tooltip>
		</button>
	);
};

export default InfoTooltip;

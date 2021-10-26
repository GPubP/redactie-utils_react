import { AlertContainer } from '@redactie/utils';
import React from 'react';
import { Link } from 'react-router-dom';

const TestView: React.FC = () => {
	return (
		<div>
			<Link to="/">Go back</Link>
			<h2 className="u-margin-top u-margin-bottom-xs">Alert view</h2>
			<AlertContainer containerId="alert-view" />
		</div>
	);
};

export default TestView;

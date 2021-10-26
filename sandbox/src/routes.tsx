import React from 'react';
import { Route } from 'react-router-dom';
import { SandboxView, TestView } from './views';

export const routes = [
	<Route component={SandboxView} path="/" key="/" exact />,
	<Route component={TestView} path="/alert" key="/alert" />,
];

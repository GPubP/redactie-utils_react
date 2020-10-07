import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react';
import React, { FC } from 'react';
import { Link, MemoryRouter, Route } from 'react-router-dom';

import LeavePrompt from './LeavePrompt';
import { LEAVE_PROMPT_DEFAULT_PROPS } from './LeavePrompt.const';
import { LeavePromptProps } from './LeavePrompt.types';

const linkId = 'dummy-link';
const dummyId = 'dummy-id';

const DummyRoute: FC = () => (
	<Route path="/dummy">
		<span data-testid={dummyId}>Dummy</span>
	</Route>
);
const StartRoute: FC<Partial<LeavePromptProps>> = ({ when = true, ...rest }) => (
	<Route path="/start">
		<Link data-testid={linkId} to="/dummy">
			Dummy link
		</Link>
		<LeavePrompt {...rest} when={when} />
	</Route>
);
const AppWithRouter: FC<Partial<LeavePromptProps>> = (props) => (
	<MemoryRouter initialEntries={['/start', '/dummy']} initialIndex={0}>
		<StartRoute {...props} />
		<DummyRoute />
	</MemoryRouter>
);

describe('<LeavePrompt />', () => {
	it('Should prompt the user when leaving if the condition equals `true`', () => {
		const { getByTestId, queryByText } = render(<AppWithRouter />);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const promptEl = queryByText(LEAVE_PROMPT_DEFAULT_PROPS.title);

		expect(promptEl).not.toBeNull();
	});

	it('Should continue navigation when user confirms', () => {
		const confirmMethod = jest.fn();
		const { getByTestId, getByText, queryByTestId } = render(
			<AppWithRouter onConfirm={confirmMethod} />
		);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const confirmEl = getByText(LEAVE_PROMPT_DEFAULT_PROPS.confirmText);
		fireEvent.click(confirmEl);

		expect(confirmMethod).toHaveBeenCalled();
		expect(confirmMethod).toHaveBeenCalledTimes(1);
		expect(queryByTestId(dummyId)).not.toBeNull();
	});

	it('should not continue navigation when user confirms and shouldBlockNavigationOnConfirm returns `true`', () => {
		const confirmMethod = jest.fn();
		const { getByTestId, getByText, queryByTestId } = render(
			<AppWithRouter shouldBlockNavigationOnConfirm onConfirm={confirmMethod} />
		);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const confirmEl = getByText(LEAVE_PROMPT_DEFAULT_PROPS.confirmText);
		fireEvent.click(confirmEl);

		expect(confirmMethod).toHaveBeenCalled();
		expect(confirmMethod).toHaveBeenCalledTimes(1);
		expect(queryByTestId(dummyId)).toBeNull();
	});

	it('Should continue navigation when user deletes', () => {
		const deleteMethod = jest.fn();
		const { getByTestId, getByText, queryByTestId } = render(
			<AppWithRouter onDelete={deleteMethod} />
		);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const deleteEl = getByText(LEAVE_PROMPT_DEFAULT_PROPS.deleteText);
		fireEvent.click(deleteEl);

		expect(deleteMethod).toHaveBeenCalled();
		expect(deleteMethod).toHaveBeenCalledTimes(1);
		expect(queryByTestId(dummyId)).not.toBeNull();
	});

	it('Should hide the prompt when user cancels', async () => {
		const cancelMethod = jest.fn();
		const { getByTestId, getByText, queryByText } = render(
			<AppWithRouter onCancel={cancelMethod} />
		);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const cancelEl = getByText(LEAVE_PROMPT_DEFAULT_PROPS.cancelText);
		fireEvent.click(cancelEl);

		expect(cancelMethod).toHaveBeenCalled();
		expect(cancelMethod).toHaveBeenCalledTimes(1);

		waitForElementToBeRemoved(queryByText(LEAVE_PROMPT_DEFAULT_PROPS.cancelText)).then(() => {
			expect(queryByText(LEAVE_PROMPT_DEFAULT_PROPS.cancelText)).toBeNull();
		});
	});

	it('Should not prompt the user when leaving if the condition equals `false`', () => {
		const { getByTestId, queryByText } = render(<AppWithRouter when={false} />);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const promptEl = queryByText(LEAVE_PROMPT_DEFAULT_PROPS.title);

		expect(promptEl).toBeNull();
	});

	it('Should continue navigation when next location is allowed', () => {
		const { getByTestId, queryByTestId, queryByText } = render(
			<AppWithRouter allowedPaths={['/dummy']} />
		);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const promptEl = queryByText(LEAVE_PROMPT_DEFAULT_PROPS.title);

		expect(promptEl).toBeNull();
		expect(queryByTestId(dummyId)).not.toBeNull();
	});

	it('Should block navigation when shouldBlockNavigation returns `true`', () => {
		const { getByTestId, queryByTestId, queryByText } = render(
			<AppWithRouter shouldBlockNavigation={(location) => location.pathname === '/dummy'} />
		);

		const linkEl = getByTestId(linkId);
		fireEvent.click(linkEl);

		const promptEl = queryByText(LEAVE_PROMPT_DEFAULT_PROPS.title);

		expect(promptEl).not.toBeNull();
		expect(queryByTestId(dummyId)).toBeNull();
	});
});

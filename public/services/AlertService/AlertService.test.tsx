import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import { AlertContainer } from './components';

import { alertService } from '.';

const message = 'Lorem ipsum';

describe('Services: alertService', () => {
	it('Should show an alert', async () => {
		const { findByText } = render(<AlertContainer />);

		alertService({ message });

		await findByText(message);
	});

	it('Should show different types of alerts', async () => {
		const successMessage = 'success';
		const warningMessage = 'warning';
		const dangerMessage = 'danger';

		const { findByText } = render(<AlertContainer limit={3} />);

		alertService.success({ message: successMessage });
		alertService.warning({ message: warningMessage });
		alertService.danger({ message: dangerMessage });

		const successAlert = await findByText(successMessage);
		const warningAlert = await findByText(warningMessage);
		const dangerAlert = await findByText(dangerMessage);

		expect(successAlert.classList.contains('m-alert--success')).toBeTruthy();
		expect(warningAlert.classList.contains('m-alert--warning')).toBeTruthy();
		expect(dangerAlert.classList.contains('m-alert--danger')).toBeTruthy();
	});

	it('Should show a title when given', async () => {
		const title = 'A title';
		const { findByText } = render(<AlertContainer />);

		alertService({ message, title });

		await findByText(title);
	});

	it('Should call the onClose method when closing the alert', async () => {
		const closeMethod = jest.fn();
		const { findByText } = render(<AlertContainer />);

		alertService({ message }, { onClose: closeMethod });

		const alert = await findByText(message);
		const closeButton = alert.querySelector('.m-alert__close');

		fireEvent.click(closeButton as HTMLButtonElement);

		await waitFor(() => {
			expect(closeMethod).toHaveBeenCalled();
			expect(closeMethod).toHaveBeenCalledTimes(1);
		});
	});
});

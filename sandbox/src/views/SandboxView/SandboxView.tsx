import { Button, ButtonGroup } from '@acpaas-ui/react-components';
import { useAPIQueryParams, alertService } from '@redactie/utils';
import React, { FC, useEffect } from 'react';

const SandboxView: FC = () => {
	const [query, setQuery] = useAPIQueryParams({
		search: { defaultValue: 'lorem ipsum', type: 'string' },
	});

	useEffect(() => {
		if (query.sort !== 'data.property') {
			setQuery({
				pagesize: 20,
				sort: 'data.property',
				direction: 'desc',
			});
		}
	}, [query, setQuery]);

	const onPageChange = (page: number) => {
		if (page === 0) {
			return;
		}
		setQuery({ page });
	};

	return (
		<>
			<h2 className="u-margin-bottom-xs">Hooks</h2>
			<h3 className="u-margin-bottom">useAPIQueryParams</h3>
			<div className="u-margin-bottom">
				<code>{JSON.stringify(query)}</code>
			</div>
			<ButtonGroup>
				<Button onClick={() => onPageChange(query.page - 1)}>Previous page</Button>
				<Button onClick={() => onPageChange(query.page + 1)}>Next page</Button>
			</ButtonGroup>

			<h2 className="u-margin-top-lg u-margin-bottom-xs">Services</h2>
			<h3 className="u-margin-bottom">alertService</h3>
			<Button
				onClick={() =>
					alertService.info({ title: 'This is an info alert', message: 'Lorem ipsum' })
				}
			>
				Alert me
			</Button>
		</>
	);
};

export default SandboxView;

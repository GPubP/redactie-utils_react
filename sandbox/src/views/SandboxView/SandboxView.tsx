import { Button, ButtonGroup } from '@acpaas-ui/react-components';
import { Container } from '@acpaas-ui/react-editorial-components';
import { useAPIQueryParams } from '@redactie/utils';
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
		<Container>
			<div className="u-margin-bottom">
				<code>{JSON.stringify(query)}</code>
			</div>
			<ButtonGroup>
				<Button onClick={() => onPageChange(query.page - 1)}>Previous page</Button>
				<Button onClick={() => onPageChange(query.page + 1)}>Next page</Button>
			</ButtonGroup>
		</Container>
	);
};

export default SandboxView;

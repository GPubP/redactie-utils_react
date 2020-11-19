import { useContext, useEffect, useState } from 'react';

import { PromiseWorker } from '../../classes';
import { TenantContext } from '../../context';

const usePromiseWorker = <Data = any, ReturnValue = any>(
	bffModulePath: string,
	workerOrPath: Worker | string,
	timeoutTime?: number,
	tenantContext = TenantContext
): [PromiseWorker<Data, ReturnValue> | null] => {
	const [promiseWorker, setPromiseWorker] = useState<PromiseWorker<Data, ReturnValue> | null>(
		null
	);
	const { tenantId } = useContext(tenantContext);

	useEffect(() => {
		// Worker not supported so skip functionality
		if (!Worker) {
			return;
		}

		const localPromiseWorker: PromiseWorker<Data, ReturnValue> =
			typeof workerOrPath === 'string'
				? new PromiseWorker<Data, ReturnValue>(
						new Worker(
							`/v1/tenants/${tenantId}/bundles/${bffModulePath}${workerOrPath}.umd.js`
						),
						timeoutTime
				  )
				: new PromiseWorker<Data, ReturnValue>(workerOrPath, timeoutTime);

		setPromiseWorker(localPromiseWorker);

		return () => {
			localPromiseWorker && localPromiseWorker.terminate();
		};
	}, [Worker, tenantId, workerOrPath]); // eslint-disable-line react-hooks/exhaustive-deps

	return [promiseWorker];
};

export default usePromiseWorker;

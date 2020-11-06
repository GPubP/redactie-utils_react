import { useContext, useEffect, useState } from 'react';

import { TenantContext } from '../../context';
import { WorkerMessageEvent } from '../../types/workers.types';

// You can pass a path to a worker or an instance of Worker
const useWorker = <Data = any, ReturnValue = any>(
	bffModulePath: string,
	workerOrPath: Worker | string,
	data: Data,
	defaultValue = null as any,
	tenantContext = TenantContext
): [ReturnValue | null, ErrorEvent | any] => {
	const [worker, setWorker] = useState<Worker | null>(null);
	const [returnValue, setReturnValue] = useState<ReturnValue | null>(defaultValue);
	const [error, setError] = useState<ErrorEvent | any>(null);
	const { tenantId } = useContext(tenantContext);

	useEffect(() => {
		// Worker not supported so skip functionality
		if (!Worker) {
			return;
		}

		let localWorker: Worker | undefined;

		if (typeof workerOrPath === 'string') {
			localWorker = new Worker(
				`/v1/tenants/${tenantId}/bundles/${bffModulePath}${workerOrPath}.umd.js`
			);
			setWorker(localWorker);
		}

		if (workerOrPath instanceof Worker) {
			setWorker(workerOrPath);
		}

		return () => {
			localWorker && localWorker.terminate();
		};
	}, [Worker, tenantId, workerOrPath]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (!worker || !data) {
			return;
		}

		worker.postMessage(data);
	}, [data, worker]);

	useEffect(() => {
		if (!worker) {
			return;
		}

		const messsageListener = (e: WorkerMessageEvent<ReturnValue>): void =>
			setReturnValue(e.data);
		const errorListener = (e: ErrorEvent): void => setError(e);

		worker.addEventListener('message', messsageListener);
		worker.addEventListener('error', errorListener);

		return () => {
			worker.removeEventListener('message', messsageListener);
			worker.removeEventListener('error', errorListener);
		};
	}, [worker]);

	return [returnValue, error];
};

export default useWorker;

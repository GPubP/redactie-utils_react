import { equals } from 'ramda';

import { HasChangesWorkerData, WorkerCtx, WorkerMessageEvent } from '../../types/workers.types';

const ctx = self as unknown as WorkerCtx;

ctx.onmessage = (e: WorkerMessageEvent<HasChangesWorkerData>): void => {
	const { isLoaded = true } = e.data;

	if (!isLoaded) {
		return;
	}

	ctx.postMessage(!equals(e.data.currentValue, e.data.nextValue));
};

export default null as unknown as new () => Worker;

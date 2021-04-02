import { useCallback, useEffect, useMemo, useRef } from 'react';

import { TenantContext } from '../../context';
import { HasChangesWorkerData } from '../../types/workers.types';
import { useWorker } from '../useWorker';

const useDetectValueChangesWorker = (
	isLoaded: boolean,
	value: unknown,
	bffModulePath: string,
	tenantContext = TenantContext
): [boolean, Function] => {
	const currentValue = useRef<unknown>();
	const data = useMemo<HasChangesWorkerData>(
		() => ({
			currentValue: currentValue.current ?? value,
			nextValue: value,
			isLoaded,
		}),
		[isLoaded, value, currentValue]
	);
	const [hasChanges] = useWorker<HasChangesWorkerData, boolean>(
		bffModulePath,
		'hasChanges.worker',
		data,
		false,
		tenantContext
	);

	const reset = useCallback(() => {
		currentValue.current = undefined;
	}, []);

	useEffect(() => {
		if (!isLoaded) {
			return;
		}

		if (currentValue.current === undefined) {
			currentValue.current = value;
		}
	}, [value, isLoaded, currentValue]);

	return [!!hasChanges, reset];
};

export default useDetectValueChangesWorker;

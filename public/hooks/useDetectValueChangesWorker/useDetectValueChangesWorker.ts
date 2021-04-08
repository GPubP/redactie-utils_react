import { useCallback, useEffect, useMemo, useState } from 'react';

import { TenantContext } from '../../context';
import { HasChangesWorkerData } from '../../types/workers.types';
import { useWorker } from '../useWorker';

const useDetectValueChangesWorker = (
	isLoaded: boolean,
	value: unknown,
	bffModulePath: string,
	tenantContext = TenantContext
): [boolean, Function] => {
	const [currentValue, setCurrentValue] = useState<unknown>();
	const data = useMemo<HasChangesWorkerData>(
		() => ({
			currentValue: currentValue ?? value,
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
		setCurrentValue(undefined);
	}, []);

	useEffect(() => {
		if (!isLoaded) {
			return;
		}

		// Only check for undefined, if you need an empty initial value use null
		if (currentValue === undefined) {
			setCurrentValue(value);
		}
	}, [value, isLoaded, currentValue]);

	return [!!hasChanges, reset];
};

export default useDetectValueChangesWorker;

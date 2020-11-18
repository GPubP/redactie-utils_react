import { useCallback, useEffect, useMemo, useState } from 'react';

import { TenantContext } from '../../context';
import { HasChangesWorkerData } from '../../workers/hasChanges/hasChanges.types';
import { useWorker } from '../useWorker';

const useDetectValueChangesWorker = (
	isLoaded: boolean,
	value: unknown,
	bffModulePath: string,
	tenantContext = TenantContext
): [boolean, Function] => {
	const [currentValue, setCurrentValue] = useState<any>();
	const data = useMemo<HasChangesWorkerData>(
		() => ({
			currentValue,
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

		if (!currentValue) {
			setCurrentValue(value);
		}
	}, [value, isLoaded, currentValue]);

	return [!!hasChanges, reset];
};

export default useDetectValueChangesWorker;

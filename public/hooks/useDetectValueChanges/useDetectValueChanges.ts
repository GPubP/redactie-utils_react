import { equals } from 'ramda';
import { useEffect, useState } from 'react';

const useDetectValueChanges = (isLoaded: boolean, value: unknown): [boolean, Function] => {
	const [currentValue, setCurrentValue] = useState<unknown>();
	const [isChanged, setIsChanged] = useState<boolean>(false);

	const reset = (): void => {
		setCurrentValue(undefined);
	};

	useEffect(() => {
		if (!isLoaded) {
			return;
		}

		if (currentValue === undefined) {
			setCurrentValue(value);
		}

		setIsChanged(!equals(currentValue, value));
	}, [value, isLoaded, currentValue]);

	return [isChanged, reset];
};

export default useDetectValueChanges;

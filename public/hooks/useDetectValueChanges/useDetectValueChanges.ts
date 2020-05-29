import { equals } from 'ramda';
import { useEffect, useRef, useState } from 'react';

const useDetectValueChanges = (isLoaded: boolean, value: unknown): [boolean] => {
	const ref = useRef<unknown>();
	const [isChanged, setIsChanged] = useState<boolean>(false);

	useEffect(() => {
		if (!isLoaded) {
			return;
		}

		if (!ref.current) {
			ref.current = value;
		}

		setIsChanged(!equals(ref.current, value));
	}, [value, isLoaded]);

	return [isChanged];
};

export default useDetectValueChanges;

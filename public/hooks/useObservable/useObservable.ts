import { useEffect, useState } from 'react';

import { Observable } from './useObservable.types';

function useObservable<T>(observable$: Observable<T>): T | undefined;
function useObservable<T>(observable$: Observable<T>, initialValue: T): T;
function useObservable<T>(observable$: Observable<T>, initialValue?: T): T | undefined {
	const [value, update] = useState<T | undefined>(initialValue);
	const reportError = (err: any): void =>
		console.error(`useObservable() error: ${JSON.stringify(err)}`);

	useEffect(() => {
		if (observable$) {
			const s = observable$.subscribe(update, reportError);
			return () => s.unsubscribe();
		}
	}, [observable$]);

	return value;
}

export default useObservable;

export interface Observable<T> {
	subscribe: (
		listener: (value: T) => void,
		error?: (err: string) => void
	) => {
		unsubscribe: () => void;
	};
}

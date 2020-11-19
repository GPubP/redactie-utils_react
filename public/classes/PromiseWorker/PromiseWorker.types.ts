export interface PromiseWorkerMessage<Data = any> {
	data: Data;
	id: number;
}

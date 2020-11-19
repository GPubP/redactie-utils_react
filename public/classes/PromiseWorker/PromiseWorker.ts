import { Subject } from 'rxjs';
import { filter, map, timeout } from 'rxjs/operators';

import { WorkerMessageEvent } from '../../types/index.types';

import { PromiseWorkerMessage } from './PromiseWorker.types';

export default class PromiseWorker<Data = any, ReturnValue = any> {
	private _worker: Worker;
	private _timeoutTime: number;
	private _messages$ = new Subject<PromiseWorkerMessage>();
	private _messageIds = 0;
	private _onMessageBind: (e: WorkerMessageEvent<PromiseWorkerMessage>) => void;

	constructor(worker: Worker, timeoutTime = 30000) {
		this._worker = worker;
		this._timeoutTime = timeoutTime;
		this._onMessageBind = this._onMessage.bind(this);
		this._worker.addEventListener('message', this._onMessageBind);
	}

	public postMessage<D = Data, R = ReturnValue>(data: D): Promise<R> {
		const id = this._messageIds++;

		this._worker.postMessage({
			id,
			data,
		});

		return this._messages$
			.pipe(
				filter((e: PromiseWorkerMessage<R>) => e.id === id),
				map((e: PromiseWorkerMessage<R>) => e.data),
				timeout(this._timeoutTime)
			)
			.toPromise<R>();
	}

	public terminate(): void {
		this._worker.removeEventListener('message', this._onMessageBind);
		this._worker.terminate();
	}

	private _onMessage(e: WorkerMessageEvent<PromiseWorkerMessage>): void {
		this._messages$.next(e.data);
	}
}

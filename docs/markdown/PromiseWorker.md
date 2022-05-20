# Class: PromiseWorker<Data, ReturnValue\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `any` |
| `ReturnValue` | `any` |

## Table of contents

### Constructors

- [constructor](../wiki/PromiseWorker#constructor)

### Methods

- [postMessage](../wiki/PromiseWorker#postmessage)
- [terminate](../wiki/PromiseWorker#terminate)

## Constructors

### constructor

• **new PromiseWorker**<`Data`, `ReturnValue`\>(`worker`, `timeoutTime?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Data` | `any` |
| `ReturnValue` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `worker` | `Worker` | `undefined` |
| `timeoutTime` | `number` | `30000` |

#### Defined in

public/classes/PromiseWorker/PromiseWorker.ts:15

## Methods

### postMessage

▸ **postMessage**<`D`, `R`\>(`data`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | `Data` |
| `R` | `ReturnValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D` |

#### Returns

`Promise`<`R`\>

#### Defined in

public/classes/PromiseWorker/PromiseWorker.ts:22

___

### terminate

▸ **terminate**(): `void`

#### Returns

`void`

#### Defined in

public/classes/PromiseWorker/PromiseWorker.ts:40

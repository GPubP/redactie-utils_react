# Class: AlertService

[<internal>](../wiki/%3Cinternal%3E).AlertService

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.AlertService#constructor)

### Properties

- [clearWaitingQueue](../wiki/%3Cinternal%3E.AlertService#clearwaitingqueue)
- [configure](../wiki/%3Cinternal%3E.AlertService#configure)
- [dismiss](../wiki/%3Cinternal%3E.AlertService#dismiss)
- [done](../wiki/%3Cinternal%3E.AlertService#done)
- [isActive](../wiki/%3Cinternal%3E.AlertService#isactive)
- [update](../wiki/%3Cinternal%3E.AlertService#update)

### Methods

- [danger](../wiki/%3Cinternal%3E.AlertService#danger)
- [info](../wiki/%3Cinternal%3E.AlertService#info)
- [invalidForm](../wiki/%3Cinternal%3E.AlertService#invalidform)
- [showAlert](../wiki/%3Cinternal%3E.AlertService#showalert)
- [success](../wiki/%3Cinternal%3E.AlertService#success)
- [warning](../wiki/%3Cinternal%3E.AlertService#warning)

## Constructors

### constructor

• **new AlertService**()

## Properties

### clearWaitingQueue

• **clearWaitingQueue**: (`params?`: `ClearWaitingQueueParams`) => ``false`` \| `void` = `toast.clearWaitingQueue`

#### Type declaration

▸ (`params?`): ``false`` \| `void`

Clear waiting queue when limit is used

##### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `ClearWaitingQueueParams` |

##### Returns

``false`` \| `void`

#### Defined in

public/services/AlertService/AlertService.tsx:47

___

### configure

• **configure**: (`config?`: `ToastContainerProps`) => `void` = `toast.configure`

#### Type declaration

▸ (`config?`): `void`

Configure the ToastContainer when lazy mounted

##### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `ToastContainerProps` |

##### Returns

`void`

#### Defined in

public/services/AlertService/AlertService.tsx:48

___

### dismiss

• **dismiss**: (`id?`: `string` \| `number`) => ``false`` \| `void` = `toast.dismiss`

#### Type declaration

▸ (`id?`): ``false`` \| `void`

Remove toast programmaticaly

##### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `string` \| `number` |

##### Returns

``false`` \| `void`

#### Defined in

public/services/AlertService/AlertService.tsx:49

___

### done

• **done**: (`id`: `Id`) => `void` = `toast.done`

#### Type declaration

▸ (`id`): `void`

Used for controlled progress bar.

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |

##### Returns

`void`

#### Defined in

public/services/AlertService/AlertService.tsx:50

___

### isActive

• **isActive**: (`id`: `Id`) => `boolean` = `toast.isActive`

#### Type declaration

▸ (`id`): `boolean`

return true if one container is displaying the toast

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Id` |

##### Returns

`boolean`

#### Defined in

public/services/AlertService/AlertService.tsx:51

___

### update

• **update**: (`toastId`: `Id`, `options?`: `UpdateOptions`) => `void` = `toast.update`

#### Type declaration

▸ (`toastId`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `toastId` | `Id` |
| `options?` | `UpdateOptions` |

##### Returns

`void`

#### Defined in

public/services/AlertService/AlertService.tsx:52

## Methods

### danger

▸ **danger**(`props`, `options?`): `void` \| `ReactText`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AlertProps`](../wiki/AlertProps) |
| `options?` | [`CustomOptions`](../wiki/CustomOptions) |

#### Returns

`void` \| `ReactText`

#### Defined in

public/services/AlertService/AlertService.tsx:27

___

### info

▸ **info**(`props`, `options?`): `void` \| `ReactText`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AlertProps`](../wiki/AlertProps) |
| `options?` | [`CustomOptions`](../wiki/CustomOptions) |

#### Returns

`void` \| `ReactText`

#### Defined in

public/services/AlertService/AlertService.tsx:9

___

### invalidForm

▸ **invalidForm**(`options?`): `void` \| `ReactText`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CustomOptions`](../wiki/CustomOptions) |

#### Returns

`void` \| `ReactText`

#### Defined in

public/services/AlertService/AlertService.tsx:33

___

### showAlert

▸ **showAlert**(`props`, `__namedParameters?`, `type?`): `void` \| `ReactText`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AlertProps`](../wiki/AlertProps) |
| `__namedParameters` | [`CustomOptions`](../wiki/CustomOptions) |
| `type?` | [`AlertType`](../wiki/AlertType) |

#### Returns

`void` \| `ReactText`

#### Defined in

public/services/AlertService/AlertService.tsx:54

___

### success

▸ **success**(`props`, `options?`): `void` \| `ReactText`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AlertProps`](../wiki/AlertProps) |
| `options?` | [`CustomOptions`](../wiki/CustomOptions) |

#### Returns

`void` \| `ReactText`

#### Defined in

public/services/AlertService/AlertService.tsx:15

___

### warning

▸ **warning**(`props`, `options?`): `void` \| `ReactText`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`AlertProps`](../wiki/AlertProps) |
| `options?` | [`CustomOptions`](../wiki/CustomOptions) |

#### Returns

`void` \| `ReactText`

#### Defined in

public/services/AlertService/AlertService.tsx:21

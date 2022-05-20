# Class: BaseMultiEntityFacade<S, SE, Q\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityStore`](../wiki/BaseMultiEntityStore)<`any`\> |
| `SE` | `SE` |
| `Q` | extends [`BaseMultiEntityQuery`](../wiki/BaseMultiEntityQuery)<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

## Table of contents

### Constructors

- [constructor](../wiki/BaseMultiEntityFacade#constructor)

### Properties

- [getIsCreating](../wiki/BaseMultiEntityFacade#getiscreating)
- [getIsFetching](../wiki/BaseMultiEntityFacade#getisfetching)
- [getIsRemoving](../wiki/BaseMultiEntityFacade#getisremoving)
- [getIsUpdating](../wiki/BaseMultiEntityFacade#getisupdating)
- [getItem](../wiki/BaseMultiEntityFacade#getitem)
- [getItemError](../wiki/BaseMultiEntityFacade#getitemerror)
- [getItemValue](../wiki/BaseMultiEntityFacade#getitemvalue)
- [isCreating$](../wiki/BaseMultiEntityFacade#iscreating$)
- [isUpdating$](../wiki/BaseMultiEntityFacade#isupdating$)
- [query](../wiki/BaseMultiEntityFacade#query)
- [selectItem](../wiki/BaseMultiEntityFacade#selectitem)
- [selectItemError](../wiki/BaseMultiEntityFacade#selectitemerror)
- [selectItemIsCreating](../wiki/BaseMultiEntityFacade#selectitemiscreating)
- [selectItemIsFetching](../wiki/BaseMultiEntityFacade#selectitemisfetching)
- [selectItemIsRemoving](../wiki/BaseMultiEntityFacade#selectitemisremoving)
- [selectItemIsUpdating](../wiki/BaseMultiEntityFacade#selectitemisupdating)
- [selectItemValue](../wiki/BaseMultiEntityFacade#selectitemvalue)
- [service](../wiki/BaseMultiEntityFacade#service)
- [store](../wiki/BaseMultiEntityFacade#store)

## Constructors

### constructor

• **new BaseMultiEntityFacade**<`S`, `SE`, `Q`\>(`store`, `service`, `query`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityStore`](../wiki/BaseMultiEntityStore)<`any`, `unknown`, `unknown`, `S`\> |
| `SE` | `SE` |
| `Q` | extends [`BaseMultiEntityQuery`](../wiki/BaseMultiEntityQuery)<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>, `Q`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `S` |
| `service` | `SE` |
| `query` | `Q` |

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:10

## Properties

### getIsCreating

• `Readonly` **getIsCreating**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `undefined` \| `boolean`

#### Type declaration

▸ (`uuid`): `undefined` \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:17

___

### getIsFetching

• `Readonly` **getIsFetching**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `undefined` \| `boolean`

#### Type declaration

▸ (`uuid`): `undefined` \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:15

___

### getIsRemoving

• `Readonly` **getIsRemoving**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `undefined` \| `boolean`

#### Type declaration

▸ (`uuid`): `undefined` \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:18

___

### getIsUpdating

• `Readonly` **getIsUpdating**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `undefined` \| `boolean`

#### Type declaration

▸ (`uuid`): `undefined` \| `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:16

___

### getItem

• `Readonly` **getItem**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>

#### Type declaration

▸ (`uuid`): `undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:12

___

### getItemError

• `Readonly` **getItemError**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `any`

#### Type declaration

▸ (`uuid`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`any`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:14

___

### getItemValue

• `Readonly` **getItemValue**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>[``"value"``]

#### Type declaration

▸ (`uuid`): `undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>[``"value"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>[``"value"``]

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:13

___

### isCreating$

• `Readonly` **isCreating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:28

___

### isUpdating$

• `Readonly` **isUpdating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:29

___

### query

• `Protected` **query**: `Q`

___

### selectItem

• `Readonly` **selectItem**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `Observable`<`undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>\>

#### Type declaration

▸ (`uuid`): `Observable`<`undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`Observable`<`undefined` \| `getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:20

___

### selectItemError

• `Readonly` **selectItemError**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `Observable`<`any`\>

#### Type declaration

▸ (`uuid`): `Observable`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`Observable`<`any`\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:22

___

### selectItemIsCreating

• `Readonly` **selectItemIsCreating**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Type declaration

▸ (`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:25

___

### selectItemIsFetching

• `Readonly` **selectItemIsFetching**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Type declaration

▸ (`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:23

___

### selectItemIsRemoving

• `Readonly` **selectItemIsRemoving**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Type declaration

▸ (`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:26

___

### selectItemIsUpdating

• `Readonly` **selectItemIsUpdating**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Type declaration

▸ (`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:24

___

### selectItemValue

• `Readonly` **selectItemValue**: (`uuid`: `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>) => `Observable`<`getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>[``"value"``]\>

#### Type declaration

▸ (`uuid`): `Observable`<`getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>[``"value"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\> |

##### Returns

`Observable`<`getEntityType`<[`GetBaseMultiEntityStateByStore`](../wiki/Exports#getbasemultientitystatebystore)<`S`\>\>[``"value"``]\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.facade.ts:21

___

### service

• `Protected` **service**: `SE`

___

### store

• `Protected` **store**: `S`

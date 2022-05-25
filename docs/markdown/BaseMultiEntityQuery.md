# Class: BaseMultiEntityQuery<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`\> |

## Hierarchy

- `QueryEntity`<`S`\>

  ↳ **`BaseMultiEntityQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/BaseMultiEntityQuery#constructor)

### Properties

- [isCreating$](../wiki/BaseMultiEntityQuery#iscreating$)
- [isUpdating$](../wiki/BaseMultiEntityQuery#isupdating$)
- [store](../wiki/BaseMultiEntityQuery#store)

### Methods

- [convertBoolToLoadingState](../wiki/BaseMultiEntityQuery#convertbooltoloadingstate)
- [convertModelToLoadingState](../wiki/BaseMultiEntityQuery#convertmodeltoloadingstate)
- [getItem](../wiki/BaseMultiEntityQuery#getitem)
- [getItemError](../wiki/BaseMultiEntityQuery#getitemerror)
- [getItemIsCreating](../wiki/BaseMultiEntityQuery#getitemiscreating)
- [getItemIsFetching](../wiki/BaseMultiEntityQuery#getitemisfetching)
- [getItemIsRemoving](../wiki/BaseMultiEntityQuery#getitemisremoving)
- [getItemIsUpdating](../wiki/BaseMultiEntityQuery#getitemisupdating)
- [getItemValue](../wiki/BaseMultiEntityQuery#getitemvalue)
- [selectItem](../wiki/BaseMultiEntityQuery#selectitem)
- [selectItemError](../wiki/BaseMultiEntityQuery#selectitemerror)
- [selectItemIsCreating](../wiki/BaseMultiEntityQuery#selectitemiscreating)
- [selectItemIsFetching](../wiki/BaseMultiEntityQuery#selectitemisfetching)
- [selectItemIsRemoving](../wiki/BaseMultiEntityQuery#selectitemisremoving)
- [selectItemIsUpdating](../wiki/BaseMultiEntityQuery#selectitemisupdating)
- [selectItemValue](../wiki/BaseMultiEntityQuery#selectitemvalue)

## Constructors

### constructor

• **new BaseMultiEntityQuery**<`S`\>(`store`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`BaseMultiEntityStore`](../wiki/BaseMultiEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\> |
| `options?` | `QueryConfigOptions`<`any`\> |

#### Overrides

QueryEntity&lt;S\&gt;.constructor

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:11

## Properties

### isCreating$

• **isCreating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:76

___

### isUpdating$

• **isUpdating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:79

___

### store

• `Protected` **store**: [`BaseMultiEntityStore`](../wiki/BaseMultiEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\>

#### Inherited from

QueryEntity.store

## Methods

### convertBoolToLoadingState

▸ `Protected` **convertBoolToLoadingState**(`bool`): [`LoadingState`](../wiki/LoadingState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

[`LoadingState`](../wiki/LoadingState)

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:26

___

### convertModelToLoadingState

▸ `Protected` **convertModelToLoadingState**(`item`, `property`): [`LoadingState`](../wiki/LoadingState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `undefined` \| `getEntityType`<`S`\> |
| `property` | keyof `getEntityType`<`S`\> |

#### Returns

[`LoadingState`](../wiki/LoadingState)

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:15

___

### getItem

▸ **getItem**(`uuid`): `undefined` \| `getEntityType`<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `getEntityType`<`S`\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:34

___

### getItemError

▸ **getItemError**(`uuid`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`any`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:37

___

### getItemIsCreating

▸ **getItemIsCreating**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:40

___

### getItemIsFetching

▸ **getItemIsFetching**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:38

___

### getItemIsRemoving

▸ **getItemIsRemoving**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:44

___

### getItemIsUpdating

▸ **getItemIsUpdating**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:42

___

### getItemValue

▸ **getItemValue**(`uuid`): `undefined` \| `getEntityType`<`S`\>[``"value"``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `getEntityType`<`S`\>[``"value"``]

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:35

___

### selectItem

▸ **selectItem**(`uuid`): `Observable`<`undefined` \| `getEntityType`<`S`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<`undefined` \| `getEntityType`<`S`\>\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:47

___

### selectItemError

▸ **selectItemError**(`uuid`): `Observable`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<`any`\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:54

___

### selectItemIsCreating

▸ **selectItemIsCreating**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:63

___

### selectItemIsFetching

▸ **selectItemIsFetching**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:59

___

### selectItemIsRemoving

▸ **selectItemIsRemoving**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:71

___

### selectItemIsUpdating

▸ **selectItemIsUpdating**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:67

___

### selectItemValue

▸ **selectItemValue**(`uuid`): `Observable`<`getEntityType`<`S`\>[``"value"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<`getEntityType`<`S`\>[``"value"``]\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:49

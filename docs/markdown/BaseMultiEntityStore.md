# Class: BaseMultiEntityStore<S, EntityType, IDType\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`\> |
| `EntityType` | `getEntityType`<`S`\> |
| `IDType` | `getIDType`<`S`\> |

## Hierarchy

- `EntityStore`<`S`, `EntityType`, `IDType`\>

  ↳ **`BaseMultiEntityStore`**

## Table of contents

### Constructors

- [constructor](../wiki/BaseMultiEntityStore#constructor)

### Methods

- [addItem](../wiki/BaseMultiEntityStore#additem)
- [setIsCreating](../wiki/BaseMultiEntityStore#setiscreating)
- [setIsUpdating](../wiki/BaseMultiEntityStore#setisupdating)
- [setItemError](../wiki/BaseMultiEntityStore#setitemerror)
- [setItemIsCreating](../wiki/BaseMultiEntityStore#setitemiscreating)
- [setItemIsFetching](../wiki/BaseMultiEntityStore#setitemisfetching)
- [setItemIsRemoving](../wiki/BaseMultiEntityStore#setitemisremoving)
- [setItemIsUpdating](../wiki/BaseMultiEntityStore#setitemisupdating)
- [setItemValue](../wiki/BaseMultiEntityStore#setitemvalue)

## Constructors

### constructor

• **new BaseMultiEntityStore**<`S`, `EntityType`, `IDType`\>(`initialState?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`, `S`\> |
| `EntityType` | `getEntityType`<`S`\> |
| `IDType` | `getIDType`<`S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `Partial`<`S`\> |
| `options?` | `Partial`<`StoreConfigOptions`\> |

#### Overrides

EntityStore&lt;S, EntityType, IDType\&gt;.constructor

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:15

## Methods

### addItem

▸ **addItem**(`id`, `item?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `IDType` |
| `item?` | `EntityType` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:28

___

### setIsCreating

▸ **setIsCreating**(`isCreating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isCreating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:89

___

### setIsUpdating

▸ **setIsUpdating**(`isUpdating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isUpdating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:83

___

### setItemError

▸ **setItemError**(`id`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `IDType` |
| `error` | `any` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:47

___

### setItemIsCreating

▸ **setItemIsCreating**(`uuid`, `isCreating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isCreating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:69

___

### setItemIsFetching

▸ **setItemIsFetching**(`uuid`, `isFetching?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isFetching` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:55

___

### setItemIsRemoving

▸ **setItemIsRemoving**(`uuid`, `isRemoving?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isRemoving` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:62

___

### setItemIsUpdating

▸ **setItemIsUpdating**(`uuid`, `isUpdating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isUpdating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:76

___

### setItemValue

▸ **setItemValue**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `IDType` |
| `value` | `getEntityType`<`S`\>[``"value"``] |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:38

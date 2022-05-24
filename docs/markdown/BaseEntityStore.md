# Class: BaseEntityStore<S, EntityType, IDType\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityState`](../wiki/BaseEntityState)<`any`, `any`\> |
| `EntityType` | `getEntityType`<`S`\> |
| `IDType` | `getIDType`<`S`\> |

## Hierarchy

- `EntityStore`<`S`, `EntityType`, `IDType`\>

  ↳ **`BaseEntityStore`**

## Table of contents

### Constructors

- [constructor](../wiki/BaseEntityStore#constructor)

### Methods

- [setIsCreating](../wiki/BaseEntityStore#setiscreating)
- [setIsFetching](../wiki/BaseEntityStore#setisfetching)
- [setIsFetchingOne](../wiki/BaseEntityStore#setisfetchingone)
- [setIsRemoving](../wiki/BaseEntityStore#setisremoving)
- [setIsUpdating](../wiki/BaseEntityStore#setisupdating)

## Constructors

### constructor

• **new BaseEntityStore**<`S`, `EntityType`, `IDType`\>(`initialState?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityState`](../wiki/BaseEntityState)<`any`, `any`, `S`\> |
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

public/store/baseEntity/baseEntity.store.ts:19

## Methods

### setIsCreating

▸ **setIsCreating**(`isCreating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isCreating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseEntity/baseEntity.store.ts:50

___

### setIsFetching

▸ **setIsFetching**(`isFetching?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isFetching` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseEntity/baseEntity.store.ts:32

___

### setIsFetchingOne

▸ **setIsFetchingOne**(`isFetchingOne?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isFetchingOne` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseEntity/baseEntity.store.ts:38

___

### setIsRemoving

▸ **setIsRemoving**(`isRemoving?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isRemoving` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseEntity/baseEntity.store.ts:56

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

public/store/baseEntity/baseEntity.store.ts:44

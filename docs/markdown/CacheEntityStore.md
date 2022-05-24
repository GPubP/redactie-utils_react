# Class: CacheEntityStore<UIState, State, EntityType, IDType\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `UIState` | extends [`CacheEntityUIState`](../wiki/Exports#cacheentityuistate) = `any` |
| `State` | extends [`CacheEntityState`](../wiki/CacheEntityState) = `any` |
| `EntityType` | `getEntityType`<`State`\> |
| `IDType` | `getIDType`<`State`\> |

## Hierarchy

- `EntityStore`<`State`, `EntityType`, `IDType`\>

  ↳ **`CacheEntityStore`**

## Table of contents

### Constructors

- [constructor](../wiki/CacheEntityStore#constructor)

### Properties

- [ui](../wiki/CacheEntityStore#ui)

### Methods

- [setIsCreating](../wiki/CacheEntityStore#setiscreating)
- [setIsDeletingEntity](../wiki/CacheEntityStore#setisdeletingentity)
- [setIsFetching](../wiki/CacheEntityStore#setisfetching)
- [setIsFetchingEntity](../wiki/CacheEntityStore#setisfetchingentity)
- [setIsUpdatingEntity](../wiki/CacheEntityStore#setisupdatingentity)

## Constructors

### constructor

• **new CacheEntityStore**<`UIState`, `State`, `EntityType`, `IDType`\>(`initialState?`, `initialUIState?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `UIState` | extends `EntityState`<`any`, `any`, `UIState`\> = `any` |
| `State` | extends [`CacheEntityState`](../wiki/CacheEntityState)<`any`, `any`, `State`\> = `any` |
| `EntityType` | `getEntityType`<`State`\> |
| `IDType` | `getIDType`<`State`\> |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialState` | `Partial`<`State`\> | `undefined` |
| `initialUIState` | `Record`<`string`, `any`\> | `DEFAULT_INITIAL_UI_STATE` |
| `options?` | `Partial`<`StoreConfigOptions`\> | `undefined` |

#### Overrides

EntityStore&lt;State, EntityType, IDType\&gt;.constructor

#### Defined in

public/store/cacheEntity/cacheEntity.store.ts:22

## Properties

### ui

• **ui**: `EntityUIStore`<`UIState`, `any`\>

#### Overrides

EntityStore.ui

#### Defined in

public/store/cacheEntity/cacheEntity.store.ts:20

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

public/store/cacheEntity/cacheEntity.store.ts:48

___

### setIsDeletingEntity

▸ **setIsDeletingEntity**(`isDeleting?`, `entityId`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isDeleting` | `boolean` | `false` |
| `entityId` | `OrArray`<`getIDType`<`UIState`\>\> | `undefined` |

#### Returns

`void`

#### Defined in

public/store/cacheEntity/cacheEntity.store.ts:64

___

### setIsFetching

▸ **setIsFetching**(`isFetching?`): `void`

GLOBAL UI STATE

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isFetching` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/cacheEntity/cacheEntity.store.ts:44

___

### setIsFetchingEntity

▸ **setIsFetchingEntity**(`isFetching?`, `entityId`): `void`

ENTITY UI STATE

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isFetching` | `boolean` | `false` |
| `entityId` | `OrArray`<`getIDType`<`UIState`\>\> | `undefined` |

#### Returns

`void`

#### Defined in

public/store/cacheEntity/cacheEntity.store.ts:56

___

### setIsUpdatingEntity

▸ **setIsUpdatingEntity**(`isUpdating?`, `entityId`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isUpdating` | `boolean` | `false` |
| `entityId` | `OrArray`<`getIDType`<`UIState`\>\> | `undefined` |

#### Returns

`void`

#### Defined in

public/store/cacheEntity/cacheEntity.store.ts:60

# Class: CacheEntityQuery<UIState, State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `UIState` | extends [`CacheEntityUIState`](../wiki/Exports#cacheentityuistate) = `any` |
| `State` | extends [`CacheEntityState`](../wiki/CacheEntityState)<`unknown`, `unknown`\> = `any` |

## Hierarchy

- `QueryEntity`<`State`\>

  ↳ **`CacheEntityQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/CacheEntityQuery#constructor)

### Properties

- [error$](../wiki/CacheEntityQuery#error$)
- [isCreating$](../wiki/CacheEntityQuery#iscreating$)
- [isFetching$](../wiki/CacheEntityQuery#isfetching$)
- [store](../wiki/CacheEntityQuery#store)
- [ui](../wiki/CacheEntityQuery#ui)

### Methods

- [selectEntityError](../wiki/CacheEntityQuery#selectentityerror)
- [selectIsDeletingEntity](../wiki/CacheEntityQuery#selectisdeletingentity)
- [selectIsFetchingEntity](../wiki/CacheEntityQuery#selectisfetchingentity)
- [selectIsProp](../wiki/CacheEntityQuery#selectisprop)
- [selectIsUpdatingEntity](../wiki/CacheEntityQuery#selectisupdatingentity)

## Constructors

### constructor

• **new CacheEntityQuery**<`UIState`, `State`\>(`store`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `UIState` | extends `EntityState`<`any`, `any`, `UIState`\> = `any` |
| `State` | extends [`CacheEntityState`](../wiki/CacheEntityState)<`unknown`, `unknown`, `State`\> = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`CacheEntityStore`](../wiki/CacheEntityStore)<`UIState`, `State`, `getEntityType`<`State`\>, `getIDType`<`State`\>\> |
| `options?` | `QueryConfigOptions`<`any`\> |

#### Overrides

QueryEntity&lt;State\&gt;.constructor

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:15

## Properties

### error$

• **error$**: `Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:26

___

### isCreating$

• **isCreating$**: `Observable`<`State`[``"isCreating"``]\>

GLOBAL UI STATES

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:24

___

### isFetching$

• **isFetching$**: `Observable`<`State`[``"isFetching"``]\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:25

___

### store

• `Protected` **store**: [`CacheEntityStore`](../wiki/CacheEntityStore)<`UIState`, `State`, `getEntityType`<`State`\>, `getIDType`<`State`\>\>

#### Inherited from

QueryEntity.store

___

### ui

• **ui**: `EntityUIQuery`<`UIState`, `any`\>

#### Overrides

QueryEntity.ui

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:13

## Methods

### selectEntityError

▸ **selectEntityError**(`entityId`): `Observable`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:44

___

### selectIsDeletingEntity

▸ **selectIsDeletingEntity**(`entityId`): `Observable`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:40

___

### selectIsFetchingEntity

▸ **selectIsFetchingEntity**(`entityId`): `Observable`<`boolean`\>

ENTITY UI STATE QUERIES

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:32

___

### selectIsProp

▸ `Protected` **selectIsProp**(`prop`, `entityId`): `Observable`<`boolean`\>

HELPERS

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `string` |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:55

___

### selectIsUpdatingEntity

▸ **selectIsUpdatingEntity**(`entityId`): `Observable`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:36

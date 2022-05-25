# Class: BaseEntityQuery<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityState`](../wiki/BaseEntityState)<`unknown`, `unknown`\> |

## Hierarchy

- `QueryEntity`<`S`\>

  ↳ **`BaseEntityQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/BaseEntityQuery#constructor)

### Properties

- [error$](../wiki/BaseEntityQuery#error$)
- [isCreating$](../wiki/BaseEntityQuery#iscreating$)
- [isFetching$](../wiki/BaseEntityQuery#isfetching$)
- [isFetchingOne$](../wiki/BaseEntityQuery#isfetchingone$)
- [isRemoving$](../wiki/BaseEntityQuery#isremoving$)
- [isUpdating$](../wiki/BaseEntityQuery#isupdating$)
- [store](../wiki/BaseEntityQuery#store)

### Methods

- [convertBoolToLoadingState](../wiki/BaseEntityQuery#convertbooltoloadingstate)

## Constructors

### constructor

• **new BaseEntityQuery**<`S`\>(`store`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityState`](../wiki/BaseEntityState)<`unknown`, `unknown`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`BaseEntityStore`](../wiki/BaseEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\> |
| `options?` | `QueryConfigOptions`<`any`\> |

#### Overrides

QueryEntity&lt;S\&gt;.constructor

#### Defined in

public/store/baseEntity/baseEntity.query.ts:10

## Properties

### error$

• **error$**: `Observable`<`any`\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:22

___

### isCreating$

• **isCreating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:31

___

### isFetching$

• **isFetching$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:25

___

### isFetchingOne$

• **isFetchingOne$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:28

___

### isRemoving$

• **isRemoving$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:37

___

### isUpdating$

• **isUpdating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:34

___

### store

• `Protected` **store**: [`BaseEntityStore`](../wiki/BaseEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\>

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

public/store/baseEntity/baseEntity.query.ts:14

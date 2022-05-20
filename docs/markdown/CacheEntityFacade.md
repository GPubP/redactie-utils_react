# Class: CacheEntityFacade<Store, Service, Query\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Store` | extends [`CacheEntityStore`](../wiki/CacheEntityStore)<`any`, `any`, `any`\> |
| `Service` | `Service` |
| `Query` | extends [`CacheEntityQuery`](../wiki/CacheEntityQuery)<`any`, `any`\> |

## Table of contents

### Constructors

- [constructor](../wiki/CacheEntityFacade#constructor)

### Properties

- [error$](../wiki/CacheEntityFacade#error$)
- [isCreating$](../wiki/CacheEntityFacade#iscreating$)
- [isFetching$](../wiki/CacheEntityFacade#isfetching$)
- [query](../wiki/CacheEntityFacade#query)
- [service](../wiki/CacheEntityFacade#service)
- [store](../wiki/CacheEntityFacade#store)

### Methods

- [selectEntityError](../wiki/CacheEntityFacade#selectentityerror)
- [selectIsDeletingEntity](../wiki/CacheEntityFacade#selectisdeletingentity)
- [selectIsFetchingEntity](../wiki/CacheEntityFacade#selectisfetchingentity)
- [selectIsUpdatingEntity](../wiki/CacheEntityFacade#selectisupdatingentity)

## Constructors

### constructor

• **new CacheEntityFacade**<`Store`, `Service`, `Query`\>(`store`, `service`, `query`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Store` | extends [`CacheEntityStore`](../wiki/CacheEntityStore)<`any`, `any`, `any`, `unknown`, `Store`\> |
| `Service` | `Service` |
| `Query` | extends [`CacheEntityQuery`](../wiki/CacheEntityQuery)<`any`, `any`, `Query`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `Store` |
| `service` | `Service` |
| `query` | `Query` |

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:12

## Properties

### error$

• `Readonly` **error$**: `Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:16

___

### isCreating$

• `Readonly` **isCreating$**: `Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:15

___

### isFetching$

• `Readonly` **isFetching$**: `Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:14

___

### query

• `Protected` **query**: `Query`

___

### service

• `Protected` **service**: `Service`

___

### store

• `Protected` **store**: `Store`

## Methods

### selectEntityError

▸ **selectEntityError**(`entityId`): `Observable`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `unknown` |

#### Returns

`Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:30

___

### selectIsDeletingEntity

▸ **selectIsDeletingEntity**(`entityId`): `Observable`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `unknown` |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:26

___

### selectIsFetchingEntity

▸ **selectIsFetchingEntity**(`entityId`): `Observable`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `unknown` |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:18

___

### selectIsUpdatingEntity

▸ **selectIsUpdatingEntity**(`entityId`): `Observable`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `unknown` |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.facade.ts:22

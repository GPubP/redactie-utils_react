# Class: BaseEntityFacade<S, SE, Q\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityStore`](../wiki/BaseEntityStore)<`any`, `any`\> |
| `SE` | `SE` |
| `Q` | extends [`BaseEntityQuery`](../wiki/BaseEntityQuery)<`any`\> |

## Table of contents

### Constructors

- [constructor](../wiki/BaseEntityFacade#constructor)

### Properties

- [error$](../wiki/BaseEntityFacade#error$)
- [isCreating$](../wiki/BaseEntityFacade#iscreating$)
- [isFetching$](../wiki/BaseEntityFacade#isfetching$)
- [isFetchingOne$](../wiki/BaseEntityFacade#isfetchingone$)
- [isRemoving$](../wiki/BaseEntityFacade#isremoving$)
- [isUpdating$](../wiki/BaseEntityFacade#isupdating$)
- [query](../wiki/BaseEntityFacade#query)
- [service](../wiki/BaseEntityFacade#service)
- [store](../wiki/BaseEntityFacade#store)

## Constructors

### constructor

• **new BaseEntityFacade**<`S`, `SE`, `Q`\>(`store`, `service`, `query`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityStore`](../wiki/BaseEntityStore)<`any`, `any`, `unknown`, `S`\> |
| `SE` | `SE` |
| `Q` | extends [`BaseEntityQuery`](../wiki/BaseEntityQuery)<`any`, `Q`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | `S` |
| `service` | `SE` |
| `query` | `Q` |

#### Defined in

public/store/baseEntity/baseEntity.facade.ts:9

## Properties

### error$

• `Readonly` **error$**: `Observable`<`any`\>

#### Defined in

public/store/baseEntity/baseEntity.facade.ts:16

___

### isCreating$

• `Readonly` **isCreating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.facade.ts:13

___

### isFetching$

• `Readonly` **isFetching$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.facade.ts:11

___

### isFetchingOne$

• `Readonly` **isFetchingOne$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.facade.ts:12

___

### isRemoving$

• `Readonly` **isRemoving$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.facade.ts:15

___

### isUpdating$

• `Readonly` **isUpdating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.facade.ts:14

___

### query

• `Protected` **query**: `Q`

___

### service

• `Protected` **service**: `SE`

___

### store

• `Protected` **store**: `S`

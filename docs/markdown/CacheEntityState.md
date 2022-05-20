# Interface: CacheEntityState<State, IDType\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | `any` |
| `IDType` | `any` |

## Hierarchy

- `EntityState`<`State`, `IDType`\>

  ↳ **`CacheEntityState`**

## Table of contents

### Properties

- [entities](../wiki/CacheEntityState#entities)
- [error](../wiki/CacheEntityState#error)
- [ids](../wiki/CacheEntityState#ids)
- [isCreating](../wiki/CacheEntityState#iscreating)
- [isFetching](../wiki/CacheEntityState#isfetching)
- [loading](../wiki/CacheEntityState#loading)

## Properties

### entities

• `Optional` **entities**: `HashMap`<`State`\>

#### Inherited from

EntityState.entities

#### Defined in

node_modules/@datorama/akita/src/types.d.ts:7

___

### error

• `Optional` **error**: `any`

#### Inherited from

EntityState.error

#### Defined in

node_modules/@datorama/akita/src/types.d.ts:10

___

### ids

• `Optional` **ids**: `IDType`[]

#### Inherited from

EntityState.ids

#### Defined in

node_modules/@datorama/akita/src/types.d.ts:8

___

### isCreating

• **isCreating**: `boolean`

#### Defined in

public/store/cacheEntity/cacheEntity.state.ts:12

___

### isFetching

• **isFetching**: `boolean`

#### Defined in

public/store/cacheEntity/cacheEntity.state.ts:11

___

### loading

• `Optional` **loading**: `boolean`

#### Inherited from

EntityState.loading

#### Defined in

node_modules/@datorama/akita/src/types.d.ts:9

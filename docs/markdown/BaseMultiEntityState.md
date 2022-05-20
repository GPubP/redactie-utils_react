# Interface: BaseMultiEntityState<E, IDType\>

## Type parameters

| Name |
| :------ |
| `E` |
| `IDType` |

## Hierarchy

- `EntityState`<`BaseMultiEntityModel`<`E`, `IDType`\>, `IDType`\>

  ↳ **`BaseMultiEntityState`**

## Table of contents

### Properties

- [entities](../wiki/BaseMultiEntityState#entities)
- [error](../wiki/BaseMultiEntityState#error)
- [ids](../wiki/BaseMultiEntityState#ids)
- [isCreating](../wiki/BaseMultiEntityState#iscreating)
- [isUpdating](../wiki/BaseMultiEntityState#isupdating)
- [loading](../wiki/BaseMultiEntityState#loading)

## Properties

### entities

• `Optional` **entities**: `HashMap`<`BaseMultiEntityModel`<`E`, `IDType`\>\>

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

public/store/baseMultiEntityStore/baseMultiEntity.state.ts:8

___

### isUpdating

• **isUpdating**: `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.state.ts:9

___

### loading

• `Optional` **loading**: `boolean`

#### Inherited from

EntityState.loading

#### Defined in

node_modules/@datorama/akita/src/types.d.ts:9

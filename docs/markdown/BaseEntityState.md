# Interface: BaseEntityState<E, IDType\>

## Type parameters

| Name |
| :------ |
| `E` |
| `IDType` |

## Hierarchy

- `EntityState`<`E`, `IDType`\>

  ↳ **`BaseEntityState`**

## Table of contents

### Properties

- [entities](../wiki/BaseEntityState#entities)
- [error](../wiki/BaseEntityState#error)
- [ids](../wiki/BaseEntityState#ids)
- [isCreating](../wiki/BaseEntityState#iscreating)
- [isFetching](../wiki/BaseEntityState#isfetching)
- [isFetchingOne](../wiki/BaseEntityState#isfetchingone)
- [isRemoving](../wiki/BaseEntityState#isremoving)
- [isUpdating](../wiki/BaseEntityState#isupdating)
- [loading](../wiki/BaseEntityState#loading)

## Properties

### entities

• `Optional` **entities**: `HashMap`<`E`\>

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

public/store/baseEntity/baseEntity.state.ts:6

___

### isFetching

• **isFetching**: `boolean`

#### Defined in

public/store/baseEntity/baseEntity.state.ts:4

___

### isFetchingOne

• **isFetchingOne**: `boolean`

#### Defined in

public/store/baseEntity/baseEntity.state.ts:5

___

### isRemoving

• **isRemoving**: `boolean`

#### Defined in

public/store/baseEntity/baseEntity.state.ts:8

___

### isUpdating

• **isUpdating**: `boolean`

#### Defined in

public/store/baseEntity/baseEntity.state.ts:7

___

### loading

• `Optional` **loading**: `boolean`

#### Inherited from

EntityState.loading

#### Defined in

node_modules/@datorama/akita/src/types.d.ts:9

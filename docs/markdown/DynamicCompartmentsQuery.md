# Class: DynamicCompartmentsQuery<State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

## Hierarchy

- `QueryEntity`<`State`\>

  ↳ **`DynamicCompartmentsQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/DynamicCompartmentsQuery#constructor)

### Properties

- [active$](../wiki/DynamicCompartmentsQuery#active$)
- [all$](../wiki/DynamicCompartmentsQuery#all$)
- [store](../wiki/DynamicCompartmentsQuery#store)

## Constructors

### constructor

• **new DynamicCompartmentsQuery**<`State`\>(`store`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`, `State`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`DynamicCompartmentsStore`](../wiki/DynamicCompartmentsStore)<`State`\> |

#### Overrides

QueryEntity&lt;State\&gt;.constructor

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.query.ts:15

## Properties

### active$

• **active$**: `State`[``"active"``] extends `any`[] ? `Observable`<`getEntityType`<`State`\>[]\> : `Observable`<`getEntityType`<`State`\>\>

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.query.ts:13

___

### all$

• **all$**: `Observable`<`getEntityType`<`State`\>[]\>

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.query.ts:12

___

### store

• `Protected` **store**: [`DynamicCompartmentsStore`](../wiki/DynamicCompartmentsStore)<`State`\>

#### Inherited from

QueryEntity.store

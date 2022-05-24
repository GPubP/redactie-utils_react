# Class: DynamicCompartmentsStore<State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

## Hierarchy

- `EntityStore`<`State`\>

  ↳ **`DynamicCompartmentsStore`**

## Table of contents

### Constructors

- [constructor](../wiki/DynamicCompartmentsStore#constructor)

## Constructors

### constructor

• **new DynamicCompartmentsStore**<`State`\>(`name`, `initialState?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`, `State`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `initialState?` | `Partial`<`State`\> |

#### Overrides

EntityStore&lt;State\&gt;.constructor

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.store.ts:11

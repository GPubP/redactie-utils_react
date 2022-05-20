# Interface: DynamicCompartmentModel

## Table of contents

### Properties

- [isValid](../wiki/DynamicCompartmentModel#isvalid)
- [name](../wiki/DynamicCompartmentModel#name)
- [slug](../wiki/DynamicCompartmentModel#slug)

### Methods

- [validate](../wiki/DynamicCompartmentModel#validate)

## Properties

### isValid

• `Optional` **isValid**: `boolean`

Indicates if the compartment is valid

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.model.ts:17

___

### name

• **name**: `string`

Compartment name

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.model.ts:9

___

### slug

• `Optional` **slug**: `string`

Compartments slug

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.model.ts:13

## Methods

### validate

▸ `Optional` **validate**<`Values`, `Meta`\>(`values`, `meta`): `boolean`

Validation function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Values` | extends `Record`<`string`, `any`\> = {} |
| `Meta` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Values` |
| `meta` | `Meta` |

#### Returns

`boolean`

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.model.ts:21

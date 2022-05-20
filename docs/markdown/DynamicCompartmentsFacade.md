# Class: DynamicCompartmentsFacade<State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

## Table of contents

### Constructors

- [constructor](../wiki/DynamicCompartmentsFacade#constructor)

### Properties

- [active$](../wiki/DynamicCompartmentsFacade#active$)
- [all$](../wiki/DynamicCompartmentsFacade#all$)
- [query](../wiki/DynamicCompartmentsFacade#query)
- [store](../wiki/DynamicCompartmentsFacade#store)

### Methods

- [clearCompartments](../wiki/DynamicCompartmentsFacade#clearcompartments)
- [register](../wiki/DynamicCompartmentsFacade#register)
- [setActive](../wiki/DynamicCompartmentsFacade#setactive)
- [setActiveByNamOrSlug](../wiki/DynamicCompartmentsFacade#setactivebynamorslug)
- [setValid](../wiki/DynamicCompartmentsFacade#setvalid)
- [validate](../wiki/DynamicCompartmentsFacade#validate)

## Constructors

### constructor

• **new DynamicCompartmentsFacade**<`State`\>(`store`, `query`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`, `State`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`DynamicCompartmentsStore`](../wiki/DynamicCompartmentsStore)<`State`\> |
| `query` | [`DynamicCompartmentsQuery`](../wiki/DynamicCompartmentsQuery)<`State`\> |

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:23

## Properties

### active$

• `Readonly` **active$**: `Observable`<`getEntityType`<`State`\>\>

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:29

___

### all$

• `Readonly` **all$**: `Observable`<`getEntityType`<`State`\>[]\>

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:28

___

### query

• `Protected` **query**: [`DynamicCompartmentsQuery`](../wiki/DynamicCompartmentsQuery)<`State`\>

___

### store

• `Protected` **store**: [`DynamicCompartmentsStore`](../wiki/DynamicCompartmentsStore)<`State`\>

## Methods

### clearCompartments

▸ **clearCompartments**(): `void`

#### Returns

`void`

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:46

___

### register

▸ **register**<`CompartmentType`\>(`data`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CompartmentType` | extends [`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel) = `getEntityType`<`State`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CompartmentType` \| `CompartmentType`[] |
| `options` | [`DynamicCompartmentRegisterOptions`](../wiki/DynamicCompartmentRegisterOptions) |

#### Returns

`void`

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:31

___

### setActive

▸ **setActive**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `State`[``"active"``] |

#### Returns

`void`

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:61

___

### setActiveByNamOrSlug

▸ **setActiveByNamOrSlug**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `State`[``"active"``] |

#### Returns

`void`

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:50

___

### setValid

▸ **setValid**(`name`, `isValid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `isValid` | `boolean` |

#### Returns

`void`

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:65

___

### validate

▸ **validate**(`values`, `meta`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Record`<`string`, `any`\> |
| `meta` | `Record`<`string`, `any`\> |

#### Returns

`boolean`

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.facade.ts:72

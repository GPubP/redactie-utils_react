# Interface: FormikOnChangeHandlerProps

## Table of contents

### Properties

- [delay](../wiki/FormikOnChangeHandlerProps#delay)
- [initialValues](../wiki/FormikOnChangeHandlerProps#initialvalues)
- [values](../wiki/FormikOnChangeHandlerProps#values)

### Methods

- [onChange](../wiki/FormikOnChangeHandlerProps#onchange)
- [onError](../wiki/FormikOnChangeHandlerProps#onerror)

## Properties

### delay

• `Optional` **delay**: `number`

#### Defined in

public/components/FormikOnChangeHandler/FormikOnChangeHandler.types.ts:4

___

### initialValues

• `Optional` **initialValues**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

public/components/FormikOnChangeHandler/FormikOnChangeHandler.types.ts:7

___

### values

• `Optional` **values**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

public/components/FormikOnChangeHandler/FormikOnChangeHandler.types.ts:8

## Methods

### onChange

▸ **onChange**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `FormikValues` |

#### Returns

`void`

#### Defined in

public/components/FormikOnChangeHandler/FormikOnChangeHandler.types.ts:5

___

### onError

▸ `Optional` **onError**(`values`, `errors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `FormikValues` |
| `errors` | `FormikErrors`<`FormikValues`\> |

#### Returns

`void`

#### Defined in

public/components/FormikOnChangeHandler/FormikOnChangeHandler.types.ts:6

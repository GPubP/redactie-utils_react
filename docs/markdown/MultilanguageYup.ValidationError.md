# Class: ValidationError

[MultilanguageYup](../wiki/MultilanguageYup).ValidationError

## Hierarchy

- `Error`

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](../wiki/MultilanguageYup.ValidationError#constructor)

### Properties

- [cause](../wiki/MultilanguageYup.ValidationError#cause)
- [errors](../wiki/MultilanguageYup.ValidationError#errors)
- [inner](../wiki/MultilanguageYup.ValidationError#inner)
- [message](../wiki/MultilanguageYup.ValidationError#message)
- [name](../wiki/MultilanguageYup.ValidationError#name)
- [params](../wiki/MultilanguageYup.ValidationError#params)
- [path](../wiki/MultilanguageYup.ValidationError#path)
- [stack](../wiki/MultilanguageYup.ValidationError#stack)
- [type](../wiki/MultilanguageYup.ValidationError#type)
- [value](../wiki/MultilanguageYup.ValidationError#value)
- [prepareStackTrace](../wiki/MultilanguageYup.ValidationError#preparestacktrace)
- [stackTraceLimit](../wiki/MultilanguageYup.ValidationError#stacktracelimit)

### Methods

- [captureStackTrace](../wiki/MultilanguageYup.ValidationError#capturestacktrace)
- [formatError](../wiki/MultilanguageYup.ValidationError#formaterror)
- [isError](../wiki/MultilanguageYup.ValidationError#iserror)

## Constructors

### constructor

• **new ValidationError**(`errorOrErrors`, `value?`, `field?`, `type?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorOrErrors` | `string` \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError) \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError)[] |
| `value?` | `any` |
| `field?` | `string` |
| `type?` | `string` |

#### Overrides

Error.constructor

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:11

## Properties

### cause

• `Optional` **cause**: `Error`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### errors

• **errors**: `string`[]

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:6

___

### inner

• **inner**: [`ValidationError`](../wiki/MultilanguageYup.ValidationError)[]

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:8

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1022

___

### params

• `Optional` **params**: `Params`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:7

___

### path

• `Optional` **path**: `string`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:4

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1024

___

### type

• `Optional` **type**: `string`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:5

___

### value

• **value**: `any`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:3

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

___

### formatError

▸ `Static` **formatError**(`message`, `params`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `params` | `Params` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:9

___

### isError

▸ `Static` **isError**(`err`): err is ValidationError

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |

#### Returns

err is ValidationError

#### Defined in

node_modules/yup/lib/ValidationError.d.ts:10

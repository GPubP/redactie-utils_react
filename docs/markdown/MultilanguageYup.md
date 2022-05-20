# Namespace: MultilanguageYup

## Table of contents

### References

- [InferType](../wiki/MultilanguageYup#infertype)
- [boolean](../wiki/MultilanguageYup#boolean)

### Namespaces

- [array](../wiki/MultilanguageYup.array)
- [bool](../wiki/MultilanguageYup.bool)
- [date](../wiki/MultilanguageYup.date)
- [mixed](../wiki/MultilanguageYup.mixed)
- [number](../wiki/MultilanguageYup.number)
- [object](../wiki/MultilanguageYup.object)
- [string](../wiki/MultilanguageYup.string)

### Classes

- [ArraySchema](../wiki/MultilanguageYup.ArraySchema)
- [BaseSchema](../wiki/MultilanguageYup.BaseSchema)
- [BooleanSchema](../wiki/MultilanguageYup.BooleanSchema)
- [DateSchema](../wiki/MultilanguageYup.DateSchema)
- [NumberSchema](../wiki/MultilanguageYup.NumberSchema)
- [StringSchema](../wiki/MultilanguageYup.StringSchema)
- [ValidationError](../wiki/MultilanguageYup.ValidationError)
- [default](../wiki/MultilanguageYup.default)

### Type aliases

- [AnyObjectSchema](../wiki/MultilanguageYup#anyobjectschema)
- [AnySchema](../wiki/MultilanguageYup#anyschema)
- [Asserts](../wiki/MultilanguageYup#asserts)
- [CreateErrorOptions](../wiki/MultilanguageYup#createerroroptions)
- [SchemaOf](../wiki/MultilanguageYup#schemaof)
- [TestConfig](../wiki/MultilanguageYup#testconfig)
- [TestContext](../wiki/MultilanguageYup#testcontext)
- [TestFunction](../wiki/MultilanguageYup#testfunction)
- [TestOptions](../wiki/MultilanguageYup#testoptions)
- [TypeOf](../wiki/MultilanguageYup#typeof)

### Variables

- [MixedSchema](../wiki/MultilanguageYup#mixedschema)

### Functions

- [addMethod](../wiki/MultilanguageYup#addmethod)
- [array](../wiki/MultilanguageYup#array)
- [bool](../wiki/MultilanguageYup#bool)
- [date](../wiki/MultilanguageYup#date)
- [isSchema](../wiki/MultilanguageYup#isschema)
- [lazy](../wiki/MultilanguageYup#lazy)
- [mixed](../wiki/MultilanguageYup#mixed)
- [number](../wiki/MultilanguageYup#number)
- [object](../wiki/MultilanguageYup#object)
- [reach](../wiki/MultilanguageYup#reach)
- [ref](../wiki/MultilanguageYup#ref)
- [setLocale](../wiki/MultilanguageYup#setlocale)
- [string](../wiki/MultilanguageYup#string)

## References

### InferType

Renames and re-exports [Asserts](../wiki/MultilanguageYup#asserts)

___

### boolean

Renames and re-exports [bool](../wiki/MultilanguageYup#bool)

## Type aliases

### AnyObjectSchema

Ƭ **AnyObjectSchema**: `ObjectSchema`<`any`, `any`, `any`, `any`\>

#### Defined in

node_modules/yup/lib/index.d.ts:24

___

### AnySchema

Ƭ **AnySchema**<`Type`, `TContext`, `TOut`\>: [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`Type`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `any` |
| `TContext` | `any` |
| `TOut` | `any` |

#### Defined in

node_modules/yup/lib/schema.d.ts:22

___

### Asserts

Ƭ **Asserts**<`TSchema`\>: `TSchema`[``"__outputType"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends `TypedSchema` |

#### Defined in

node_modules/yup/lib/util/types.d.ts:7

___

### CreateErrorOptions

Ƭ **CreateErrorOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<`any`\> |
| `params?` | `ExtraParams` |
| `path?` | `string` |
| `type?` | `string` |

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:5

___

### SchemaOf

Ƭ **SchemaOf**<`T`, `CustomTypes`\>: `T` extends infer E[] ? [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<[`SchemaOf`](../wiki/MultilanguageYup#schemaof)<`E`, `CustomTypes`\> \| `Lazy`<[`SchemaOf`](../wiki/MultilanguageYup#schemaof)<`E`, `CustomTypes`\>\>\> : `T` extends `Date` \| `CustomTypes` ? [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`Maybe`<`T`\>, `AnyObject`, `T`\> : `T` extends `AnyObject` ? `ObjectSchemaOf`<`T`, `CustomTypes`\> : [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`Maybe`<`T`\>, `AnyObject`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `CustomTypes` | `never` |

#### Defined in

node_modules/yup/lib/index.d.ts:23

___

### TestConfig

Ƭ **TestConfig**<`TValue`, `TContext`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `unknown` |
| `TContext` | {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exclusive?` | `boolean` |
| `message?` | `Message`<`any`\> |
| `name?` | `string` |
| `params?` | `ExtraParams` |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TValue`, `TContext`\> |

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:29

___

### TestContext

Ƭ **TestContext**<`TContext`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContext` | {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `options` | `ValidateOptions`<`TContext`\> |
| `parent` | `any` |
| `path` | `string` |
| `schema` | `any` |
| `createError` | (`params?`: [`CreateErrorOptions`](../wiki/MultilanguageYup#createerroroptions)) => [`ValidationError`](../wiki/MultilanguageYup.ValidationError) |
| `resolve` | <T\>(`value`: `T` \| `default`<`T`\>) => `T` |

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:11

___

### TestFunction

Ƭ **TestFunction**<`T`, `TContext`\>: (`this`: [`TestContext`](../wiki/MultilanguageYup#testcontext)<`TContext`\>, `value`: `T`, `context`: [`TestContext`](../wiki/MultilanguageYup#testcontext)<`TContext`\>) => `boolean` \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError) \| `Promise`<`boolean` \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TContext` | {} |

#### Type declaration

▸ (`this`, `value`, `context`): `boolean` \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError) \| `Promise`<`boolean` \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`TestContext`](../wiki/MultilanguageYup#testcontext)<`TContext`\> |
| `value` | `T` |
| `context` | [`TestContext`](../wiki/MultilanguageYup#testcontext)<`TContext`\> |

##### Returns

`boolean` \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError) \| `Promise`<`boolean` \| [`ValidationError`](../wiki/MultilanguageYup.ValidationError)\>

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:19

___

### TestOptions

Ƭ **TestOptions**<`TSchema`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends [`AnySchema`](../wiki/MultilanguageYup#anyschema) = [`AnySchema`](../wiki/MultilanguageYup#anyschema) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `label?` | `string` |
| `options` | `InternalOptions` |
| `originalValue` | `any` |
| `path?` | `string` |
| `schema` | `TSchema` |
| `sync?` | `boolean` |
| `value` | `any` |

#### Defined in

node_modules/yup/lib/util/createValidation.d.ts:20

___

### TypeOf

Ƭ **TypeOf**<`TSchema`\>: `TSchema`[``"__inputType"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSchema` | extends `TypedSchema` |

#### Defined in

node_modules/yup/lib/util/types.d.ts:6

## Variables

### MixedSchema

• `Const` **MixedSchema**: typeof `MixedSchema`

#### Defined in

node_modules/yup/lib/mixed.d.ts:15

## Functions

### addMethod

▸ **addMethod**<`T`\>(`schemaType`, `name`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaType` | (...`arg`: `any`[]) => `T` |
| `name` | `string` |
| `fn` | (`this`: `T`, ...`args`: `any`[]) => `T` |

#### Returns

`void`

#### Defined in

node_modules/yup/lib/index.d.ts:17

▸ **addMethod**<`T`\>(`schemaType`, `name`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => [`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaType` | `T` |
| `name` | `string` |
| `fn` | (`this`: `InstanceType`<`T`\>, ...`args`: `any`[]) => `InstanceType`<`T`\> |

#### Returns

`void`

#### Defined in

node_modules/yup/lib/index.d.ts:18

___

### array

▸ **array**<`C`, `T`\>(`type?`): `OptionalArraySchema`<`T`, `C`, [`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[] \| `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `AnyObject` = `AnyObject` |
| `T` | extends [`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\> \| `Lazy`<`any`, `any`\> = [`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `T` |

#### Returns

`OptionalArraySchema`<`T`, `C`, [`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[] \| `undefined`\>

#### Defined in

node_modules/yup/lib/array.d.ts:8

___

### bool

▸ **bool**(): [`BooleanSchema`](../wiki/MultilanguageYup.BooleanSchema)<`boolean` \| `undefined`, `AnyObject`, `boolean` \| `undefined`\>

#### Returns

[`BooleanSchema`](../wiki/MultilanguageYup.BooleanSchema)<`boolean` \| `undefined`, `AnyObject`, `boolean` \| `undefined`\>

#### Defined in

node_modules/yup/lib/boolean.d.ts:5

___

### date

▸ **date**(): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`Date` \| `undefined`, `AnyObject`, `Date` \| `undefined`\>

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`Date` \| `undefined`, `AnyObject`, `Date` \| `undefined`\>

#### Defined in

node_modules/yup/lib/date.d.ts:6

___

### isSchema

▸ **isSchema**(`obj`): obj is SchemaLike

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is SchemaLike

#### Defined in

node_modules/yup/lib/util/isSchema.d.ts:2

___

### lazy

▸ **lazy**<`T`\>(`builder`): `Lazy`<`T`, `ContextOf`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | `LazyBuilder`<`T`\> |

#### Returns

`Lazy`<`T`, `ContextOf`<`T`\>\>

#### Defined in

node_modules/yup/lib/Lazy.d.ts:7

___

### mixed

▸ **mixed**<`TType`\>(): `MixedSchema`<`TType` \| `undefined`, `AnyObject`, `TType` \| `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | `any` |

#### Returns

`MixedSchema`<`TType` \| `undefined`, `AnyObject`, `TType` \| `undefined`\>

#### Defined in

node_modules/yup/lib/mixed.d.ts:17

___

### number

▸ **number**(): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`number` \| `undefined`, `AnyObject`, `number` \| `undefined`\>

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`number` \| `undefined`, `AnyObject`, `number` \| `undefined`\>

#### Defined in

node_modules/yup/lib/number.d.ts:6

___

### object

▸ **object**<`TShape`\>(`spec?`): `OptionalObjectSchema`<`TShape`, `AnyObject`, `TypeOfShape`<`TShape`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `TShape` |

#### Returns

`OptionalObjectSchema`<`TShape`, `AnyObject`, `TypeOfShape`<`TShape`\>\>

#### Defined in

node_modules/yup/lib/object.d.ts:53

___

### reach

▸ **reach**(`obj`, `path`, `value?`, `context?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `path` | `string` |
| `value?` | `any` |
| `context?` | `any` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/util/reach.d.ts:6

___

### ref

▸ **ref**<`TValue`\>(`key`, `options?`): `Reference`<`TValue`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options?` | `ReferenceOptions`<`TValue`\> |

#### Returns

`Reference`<`TValue`\>

#### Defined in

node_modules/yup/lib/Reference.d.ts:5

___

### setLocale

▸ **setLocale**(`custom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `custom` | `LocaleObject` |

#### Returns

`void`

#### Defined in

node_modules/yup/lib/setLocale.d.ts:2

___

### string

▸ **string**(): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`string` \| `undefined`, `AnyObject`, `string` \| `undefined`\>

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`string` \| `undefined`, `AnyObject`, `string` \| `undefined`\>

#### Defined in

node_modules/yup/lib/string.d.ts:13

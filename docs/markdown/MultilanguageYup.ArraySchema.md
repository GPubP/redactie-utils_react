# Class: ArraySchema<T, C, TIn, TOut\>

[MultilanguageYup](../wiki/MultilanguageYup).ArraySchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../wiki/MultilanguageYup#anyschema) \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[]\> = [`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[] \| `undefined` |
| `TOut` | extends `Maybe`<[`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[]\> = [`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[] \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TIn`, `C`, `TOut`\>

  ↳ **`ArraySchema`**

## Table of contents

### Constructors

- [constructor](../wiki/MultilanguageYup.ArraySchema#constructor)

### Properties

- [\_\_inputType](../wiki/MultilanguageYup.ArraySchema#__inputtype)
- [\_\_isYupSchema\_\_](../wiki/MultilanguageYup.ArraySchema#__isyupschema__)
- [\_\_outputType](../wiki/MultilanguageYup.ArraySchema#__outputtype)
- [\_blacklist](../wiki/MultilanguageYup.ArraySchema#_blacklist)
- [\_whitelist](../wiki/MultilanguageYup.ArraySchema#_whitelist)
- [deps](../wiki/MultilanguageYup.ArraySchema#deps)
- [equals](../wiki/MultilanguageYup.ArraySchema#equals)
- [exclusiveTests](../wiki/MultilanguageYup.ArraySchema#exclusivetests)
- [innerType](../wiki/MultilanguageYup.ArraySchema#innertype)
- [is](../wiki/MultilanguageYup.ArraySchema#is)
- [nope](../wiki/MultilanguageYup.ArraySchema#nope)
- [not](../wiki/MultilanguageYup.ArraySchema#not)
- [spec](../wiki/MultilanguageYup.ArraySchema#spec)
- [tests](../wiki/MultilanguageYup.ArraySchema#tests)
- [transforms](../wiki/MultilanguageYup.ArraySchema#transforms)
- [type](../wiki/MultilanguageYup.ArraySchema#type)

### Accessors

- [\_type](../wiki/MultilanguageYup.ArraySchema#_type)

### Methods

- [\_cast](../wiki/MultilanguageYup.ArraySchema#_cast)
- [\_getDefault](../wiki/MultilanguageYup.ArraySchema#_getdefault)
- [\_isPresent](../wiki/MultilanguageYup.ArraySchema#_ispresent)
- [\_typeCheck](../wiki/MultilanguageYup.ArraySchema#_typecheck)
- [\_validate](../wiki/MultilanguageYup.ArraySchema#_validate)
- [cast](../wiki/MultilanguageYup.ArraySchema#cast)
- [clone](../wiki/MultilanguageYup.ArraySchema#clone)
- [compact](../wiki/MultilanguageYup.ArraySchema#compact)
- [concat](../wiki/MultilanguageYup.ArraySchema#concat)
- [default](../wiki/MultilanguageYup.ArraySchema#default)
- [defined](../wiki/MultilanguageYup.ArraySchema#defined)
- [describe](../wiki/MultilanguageYup.ArraySchema#describe)
- [ensure](../wiki/MultilanguageYup.ArraySchema#ensure)
- [getDefault](../wiki/MultilanguageYup.ArraySchema#getdefault)
- [isType](../wiki/MultilanguageYup.ArraySchema#istype)
- [isValid](../wiki/MultilanguageYup.ArraySchema#isvalid)
- [isValidSync](../wiki/MultilanguageYup.ArraySchema#isvalidsync)
- [label](../wiki/MultilanguageYup.ArraySchema#label)
- [length](../wiki/MultilanguageYup.ArraySchema#length)
- [max](../wiki/MultilanguageYup.ArraySchema#max)
- [meta](../wiki/MultilanguageYup.ArraySchema#meta)
- [min](../wiki/MultilanguageYup.ArraySchema#min)
- [notOneOf](../wiki/MultilanguageYup.ArraySchema#notoneof)
- [notRequired](../wiki/MultilanguageYup.ArraySchema#notrequired)
- [nullable](../wiki/MultilanguageYup.ArraySchema#nullable)
- [of](../wiki/MultilanguageYup.ArraySchema#of)
- [oneOf](../wiki/MultilanguageYup.ArraySchema#oneof)
- [optional](../wiki/MultilanguageYup.ArraySchema#optional)
- [required](../wiki/MultilanguageYup.ArraySchema#required)
- [resolve](../wiki/MultilanguageYup.ArraySchema#resolve)
- [strict](../wiki/MultilanguageYup.ArraySchema#strict)
- [strip](../wiki/MultilanguageYup.ArraySchema#strip)
- [test](../wiki/MultilanguageYup.ArraySchema#test)
- [transform](../wiki/MultilanguageYup.ArraySchema#transform)
- [typeError](../wiki/MultilanguageYup.ArraySchema#typeerror)
- [validate](../wiki/MultilanguageYup.ArraySchema#validate)
- [validateAt](../wiki/MultilanguageYup.ArraySchema#validateat)
- [validateSync](../wiki/MultilanguageYup.ArraySchema#validatesync)
- [validateSyncAt](../wiki/MultilanguageYup.ArraySchema#validatesyncat)
- [when](../wiki/MultilanguageYup.ArraySchema#when)
- [withMutation](../wiki/MultilanguageYup.ArraySchema#withmutation)

## Constructors

### constructor

• **new ArraySchema**<`T`, `C`, `TIn`, `TOut`\>(`type?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\> \| `Lazy`<`any`, `any`\> |
| `C` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<[`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[]\> = `undefined` \| [`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[] |
| `TOut` | extends `Maybe`<[`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[]\> = [`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `T` |

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[constructor](../wiki/MultilanguageYup.BaseSchema#constructor)

#### Defined in

node_modules/yup/lib/array.d.ts:14

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TIn`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[__inputType](../wiki/MultilanguageYup.BaseSchema#__inputtype)

#### Defined in

node_modules/yup/lib/schema.d.ts:54

___

### \_\_isYupSchema\_\_

• `Readonly` **\_\_isYupSchema\_\_**: `boolean`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[__isYupSchema__](../wiki/MultilanguageYup.BaseSchema#__isyupschema__)

#### Defined in

node_modules/yup/lib/schema.d.ts:56

___

### \_\_outputType

• `Readonly` **\_\_outputType**: `TOut`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[__outputType](../wiki/MultilanguageYup.BaseSchema#__outputtype)

#### Defined in

node_modules/yup/lib/schema.d.ts:55

___

### \_blacklist

• `Protected` **\_blacklist**: `default`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_blacklist](../wiki/MultilanguageYup.BaseSchema#_blacklist)

#### Defined in

node_modules/yup/lib/schema.d.ts:66

___

### \_whitelist

• `Protected` **\_whitelist**: `default`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_whitelist](../wiki/MultilanguageYup.BaseSchema#_whitelist)

#### Defined in

node_modules/yup/lib/schema.d.ts:65

___

### deps

• `Readonly` **deps**: readonly `string`[]

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[deps](../wiki/MultilanguageYup.BaseSchema#deps)

#### Defined in

node_modules/yup/lib/schema.d.ts:57

___

### equals

• **equals**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[equals](../wiki/MultilanguageYup.BaseSchema#equals)

#### Defined in

node_modules/yup/lib/schema.d.ts:138

___

### exclusiveTests

• `Protected` **exclusiveTests**: `Record`<`string`, `boolean`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[exclusiveTests](../wiki/MultilanguageYup.BaseSchema#exclusivetests)

#### Defined in

node_modules/yup/lib/schema.d.ts:67

___

### innerType

• `Optional` **innerType**: `T`

#### Defined in

node_modules/yup/lib/array.d.ts:13

___

### is

• **is**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[is](../wiki/MultilanguageYup.BaseSchema#is)

#### Defined in

node_modules/yup/lib/schema.d.ts:139

___

### nope

• **nope**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nope](../wiki/MultilanguageYup.BaseSchema#nope)

#### Defined in

node_modules/yup/lib/schema.d.ts:141

___

### not

• **not**: <U\>(`enums`: (`default`<`unknown`\> \| `Maybe`<`U`\>)[], `message?`: `Message`<{ `values`: `any`  }\>) => [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Type declaration

▸ <`U`\>(`enums`, `message?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

##### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `AnyObject`, `any`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[not](../wiki/MultilanguageYup.BaseSchema#not)

#### Defined in

node_modules/yup/lib/schema.d.ts:140

___

### spec

• **spec**: `SchemaSpec`<`any`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[spec](../wiki/MultilanguageYup.BaseSchema#spec)

#### Defined in

node_modules/yup/lib/schema.d.ts:68

___

### tests

• **tests**: `Test`[]

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[tests](../wiki/MultilanguageYup.BaseSchema#tests)

#### Defined in

node_modules/yup/lib/schema.d.ts:58

___

### transforms

• **transforms**: `TransformFunction`<[`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\>\>[]

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[transforms](../wiki/MultilanguageYup.BaseSchema#transforms)

#### Defined in

node_modules/yup/lib/schema.d.ts:59

___

### type

• `Readonly` **type**: `string`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[type](../wiki/MultilanguageYup.BaseSchema#type)

#### Defined in

node_modules/yup/lib/schema.d.ts:53

## Accessors

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

#### Inherited from

BaseSchema.\_type

#### Defined in

node_modules/yup/lib/schema.d.ts:70

## Methods

### \_cast

▸ `Protected` **_cast**(`_value`, `_opts`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `_opts` | `InternalOptions`<`C`\> |

#### Returns

`any`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_cast](../wiki/MultilanguageYup.BaseSchema#_cast)

#### Defined in

node_modules/yup/lib/array.d.ts:17

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_getDefault](../wiki/MultilanguageYup.BaseSchema#_getdefault)

#### Defined in

node_modules/yup/lib/schema.d.ts:95

___

### \_isPresent

▸ `Protected` **_isPresent**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_isPresent](../wiki/MultilanguageYup.BaseSchema#_ispresent)

#### Defined in

node_modules/yup/lib/schema.d.ts:99

___

### \_typeCheck

▸ `Protected` **_typeCheck**(`v`): v is NonNullable<TIn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is NonNullable<TIn\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_typeCheck](../wiki/MultilanguageYup.BaseSchema#_typecheck)

#### Defined in

node_modules/yup/lib/array.d.ts:15

___

### \_validate

▸ `Protected` **_validate**(`_value`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options` | `undefined` \| `InternalOptions`<`C`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_validate](../wiki/MultilanguageYup.BaseSchema#_validate)

#### Defined in

node_modules/yup/lib/array.d.ts:18

___

### cast

▸ **cast**(`value`, `options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`C`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[cast](../wiki/MultilanguageYup.BaseSchema#cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `SchemaSpec`<`any`\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[clone](../wiki/MultilanguageYup.BaseSchema#clone)

#### Defined in

node_modules/yup/lib/array.d.ts:19

___

### compact

▸ **compact**(`rejector?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rejector?` | `RejectorFn` |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:33

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[concat](../wiki/MultilanguageYup.BaseSchema#concat)

#### Defined in

node_modules/yup/lib/array.d.ts:20

▸ **concat**(`schema`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `any` |

#### Returns

`any`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[concat](../wiki/MultilanguageYup.BaseSchema#concat)

#### Defined in

node_modules/yup/lib/array.d.ts:21

___

### default

▸ **default**(`def`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `any` |

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[default](../wiki/MultilanguageYup.BaseSchema#default)

#### Defined in

node_modules/yup/lib/schema.d.ts:97

___

### defined

▸ **defined**(): `DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Returns

`DefinedArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[defined](../wiki/MultilanguageYup.BaseSchema#defined)

#### Defined in

node_modules/yup/lib/array.d.ts:37

___

### describe

▸ **describe**(): `SchemaInnerTypeDescription`

#### Returns

`SchemaInnerTypeDescription`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[describe](../wiki/MultilanguageYup.BaseSchema#describe)

#### Defined in

node_modules/yup/lib/array.d.ts:34

___

### ensure

▸ **ensure**(): `RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Returns

`RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Defined in

node_modules/yup/lib/array.d.ts:32

___

### getDefault

▸ **getDefault**(`options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[getDefault](../wiki/MultilanguageYup.BaseSchema#getdefault)

#### Defined in

node_modules/yup/lib/schema.d.ts:96

___

### isType

▸ **isType**(`v`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[isType](../wiki/MultilanguageYup.BaseSchema#istype)

#### Defined in

node_modules/yup/lib/schema.d.ts:79

___

### isValid

▸ **isValid**(`value`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[isValid](../wiki/MultilanguageYup.BaseSchema#isvalid)

#### Defined in

node_modules/yup/lib/schema.d.ts:93

___

### isValidSync

▸ **isValidSync**(`value`, `options?`): value is TOut

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

value is TOut

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[isValidSync](../wiki/MultilanguageYup.BaseSchema#isvalidsync)

#### Defined in

node_modules/yup/lib/schema.d.ts:94

___

### label

▸ **label**(`label`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[label](../wiki/MultilanguageYup.BaseSchema#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### length

▸ **length**(`length`, `message?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `length`: `number`  }\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:23

___

### max

▸ **max**(`max`, `message?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `max`: `number`  }\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:29

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `min`: `number`  }\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/array.d.ts:26

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notOneOf](../wiki/MultilanguageYup.BaseSchema#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notRequired](../wiki/MultilanguageYup.BaseSchema#notrequired)

#### Defined in

node_modules/yup/lib/schema.d.ts:102

___

### nullable

▸ **nullable**(`isNullable?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, ``null`` \| `TIn`, ``null`` \| [`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[] \| `Extract`<`TIn`, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/array.d.ts:35

▸ **nullable**(`isNullable`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `Exclude`<`TIn`, ``null``\>, [`Asserts`](../wiki/MultilanguageYup#asserts)<`T`\>[] \| `Extract`<`Exclude`<`TIn`, ``null``\>, `undefined` \| ``null``\>\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/array.d.ts:36

___

### of

▸ **of**<`TInner`\>(`schema`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../wiki/MultilanguageYup#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../wiki/MultilanguageYup#asserts)<`TInner`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInner` | extends [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`any`, `any`, `any`, `TInner`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TInner` |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`TInner`, `AnyObject`, `undefined` \| [`TypeOf`](../wiki/MultilanguageYup#typeof)<`TInner`\>[], `undefined` \| [`Asserts`](../wiki/MultilanguageYup#asserts)<`TInner`\>[]\>

#### Defined in

node_modules/yup/lib/array.d.ts:22

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<[`TypeOf`](../wiki/MultilanguageYup#typeof)<`T`\>[]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[oneOf](../wiki/MultilanguageYup.BaseSchema#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): `any`

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[optional](../wiki/MultilanguageYup.BaseSchema#optional)

#### Defined in

node_modules/yup/lib/schema.d.ts:142

___

### required

▸ **required**(`msg?`): `RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredArraySchema`<`T`, `C`, `TIn`\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[required](../wiki/MultilanguageYup.BaseSchema#required)

#### Defined in

node_modules/yup/lib/array.d.ts:38

___

### resolve

▸ **resolve**(`options`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[resolve](../wiki/MultilanguageYup.BaseSchema#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strict](../wiki/MultilanguageYup.BaseSchema#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strip](../wiki/MultilanguageYup.BaseSchema#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

Adds a test function to the schema's queue of tests.
tests can be exclusive or non-exclusive.

- exclusive tests, will replace any existing tests of the same name.
- non-exclusive: can be stacked

If a non-exclusive test is added to a schema with an exclusive test of the same name
the exclusive test is removed and further tests of the same name will be stacked.

If an exclusive test is added to a schema with non-exclusive tests of the same name
the previous tests are removed and further tests of the same name will replace each other.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TestConfig`](../wiki/MultilanguageYup#testconfig)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TIn`, `C`\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[transform](../wiki/MultilanguageYup.BaseSchema#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### typeError

▸ **typeError**(`message`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[typeError](../wiki/MultilanguageYup.BaseSchema#typeerror)

#### Defined in

node_modules/yup/lib/schema.d.ts:125

___

### validate

▸ **validate**(`value`, `options?`): `Promise`<`TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`Promise`<`TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[validate](../wiki/MultilanguageYup.BaseSchema#validate)

#### Defined in

node_modules/yup/lib/schema.d.ts:91

___

### validateAt

▸ **validateAt**(`path`, `value`, `options?`): `Promise`<`TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`Promise`<`TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[validateAt](../wiki/MultilanguageYup.BaseSchema#validateat)

#### Defined in

node_modules/yup/lib/schema.d.ts:136

___

### validateSync

▸ **validateSync**(`value`, `options?`): `TOut`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`TOut`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[validateSync](../wiki/MultilanguageYup.BaseSchema#validatesync)

#### Defined in

node_modules/yup/lib/schema.d.ts:92

___

### validateSyncAt

▸ **validateSyncAt**(`path`, `value`, `options?`): `TOut`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`C`\> |

#### Returns

`TOut`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[validateSyncAt](../wiki/MultilanguageYup.BaseSchema#validatesyncat)

#### Defined in

node_modules/yup/lib/schema.d.ts:137

___

### when

▸ **when**(`options`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[when](../wiki/MultilanguageYup.BaseSchema#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>\> |

#### Returns

[`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[when](../wiki/MultilanguageYup.BaseSchema#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:124

___

### withMutation

▸ **withMutation**<`T`\>(`fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`schema`: [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)<`T`, `C`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[withMutation](../wiki/MultilanguageYup.BaseSchema#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76

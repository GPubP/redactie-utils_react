# Class: StringSchema<TType, TContext, TOut\>

[MultilanguageYup](../wiki/MultilanguageYup).StringSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`string`\> = `string` \| `undefined` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `TType` = `TType` |

## Hierarchy

- [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TType`, `TContext`, `TOut`\>

  ↳ **`StringSchema`**

## Table of contents

### Constructors

- [constructor](../wiki/MultilanguageYup.StringSchema#constructor)

### Properties

- [\_\_inputType](../wiki/MultilanguageYup.StringSchema#__inputtype)
- [\_\_isYupSchema\_\_](../wiki/MultilanguageYup.StringSchema#__isyupschema__)
- [\_\_outputType](../wiki/MultilanguageYup.StringSchema#__outputtype)
- [\_blacklist](../wiki/MultilanguageYup.StringSchema#_blacklist)
- [\_whitelist](../wiki/MultilanguageYup.StringSchema#_whitelist)
- [deps](../wiki/MultilanguageYup.StringSchema#deps)
- [equals](../wiki/MultilanguageYup.StringSchema#equals)
- [exclusiveTests](../wiki/MultilanguageYup.StringSchema#exclusivetests)
- [is](../wiki/MultilanguageYup.StringSchema#is)
- [nope](../wiki/MultilanguageYup.StringSchema#nope)
- [not](../wiki/MultilanguageYup.StringSchema#not)
- [spec](../wiki/MultilanguageYup.StringSchema#spec)
- [tests](../wiki/MultilanguageYup.StringSchema#tests)
- [transforms](../wiki/MultilanguageYup.StringSchema#transforms)
- [type](../wiki/MultilanguageYup.StringSchema#type)

### Accessors

- [\_type](../wiki/MultilanguageYup.StringSchema#_type)

### Methods

- [\_cast](../wiki/MultilanguageYup.StringSchema#_cast)
- [\_getDefault](../wiki/MultilanguageYup.StringSchema#_getdefault)
- [\_isPresent](../wiki/MultilanguageYup.StringSchema#_ispresent)
- [\_typeCheck](../wiki/MultilanguageYup.StringSchema#_typecheck)
- [\_validate](../wiki/MultilanguageYup.StringSchema#_validate)
- [cast](../wiki/MultilanguageYup.StringSchema#cast)
- [clone](../wiki/MultilanguageYup.StringSchema#clone)
- [concat](../wiki/MultilanguageYup.StringSchema#concat)
- [default](../wiki/MultilanguageYup.StringSchema#default)
- [defined](../wiki/MultilanguageYup.StringSchema#defined)
- [describe](../wiki/MultilanguageYup.StringSchema#describe)
- [email](../wiki/MultilanguageYup.StringSchema#email)
- [ensure](../wiki/MultilanguageYup.StringSchema#ensure)
- [getDefault](../wiki/MultilanguageYup.StringSchema#getdefault)
- [isType](../wiki/MultilanguageYup.StringSchema#istype)
- [isValid](../wiki/MultilanguageYup.StringSchema#isvalid)
- [isValidSync](../wiki/MultilanguageYup.StringSchema#isvalidsync)
- [label](../wiki/MultilanguageYup.StringSchema#label)
- [length](../wiki/MultilanguageYup.StringSchema#length)
- [lowercase](../wiki/MultilanguageYup.StringSchema#lowercase)
- [matches](../wiki/MultilanguageYup.StringSchema#matches)
- [max](../wiki/MultilanguageYup.StringSchema#max)
- [meta](../wiki/MultilanguageYup.StringSchema#meta)
- [min](../wiki/MultilanguageYup.StringSchema#min)
- [notOneOf](../wiki/MultilanguageYup.StringSchema#notoneof)
- [notRequired](../wiki/MultilanguageYup.StringSchema#notrequired)
- [nullable](../wiki/MultilanguageYup.StringSchema#nullable)
- [oneOf](../wiki/MultilanguageYup.StringSchema#oneof)
- [optional](../wiki/MultilanguageYup.StringSchema#optional)
- [required](../wiki/MultilanguageYup.StringSchema#required)
- [resolve](../wiki/MultilanguageYup.StringSchema#resolve)
- [strict](../wiki/MultilanguageYup.StringSchema#strict)
- [strip](../wiki/MultilanguageYup.StringSchema#strip)
- [test](../wiki/MultilanguageYup.StringSchema#test)
- [transform](../wiki/MultilanguageYup.StringSchema#transform)
- [trim](../wiki/MultilanguageYup.StringSchema#trim)
- [typeError](../wiki/MultilanguageYup.StringSchema#typeerror)
- [uppercase](../wiki/MultilanguageYup.StringSchema#uppercase)
- [url](../wiki/MultilanguageYup.StringSchema#url)
- [uuid](../wiki/MultilanguageYup.StringSchema#uuid)
- [validate](../wiki/MultilanguageYup.StringSchema#validate)
- [validateAt](../wiki/MultilanguageYup.StringSchema#validateat)
- [validateSync](../wiki/MultilanguageYup.StringSchema#validatesync)
- [validateSyncAt](../wiki/MultilanguageYup.StringSchema#validatesyncat)
- [when](../wiki/MultilanguageYup.StringSchema#when)
- [withContext](../wiki/MultilanguageYup.StringSchema#withcontext)
- [withMutation](../wiki/MultilanguageYup.StringSchema#withmutation)

## Constructors

### constructor

• **new StringSchema**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`string`\> = `undefined` \| `string` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `Maybe`<`string`\> = `TType` |

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[constructor](../wiki/MultilanguageYup.BaseSchema#constructor)

#### Defined in

node_modules/yup/lib/string.d.ts:18

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TType`

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

▸ `Protected` **_cast**(`rawValue`, `_options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawValue` | `any` |
| `_options` | `CastOptions`<`TContext`\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_cast](../wiki/MultilanguageYup.BaseSchema#_cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:89

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
| `value` | `any` |

#### Returns

`boolean`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_isPresent](../wiki/MultilanguageYup.BaseSchema#_ispresent)

#### Defined in

node_modules/yup/lib/string.d.ts:20

___

### \_typeCheck

▸ `Protected` **_typeCheck**(`value`): value is NonNullable<TType\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is NonNullable<TType\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_typeCheck](../wiki/MultilanguageYup.BaseSchema#_typecheck)

#### Defined in

node_modules/yup/lib/string.d.ts:19

___

### \_validate

▸ `Protected` **_validate**(`_value`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options` | `undefined` \| `InternalOptions`<`TContext`\> |
| `cb` | `Callback`<`any`\> |

#### Returns

`void`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_validate](../wiki/MultilanguageYup.BaseSchema#_validate)

#### Defined in

node_modules/yup/lib/schema.d.ts:90

___

### cast

▸ **cast**(`value`, `options?`): `TType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`TContext`\> |

#### Returns

`TType`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[cast](../wiki/MultilanguageYup.BaseSchema#cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[clone](../wiki/MultilanguageYup.BaseSchema#clone)

#### Defined in

node_modules/yup/lib/schema.d.ts:72

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[concat](../wiki/MultilanguageYup.BaseSchema#concat)

#### Defined in

node_modules/yup/lib/string.d.ts:64

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[default](../wiki/MultilanguageYup.BaseSchema#default)

#### Defined in

node_modules/yup/lib/string.d.ts:65

___

### defined

▸ **defined**(`msg?`): `DefinedStringSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`DefinedStringSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[defined](../wiki/MultilanguageYup.BaseSchema#defined)

#### Defined in

node_modules/yup/lib/string.d.ts:66

___

### describe

▸ **describe**(): `SchemaDescription`

#### Returns

`SchemaDescription`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[describe](../wiki/MultilanguageYup.BaseSchema#describe)

#### Defined in

node_modules/yup/lib/schema.d.ts:133

___

### email

▸ **email**(`message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:31

___

### ensure

▸ **ensure**(): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`NonNullable`<`TType`\>, `AnyObject`, `NonNullable`<`TType`\>\>

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`NonNullable`<`TType`\>, `AnyObject`, `NonNullable`<`TType`\>\>

#### Defined in

node_modules/yup/lib/string.d.ts:40

___

### getDefault

▸ **getDefault**(`options?`): `TType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TType`

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
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

value is TOut

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[isValidSync](../wiki/MultilanguageYup.BaseSchema#isvalidsync)

#### Defined in

node_modules/yup/lib/schema.d.ts:94

___

### label

▸ **label**(`label`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[label](../wiki/MultilanguageYup.BaseSchema#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### length

▸ **length**(`length`, `message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `length`: `number`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:21

___

### lowercase

▸ **lowercase**(`message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:42

___

### matches

▸ **matches**(`regex`, `options?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `regex` | `RegExp` |
| `options?` | `MatchOptions` \| `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:30

___

### max

▸ **max**(`max`, `message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `max`: `number`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:27

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `min`: `number`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:24

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notOneOf](../wiki/MultilanguageYup.BaseSchema#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notRequired](../wiki/MultilanguageYup.BaseSchema#notrequired)

#### Defined in

node_modules/yup/lib/string.d.ts:69

___

### nullable

▸ **nullable**(`isNullable?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/string.d.ts:70

▸ **nullable**(`isNullable`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/string.d.ts:71

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[oneOf](../wiki/MultilanguageYup.BaseSchema#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[optional](../wiki/MultilanguageYup.BaseSchema#optional)

#### Defined in

node_modules/yup/lib/string.d.ts:68

___

### required

▸ **required**(`msg?`): `RequiredStringSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredStringSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[required](../wiki/MultilanguageYup.BaseSchema#required)

#### Defined in

node_modules/yup/lib/string.d.ts:67

___

### resolve

▸ **resolve**(`options`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[resolve](../wiki/MultilanguageYup.BaseSchema#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strict](../wiki/MultilanguageYup.BaseSchema#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strip](../wiki/MultilanguageYup.BaseSchema#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

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
| `options` | [`TestConfig`](../wiki/MultilanguageYup#testconfig)<`TType`, `TContext`\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[transform](../wiki/MultilanguageYup.BaseSchema#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### trim

▸ **trim**(`message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:41

___

### typeError

▸ **typeError**(`message`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[typeError](../wiki/MultilanguageYup.BaseSchema#typeerror)

#### Defined in

node_modules/yup/lib/schema.d.ts:125

___

### uppercase

▸ **uppercase**(`message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:43

___

### url

▸ **url**(`message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:34

___

### uuid

▸ **uuid**(`message?`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{ `regex`: `RegExp`  }\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/string.d.ts:37

___

### validate

▸ **validate**(`value`, `options?`): `Promise`<`TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

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
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`TOut`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[validateSyncAt](../wiki/MultilanguageYup.BaseSchema#validatesyncat)

#### Defined in

node_modules/yup/lib/schema.d.ts:137

___

### when

▸ **when**(`options`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[when](../wiki/MultilanguageYup.BaseSchema#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[when](../wiki/MultilanguageYup.BaseSchema#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:124

___

### withContext

▸ **withContext**<`TNextContext`\>(): [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`Exclude`<`TType`, ``null``\>, `TNextContext`, `Exclude`<`TType`, ``null``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextContext` | extends `AnyObject` |

#### Returns

[`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`Exclude`<`TType`, ``null``\>, `TNextContext`, `Exclude`<`TType`, ``null``\>\>

#### Defined in

node_modules/yup/lib/string.d.ts:72

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
| `fn` | (`schema`: [`StringSchema`](../wiki/MultilanguageYup.StringSchema)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[withMutation](../wiki/MultilanguageYup.BaseSchema#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76

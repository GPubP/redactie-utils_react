# Class: BaseSchema<TCast, TContext, TOutput\>

[MultilanguageYup](../wiki/MultilanguageYup).BaseSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TCast` | `any` |
| `TContext` | `AnyObject` |
| `TOutput` | `any` |

## Hierarchy

- **`BaseSchema`**

  ↳ [`BooleanSchema`](../wiki/MultilanguageYup.BooleanSchema)

  ↳ [`StringSchema`](../wiki/MultilanguageYup.StringSchema)

  ↳ [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)

  ↳ [`DateSchema`](../wiki/MultilanguageYup.DateSchema)

  ↳ [`default`](../wiki/MultilanguageYup.default)

  ↳ [`default`](../wiki/MultilanguageYup.default)

  ↳ [`ArraySchema`](../wiki/MultilanguageYup.ArraySchema)

## Table of contents

### Constructors

- [constructor](../wiki/MultilanguageYup.BaseSchema#constructor)

### Properties

- [\_\_inputType](../wiki/MultilanguageYup.BaseSchema#__inputtype)
- [\_\_isYupSchema\_\_](../wiki/MultilanguageYup.BaseSchema#__isyupschema__)
- [\_\_outputType](../wiki/MultilanguageYup.BaseSchema#__outputtype)
- [\_blacklist](../wiki/MultilanguageYup.BaseSchema#_blacklist)
- [\_whitelist](../wiki/MultilanguageYup.BaseSchema#_whitelist)
- [deps](../wiki/MultilanguageYup.BaseSchema#deps)
- [equals](../wiki/MultilanguageYup.BaseSchema#equals)
- [exclusiveTests](../wiki/MultilanguageYup.BaseSchema#exclusivetests)
- [is](../wiki/MultilanguageYup.BaseSchema#is)
- [nope](../wiki/MultilanguageYup.BaseSchema#nope)
- [not](../wiki/MultilanguageYup.BaseSchema#not)
- [spec](../wiki/MultilanguageYup.BaseSchema#spec)
- [tests](../wiki/MultilanguageYup.BaseSchema#tests)
- [transforms](../wiki/MultilanguageYup.BaseSchema#transforms)
- [type](../wiki/MultilanguageYup.BaseSchema#type)

### Accessors

- [\_type](../wiki/MultilanguageYup.BaseSchema#_type)

### Methods

- [\_cast](../wiki/MultilanguageYup.BaseSchema#_cast)
- [\_getDefault](../wiki/MultilanguageYup.BaseSchema#_getdefault)
- [\_isPresent](../wiki/MultilanguageYup.BaseSchema#_ispresent)
- [\_typeCheck](../wiki/MultilanguageYup.BaseSchema#_typecheck)
- [\_validate](../wiki/MultilanguageYup.BaseSchema#_validate)
- [cast](../wiki/MultilanguageYup.BaseSchema#cast)
- [clone](../wiki/MultilanguageYup.BaseSchema#clone)
- [concat](../wiki/MultilanguageYup.BaseSchema#concat)
- [default](../wiki/MultilanguageYup.BaseSchema#default)
- [defined](../wiki/MultilanguageYup.BaseSchema#defined)
- [describe](../wiki/MultilanguageYup.BaseSchema#describe)
- [getDefault](../wiki/MultilanguageYup.BaseSchema#getdefault)
- [isType](../wiki/MultilanguageYup.BaseSchema#istype)
- [isValid](../wiki/MultilanguageYup.BaseSchema#isvalid)
- [isValidSync](../wiki/MultilanguageYup.BaseSchema#isvalidsync)
- [label](../wiki/MultilanguageYup.BaseSchema#label)
- [meta](../wiki/MultilanguageYup.BaseSchema#meta)
- [notOneOf](../wiki/MultilanguageYup.BaseSchema#notoneof)
- [notRequired](../wiki/MultilanguageYup.BaseSchema#notrequired)
- [nullable](../wiki/MultilanguageYup.BaseSchema#nullable)
- [oneOf](../wiki/MultilanguageYup.BaseSchema#oneof)
- [optional](../wiki/MultilanguageYup.BaseSchema#optional)
- [required](../wiki/MultilanguageYup.BaseSchema#required)
- [resolve](../wiki/MultilanguageYup.BaseSchema#resolve)
- [strict](../wiki/MultilanguageYup.BaseSchema#strict)
- [strip](../wiki/MultilanguageYup.BaseSchema#strip)
- [test](../wiki/MultilanguageYup.BaseSchema#test)
- [transform](../wiki/MultilanguageYup.BaseSchema#transform)
- [typeError](../wiki/MultilanguageYup.BaseSchema#typeerror)
- [validate](../wiki/MultilanguageYup.BaseSchema#validate)
- [validateAt](../wiki/MultilanguageYup.BaseSchema#validateat)
- [validateSync](../wiki/MultilanguageYup.BaseSchema#validatesync)
- [validateSyncAt](../wiki/MultilanguageYup.BaseSchema#validatesyncat)
- [when](../wiki/MultilanguageYup.BaseSchema#when)
- [withMutation](../wiki/MultilanguageYup.BaseSchema#withmutation)

## Constructors

### constructor

• **new BaseSchema**<`TCast`, `TContext`, `TOutput`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCast` | `any` |
| `TContext` | `AnyObject` |
| `TOutput` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SchemaOptions`<`any`\> |

#### Defined in

node_modules/yup/lib/schema.d.ts:69

## Properties

### \_\_inputType

• `Readonly` **\_\_inputType**: `TCast`

#### Defined in

node_modules/yup/lib/schema.d.ts:54

___

### \_\_isYupSchema\_\_

• `Readonly` **\_\_isYupSchema\_\_**: `boolean`

#### Defined in

node_modules/yup/lib/schema.d.ts:56

___

### \_\_outputType

• `Readonly` **\_\_outputType**: `TOutput`

#### Defined in

node_modules/yup/lib/schema.d.ts:55

___

### \_blacklist

• `Protected` **\_blacklist**: `default`

#### Defined in

node_modules/yup/lib/schema.d.ts:66

___

### \_whitelist

• `Protected` **\_whitelist**: `default`

#### Defined in

node_modules/yup/lib/schema.d.ts:65

___

### deps

• `Readonly` **deps**: readonly `string`[]

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

#### Defined in

node_modules/yup/lib/schema.d.ts:138

___

### exclusiveTests

• `Protected` **exclusiveTests**: `Record`<`string`, `boolean`\>

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

#### Defined in

node_modules/yup/lib/schema.d.ts:140

___

### spec

• **spec**: `SchemaSpec`<`any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:68

___

### tests

• **tests**: `Test`[]

#### Defined in

node_modules/yup/lib/schema.d.ts:58

___

### transforms

• **transforms**: `TransformFunction`<[`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\>\>[]

#### Defined in

node_modules/yup/lib/schema.d.ts:59

___

### type

• `Readonly` **type**: `string`

#### Defined in

node_modules/yup/lib/schema.d.ts:53

## Accessors

### \_type

• `get` **_type**(): `string`

#### Returns

`string`

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

#### Defined in

node_modules/yup/lib/schema.d.ts:89

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

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

#### Defined in

node_modules/yup/lib/schema.d.ts:99

___

### \_typeCheck

▸ `Protected` **_typeCheck**(`_value`): \_value is NonNullable<TCast\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |

#### Returns

\_value is NonNullable<TCast\>

#### Defined in

node_modules/yup/lib/schema.d.ts:71

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

#### Defined in

node_modules/yup/lib/schema.d.ts:90

___

### cast

▸ **cast**(`value`, `options?`): `TCast`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`TContext`\> |

#### Returns

`TCast`

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:72

___

### concat

▸ **concat**(`schema`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:77

▸ **concat**(`schema`): [`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\> |

#### Returns

[`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:78

___

### default

▸ **default**(`def`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `any` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:97

___

### defined

▸ **defined**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:100

___

### describe

▸ **describe**(): `SchemaDescription`

#### Returns

`SchemaDescription`

#### Defined in

node_modules/yup/lib/schema.d.ts:133

___

### getDefault

▸ **getDefault**(`options?`): `TCast`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResolveOptions`<`any`\> |

#### Returns

`TCast`

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

#### Defined in

node_modules/yup/lib/schema.d.ts:93

___

### isValidSync

▸ **isValidSync**(`value`, `options?`): value is TOutput

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

value is TOutput

#### Defined in

node_modules/yup/lib/schema.d.ts:94

___

### label

▸ **label**(`label`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): `any`

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:102

___

### nullable

▸ **nullable**(`isNullable?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:103

▸ **nullable**(`isNullable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:104

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): `any`

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:142

___

### required

▸ **required**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/schema.d.ts:101

___

### resolve

▸ **resolve**(`options`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

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
| `options` | [`TestConfig`](../wiki/MultilanguageYup#testconfig)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TCast`, `TContext`\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### typeError

▸ **typeError**(`message`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:125

___

### validate

▸ **validate**(`value`, `options?`): `Promise`<`TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`Promise`<`TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:91

___

### validateAt

▸ **validateAt**(`path`, `value`, `options?`): `Promise`<`TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`Promise`<`TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:136

___

### validateSync

▸ **validateSync**(`value`, `options?`): `TOutput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`TOutput`

#### Defined in

node_modules/yup/lib/schema.d.ts:92

___

### validateSyncAt

▸ **validateSyncAt**(`path`, `value`, `options?`): `TOutput`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `value` | `any` |
| `options?` | `ValidateOptions`<`TContext`\> |

#### Returns

`TOutput`

#### Defined in

node_modules/yup/lib/schema.d.ts:137

___

### when

▸ **when**(`options`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>\> |

#### Returns

[`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>

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
| `fn` | (`schema`: [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TCast`, `TContext`, `TOutput`\>) => `T` |

#### Returns

`T`

#### Defined in

node_modules/yup/lib/schema.d.ts:76

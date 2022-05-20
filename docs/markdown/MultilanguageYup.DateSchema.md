# Class: DateSchema<TType, TContext, TOut\>

[MultilanguageYup](../wiki/MultilanguageYup).DateSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`Date`\> = `Date` \| `undefined` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `TType` = `TType` |

## Hierarchy

- [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TType`, `TContext`, `TOut`\>

  ↳ **`DateSchema`**

## Table of contents

### Constructors

- [constructor](../wiki/MultilanguageYup.DateSchema#constructor)

### Properties

- [\_\_inputType](../wiki/MultilanguageYup.DateSchema#__inputtype)
- [\_\_isYupSchema\_\_](../wiki/MultilanguageYup.DateSchema#__isyupschema__)
- [\_\_outputType](../wiki/MultilanguageYup.DateSchema#__outputtype)
- [\_blacklist](../wiki/MultilanguageYup.DateSchema#_blacklist)
- [\_whitelist](../wiki/MultilanguageYup.DateSchema#_whitelist)
- [deps](../wiki/MultilanguageYup.DateSchema#deps)
- [equals](../wiki/MultilanguageYup.DateSchema#equals)
- [exclusiveTests](../wiki/MultilanguageYup.DateSchema#exclusivetests)
- [is](../wiki/MultilanguageYup.DateSchema#is)
- [nope](../wiki/MultilanguageYup.DateSchema#nope)
- [not](../wiki/MultilanguageYup.DateSchema#not)
- [spec](../wiki/MultilanguageYup.DateSchema#spec)
- [tests](../wiki/MultilanguageYup.DateSchema#tests)
- [transforms](../wiki/MultilanguageYup.DateSchema#transforms)
- [type](../wiki/MultilanguageYup.DateSchema#type)
- [INVALID\_DATE](../wiki/MultilanguageYup.DateSchema#invalid_date)

### Accessors

- [\_type](../wiki/MultilanguageYup.DateSchema#_type)

### Methods

- [\_cast](../wiki/MultilanguageYup.DateSchema#_cast)
- [\_getDefault](../wiki/MultilanguageYup.DateSchema#_getdefault)
- [\_isPresent](../wiki/MultilanguageYup.DateSchema#_ispresent)
- [\_typeCheck](../wiki/MultilanguageYup.DateSchema#_typecheck)
- [\_validate](../wiki/MultilanguageYup.DateSchema#_validate)
- [cast](../wiki/MultilanguageYup.DateSchema#cast)
- [clone](../wiki/MultilanguageYup.DateSchema#clone)
- [concat](../wiki/MultilanguageYup.DateSchema#concat)
- [default](../wiki/MultilanguageYup.DateSchema#default)
- [defined](../wiki/MultilanguageYup.DateSchema#defined)
- [describe](../wiki/MultilanguageYup.DateSchema#describe)
- [getDefault](../wiki/MultilanguageYup.DateSchema#getdefault)
- [isType](../wiki/MultilanguageYup.DateSchema#istype)
- [isValid](../wiki/MultilanguageYup.DateSchema#isvalid)
- [isValidSync](../wiki/MultilanguageYup.DateSchema#isvalidsync)
- [label](../wiki/MultilanguageYup.DateSchema#label)
- [max](../wiki/MultilanguageYup.DateSchema#max)
- [meta](../wiki/MultilanguageYup.DateSchema#meta)
- [min](../wiki/MultilanguageYup.DateSchema#min)
- [notOneOf](../wiki/MultilanguageYup.DateSchema#notoneof)
- [notRequired](../wiki/MultilanguageYup.DateSchema#notrequired)
- [nullable](../wiki/MultilanguageYup.DateSchema#nullable)
- [oneOf](../wiki/MultilanguageYup.DateSchema#oneof)
- [optional](../wiki/MultilanguageYup.DateSchema#optional)
- [required](../wiki/MultilanguageYup.DateSchema#required)
- [resolve](../wiki/MultilanguageYup.DateSchema#resolve)
- [strict](../wiki/MultilanguageYup.DateSchema#strict)
- [strip](../wiki/MultilanguageYup.DateSchema#strip)
- [test](../wiki/MultilanguageYup.DateSchema#test)
- [transform](../wiki/MultilanguageYup.DateSchema#transform)
- [typeError](../wiki/MultilanguageYup.DateSchema#typeerror)
- [validate](../wiki/MultilanguageYup.DateSchema#validate)
- [validateAt](../wiki/MultilanguageYup.DateSchema#validateat)
- [validateSync](../wiki/MultilanguageYup.DateSchema#validatesync)
- [validateSyncAt](../wiki/MultilanguageYup.DateSchema#validatesyncat)
- [when](../wiki/MultilanguageYup.DateSchema#when)
- [withMutation](../wiki/MultilanguageYup.DateSchema#withmutation)

## Constructors

### constructor

• **new DateSchema**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`Date`\> = `undefined` \| `Date` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `Maybe`<`Date`\> = `TType` |

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[constructor](../wiki/MultilanguageYup.BaseSchema#constructor)

#### Defined in

node_modules/yup/lib/date.d.ts:13

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

___

### INVALID\_DATE

▪ `Static` **INVALID\_DATE**: `Date`

#### Defined in

node_modules/yup/lib/date.d.ts:12

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
| `value` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_isPresent](../wiki/MultilanguageYup.BaseSchema#_ispresent)

#### Defined in

node_modules/yup/lib/schema.d.ts:99

___

### \_typeCheck

▸ `Protected` **_typeCheck**(`v`): v is NonNullable<TType\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

v is NonNullable<TType\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_typeCheck](../wiki/MultilanguageYup.BaseSchema#_typecheck)

#### Defined in

node_modules/yup/lib/date.d.ts:14

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

▸ **clone**(`spec?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

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
| `TOther` | extends [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[concat](../wiki/MultilanguageYup.BaseSchema#concat)

#### Defined in

node_modules/yup/lib/date.d.ts:24

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[default](../wiki/MultilanguageYup.BaseSchema#default)

#### Defined in

node_modules/yup/lib/date.d.ts:25

___

### defined

▸ **defined**(`msg?`): `DefinedDateSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`DefinedDateSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[defined](../wiki/MultilanguageYup.BaseSchema#defined)

#### Defined in

node_modules/yup/lib/date.d.ts:26

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

▸ **label**(`label`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[label](../wiki/MultilanguageYup.BaseSchema#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### max

▸ **max**(`max`, `message?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `unknown` |
| `message?` | `Message`<{ `max`: `string` \| `Date`  }\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/date.d.ts:19

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `unknown` |
| `message?` | `Message`<{ `min`: `string` \| `Date`  }\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/date.d.ts:16

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notOneOf](../wiki/MultilanguageYup.BaseSchema#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notRequired](../wiki/MultilanguageYup.BaseSchema#notrequired)

#### Defined in

node_modules/yup/lib/date.d.ts:29

___

### nullable

▸ **nullable**(`isNullable?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/date.d.ts:30

▸ **nullable**(`isNullable`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/date.d.ts:31

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`Date`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[oneOf](../wiki/MultilanguageYup.BaseSchema#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[optional](../wiki/MultilanguageYup.BaseSchema#optional)

#### Defined in

node_modules/yup/lib/date.d.ts:28

___

### required

▸ **required**(`msg?`): `RequiredDateSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredDateSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[required](../wiki/MultilanguageYup.BaseSchema#required)

#### Defined in

node_modules/yup/lib/date.d.ts:27

___

### resolve

▸ **resolve**(`options`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[resolve](../wiki/MultilanguageYup.BaseSchema#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### strict

▸ **strict**(`isStrict?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strict](../wiki/MultilanguageYup.BaseSchema#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strip](../wiki/MultilanguageYup.BaseSchema#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

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

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[transform](../wiki/MultilanguageYup.BaseSchema#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### typeError

▸ **typeError**(`message`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

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

▸ **when**(`options`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[when](../wiki/MultilanguageYup.BaseSchema#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`DateSchema`](../wiki/MultilanguageYup.DateSchema)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[withMutation](../wiki/MultilanguageYup.BaseSchema#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76

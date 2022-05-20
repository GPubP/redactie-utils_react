# Class: NumberSchema<TType, TContext, TOut\>

[MultilanguageYup](../wiki/MultilanguageYup).NumberSchema

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`number`\> = `number` \| `undefined` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `TType` = `TType` |

## Hierarchy

- [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TType`, `TContext`, `TOut`\>

  ↳ **`NumberSchema`**

## Table of contents

### Constructors

- [constructor](../wiki/MultilanguageYup.NumberSchema#constructor)

### Properties

- [\_\_inputType](../wiki/MultilanguageYup.NumberSchema#__inputtype)
- [\_\_isYupSchema\_\_](../wiki/MultilanguageYup.NumberSchema#__isyupschema__)
- [\_\_outputType](../wiki/MultilanguageYup.NumberSchema#__outputtype)
- [\_blacklist](../wiki/MultilanguageYup.NumberSchema#_blacklist)
- [\_whitelist](../wiki/MultilanguageYup.NumberSchema#_whitelist)
- [deps](../wiki/MultilanguageYup.NumberSchema#deps)
- [equals](../wiki/MultilanguageYup.NumberSchema#equals)
- [exclusiveTests](../wiki/MultilanguageYup.NumberSchema#exclusivetests)
- [is](../wiki/MultilanguageYup.NumberSchema#is)
- [nope](../wiki/MultilanguageYup.NumberSchema#nope)
- [not](../wiki/MultilanguageYup.NumberSchema#not)
- [spec](../wiki/MultilanguageYup.NumberSchema#spec)
- [tests](../wiki/MultilanguageYup.NumberSchema#tests)
- [transforms](../wiki/MultilanguageYup.NumberSchema#transforms)
- [type](../wiki/MultilanguageYup.NumberSchema#type)

### Accessors

- [\_type](../wiki/MultilanguageYup.NumberSchema#_type)

### Methods

- [\_cast](../wiki/MultilanguageYup.NumberSchema#_cast)
- [\_getDefault](../wiki/MultilanguageYup.NumberSchema#_getdefault)
- [\_isPresent](../wiki/MultilanguageYup.NumberSchema#_ispresent)
- [\_typeCheck](../wiki/MultilanguageYup.NumberSchema#_typecheck)
- [\_validate](../wiki/MultilanguageYup.NumberSchema#_validate)
- [cast](../wiki/MultilanguageYup.NumberSchema#cast)
- [clone](../wiki/MultilanguageYup.NumberSchema#clone)
- [concat](../wiki/MultilanguageYup.NumberSchema#concat)
- [default](../wiki/MultilanguageYup.NumberSchema#default)
- [defined](../wiki/MultilanguageYup.NumberSchema#defined)
- [describe](../wiki/MultilanguageYup.NumberSchema#describe)
- [getDefault](../wiki/MultilanguageYup.NumberSchema#getdefault)
- [integer](../wiki/MultilanguageYup.NumberSchema#integer)
- [isType](../wiki/MultilanguageYup.NumberSchema#istype)
- [isValid](../wiki/MultilanguageYup.NumberSchema#isvalid)
- [isValidSync](../wiki/MultilanguageYup.NumberSchema#isvalidsync)
- [label](../wiki/MultilanguageYup.NumberSchema#label)
- [lessThan](../wiki/MultilanguageYup.NumberSchema#lessthan)
- [max](../wiki/MultilanguageYup.NumberSchema#max)
- [meta](../wiki/MultilanguageYup.NumberSchema#meta)
- [min](../wiki/MultilanguageYup.NumberSchema#min)
- [moreThan](../wiki/MultilanguageYup.NumberSchema#morethan)
- [negative](../wiki/MultilanguageYup.NumberSchema#negative)
- [notOneOf](../wiki/MultilanguageYup.NumberSchema#notoneof)
- [notRequired](../wiki/MultilanguageYup.NumberSchema#notrequired)
- [nullable](../wiki/MultilanguageYup.NumberSchema#nullable)
- [oneOf](../wiki/MultilanguageYup.NumberSchema#oneof)
- [optional](../wiki/MultilanguageYup.NumberSchema#optional)
- [positive](../wiki/MultilanguageYup.NumberSchema#positive)
- [required](../wiki/MultilanguageYup.NumberSchema#required)
- [resolve](../wiki/MultilanguageYup.NumberSchema#resolve)
- [round](../wiki/MultilanguageYup.NumberSchema#round)
- [strict](../wiki/MultilanguageYup.NumberSchema#strict)
- [strip](../wiki/MultilanguageYup.NumberSchema#strip)
- [test](../wiki/MultilanguageYup.NumberSchema#test)
- [transform](../wiki/MultilanguageYup.NumberSchema#transform)
- [truncate](../wiki/MultilanguageYup.NumberSchema#truncate)
- [typeError](../wiki/MultilanguageYup.NumberSchema#typeerror)
- [validate](../wiki/MultilanguageYup.NumberSchema#validate)
- [validateAt](../wiki/MultilanguageYup.NumberSchema#validateat)
- [validateSync](../wiki/MultilanguageYup.NumberSchema#validatesync)
- [validateSyncAt](../wiki/MultilanguageYup.NumberSchema#validatesyncat)
- [when](../wiki/MultilanguageYup.NumberSchema#when)
- [withMutation](../wiki/MultilanguageYup.NumberSchema#withmutation)

## Constructors

### constructor

• **new NumberSchema**<`TType`, `TContext`, `TOut`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends `Maybe`<`number`\> = `undefined` \| `number` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TOut` | extends `Maybe`<`number`\> = `TType` |

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[constructor](../wiki/MultilanguageYup.BaseSchema#constructor)

#### Defined in

node_modules/yup/lib/number.d.ts:11

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
| `value` | `unknown` |

#### Returns

`boolean`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_isPresent](../wiki/MultilanguageYup.BaseSchema#_ispresent)

#### Defined in

node_modules/yup/lib/schema.d.ts:99

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

node_modules/yup/lib/number.d.ts:12

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

▸ **clone**(`spec?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `Partial`<`SchemaSpec`<`any`\>\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

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
| `TOther` | extends [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[concat](../wiki/MultilanguageYup.BaseSchema#concat)

#### Defined in

node_modules/yup/lib/number.d.ts:36

___

### default

▸ **default**<`D`\>(`def`): `If`<`D`, [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends `Maybe`<`number`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `def` | `Thunk`<`D`\> |

#### Returns

`If`<`D`, [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`undefined` \| `TType`, `TContext`, `undefined` \| `TType`\>, [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`Defined`<`TType`\>, `TContext`, `Defined`<`TType`\>\>\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[default](../wiki/MultilanguageYup.BaseSchema#default)

#### Defined in

node_modules/yup/lib/number.d.ts:37

___

### defined

▸ **defined**(`msg?`): `DefinedNumberSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`DefinedNumberSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[defined](../wiki/MultilanguageYup.BaseSchema#defined)

#### Defined in

node_modules/yup/lib/number.d.ts:38

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

### integer

▸ **integer**(`message?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:31

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

▸ **label**(`label`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[label](../wiki/MultilanguageYup.BaseSchema#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### lessThan

▸ **lessThan**(`less`, `message?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `less` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `less`: `number`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:19

___

### max

▸ **max**(`max`, `message?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `max`: `number`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:16

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### min

▸ **min**(`min`, `message?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `min`: `number`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:13

___

### moreThan

▸ **moreThan**(`more`, `message?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `more` | `number` \| `default`<`number`\> |
| `message?` | `Message`<{ `more`: `number`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:22

___

### negative

▸ **negative**(`msg?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{ `less`: `number`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:28

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`number`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notOneOf](../wiki/MultilanguageYup.BaseSchema#notoneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:129

___

### notRequired

▸ **notRequired**(): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[notRequired](../wiki/MultilanguageYup.BaseSchema#notrequired)

#### Defined in

node_modules/yup/lib/number.d.ts:41

___

### nullable

▸ **nullable**(`isNullable?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<``null`` \| `TType`, `TContext`, ``null`` \| `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/number.d.ts:42

▸ **nullable**(`isNullable`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`Exclude`<`TType`, ``null``\>, `TContext`, `Exclude`<`TType`, ``null``\>\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/number.d.ts:43

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`number`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[oneOf](../wiki/MultilanguageYup.BaseSchema#oneof)

#### Defined in

node_modules/yup/lib/schema.d.ts:126

___

### optional

▸ **optional**(): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TType`\>

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TType`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[optional](../wiki/MultilanguageYup.BaseSchema#optional)

#### Defined in

node_modules/yup/lib/number.d.ts:40

___

### positive

▸ **positive**(`msg?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{ `more`: `number`  }\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:25

___

### required

▸ **required**(`msg?`): `RequiredNumberSchema`<`TType`, `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `Message`<{}\> |

#### Returns

`RequiredNumberSchema`<`TType`, `TContext`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[required](../wiki/MultilanguageYup.BaseSchema#required)

#### Defined in

node_modules/yup/lib/number.d.ts:39

___

### resolve

▸ **resolve**(`options`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[resolve](../wiki/MultilanguageYup.BaseSchema#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### round

▸ **round**(`method`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | ``"ceil"`` \| ``"floor"`` \| ``"round"`` \| ``"trunc"`` |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:33

___

### strict

▸ **strict**(`isStrict?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strict](../wiki/MultilanguageYup.BaseSchema#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strip](../wiki/MultilanguageYup.BaseSchema#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

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

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TType`, `TContext`\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[transform](../wiki/MultilanguageYup.BaseSchema#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### truncate

▸ **truncate**(): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Defined in

node_modules/yup/lib/number.d.ts:32

___

### typeError

▸ **typeError**(`message`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

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

▸ **when**(`options`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[when](../wiki/MultilanguageYup.BaseSchema#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>\> |

#### Returns

[`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>

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
| `fn` | (`schema`: [`NumberSchema`](../wiki/MultilanguageYup.NumberSchema)<`TType`, `TContext`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[withMutation](../wiki/MultilanguageYup.BaseSchema#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76

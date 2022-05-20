# Class: default<TShape, TContext, TIn, TOut\>

[MultilanguageYup](../wiki/MultilanguageYup).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> = `TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\> = `AssertsShape`<`TShape`\> \| `Optionals`<`TIn`\> |

## Hierarchy

- [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TIn`, `TContext`, `TOut`\>

- [`BaseSchema`](../wiki/MultilanguageYup.BaseSchema)<`TIn`, `TContext`, `TOut`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](../wiki/MultilanguageYup.default#constructor)

### Properties

- [\_\_inputType](../wiki/MultilanguageYup.default#__inputtype)
- [\_\_isYupSchema\_\_](../wiki/MultilanguageYup.default#__isyupschema__)
- [\_\_outputType](../wiki/MultilanguageYup.default#__outputtype)
- [\_blacklist](../wiki/MultilanguageYup.default#_blacklist)
- [\_whitelist](../wiki/MultilanguageYup.default#_whitelist)
- [deps](../wiki/MultilanguageYup.default#deps)
- [equals](../wiki/MultilanguageYup.default#equals)
- [exclusiveTests](../wiki/MultilanguageYup.default#exclusivetests)
- [fields](../wiki/MultilanguageYup.default#fields)
- [is](../wiki/MultilanguageYup.default#is)
- [nope](../wiki/MultilanguageYup.default#nope)
- [not](../wiki/MultilanguageYup.default#not)
- [spec](../wiki/MultilanguageYup.default#spec)
- [tests](../wiki/MultilanguageYup.default#tests)
- [transforms](../wiki/MultilanguageYup.default#transforms)
- [type](../wiki/MultilanguageYup.default#type)

### Accessors

- [\_type](../wiki/MultilanguageYup.default#_type)

### Methods

- [\_cast](../wiki/MultilanguageYup.default#_cast)
- [\_getDefault](../wiki/MultilanguageYup.default#_getdefault)
- [\_isPresent](../wiki/MultilanguageYup.default#_ispresent)
- [\_typeCheck](../wiki/MultilanguageYup.default#_typecheck)
- [\_validate](../wiki/MultilanguageYup.default#_validate)
- [camelCase](../wiki/MultilanguageYup.default#camelcase)
- [cast](../wiki/MultilanguageYup.default#cast)
- [clone](../wiki/MultilanguageYup.default#clone)
- [concat](../wiki/MultilanguageYup.default#concat)
- [constantCase](../wiki/MultilanguageYup.default#constantcase)
- [default](../wiki/MultilanguageYup.default#default)
- [defined](../wiki/MultilanguageYup.default#defined)
- [describe](../wiki/MultilanguageYup.default#describe)
- [from](../wiki/MultilanguageYup.default#from)
- [getDefault](../wiki/MultilanguageYup.default#getdefault)
- [getDefaultFromShape](../wiki/MultilanguageYup.default#getdefaultfromshape)
- [isType](../wiki/MultilanguageYup.default#istype)
- [isValid](../wiki/MultilanguageYup.default#isvalid)
- [isValidSync](../wiki/MultilanguageYup.default#isvalidsync)
- [label](../wiki/MultilanguageYup.default#label)
- [meta](../wiki/MultilanguageYup.default#meta)
- [noUnknown](../wiki/MultilanguageYup.default#nounknown)
- [notOneOf](../wiki/MultilanguageYup.default#notoneof)
- [notRequired](../wiki/MultilanguageYup.default#notrequired)
- [nullable](../wiki/MultilanguageYup.default#nullable)
- [omit](../wiki/MultilanguageYup.default#omit)
- [oneOf](../wiki/MultilanguageYup.default#oneof)
- [optional](../wiki/MultilanguageYup.default#optional)
- [pick](../wiki/MultilanguageYup.default#pick)
- [required](../wiki/MultilanguageYup.default#required)
- [resolve](../wiki/MultilanguageYup.default#resolve)
- [shape](../wiki/MultilanguageYup.default#shape)
- [snakeCase](../wiki/MultilanguageYup.default#snakecase)
- [strict](../wiki/MultilanguageYup.default#strict)
- [strip](../wiki/MultilanguageYup.default#strip)
- [test](../wiki/MultilanguageYup.default#test)
- [transform](../wiki/MultilanguageYup.default#transform)
- [transformKeys](../wiki/MultilanguageYup.default#transformkeys)
- [typeError](../wiki/MultilanguageYup.default#typeerror)
- [unknown](../wiki/MultilanguageYup.default#unknown)
- [validate](../wiki/MultilanguageYup.default#validate)
- [validateAt](../wiki/MultilanguageYup.default#validateat)
- [validateMultiLanguage](../wiki/MultilanguageYup.default#validatemultilanguage)
- [validateSync](../wiki/MultilanguageYup.default#validatesync)
- [validateSyncAt](../wiki/MultilanguageYup.default#validatesyncat)
- [when](../wiki/MultilanguageYup.default#when)
- [withMutation](../wiki/MultilanguageYup.default#withmutation)

## Constructors

### constructor

• **new default**<`TShape`, `TContext`, `TIn`, `TOut`\>(`spec?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TShape` | extends `ObjectShape` |
| `TContext` | extends `AnyObject` = `AnyObject` |
| `TIn` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> = `TypeOfShape`<`TShape`\> |
| `TOut` | extends `Maybe`<`AssertsShape`<`TShape`\>\> = `AssertsShape`<`TShape`\> \| `Extract`<`TIn`, `undefined` \| ``null``\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `TShape` |

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[constructor](../wiki/MultilanguageYup.BaseSchema#constructor)

#### Defined in

node_modules/yup/lib/object.d.ts:32

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

### fields

• **fields**: `TShape`

#### Defined in

node_modules/yup/lib/object.d.ts:27

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

• **spec**: `ObjectSchemaSpec`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[spec](../wiki/MultilanguageYup.BaseSchema#spec)

#### Defined in

node_modules/yup/lib/object.d.ts:28

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

▸ `Protected` **_cast**(`_value`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `options?` | `InternalOptions`<`TContext`\> |

#### Returns

`any`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_cast](../wiki/MultilanguageYup.BaseSchema#_cast)

#### Defined in

node_modules/yup/lib/object.d.ts:34

___

### \_getDefault

▸ `Protected` **_getDefault**(): `any`

#### Returns

`any`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_getDefault](../wiki/MultilanguageYup.BaseSchema#_getdefault)

#### Defined in

node_modules/yup/lib/object.d.ts:40

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

▸ `Protected` **_typeCheck**(`value`): value is NonNullable<TIn\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is NonNullable<TIn\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_typeCheck](../wiki/MultilanguageYup.BaseSchema#_typecheck)

#### Defined in

node_modules/yup/lib/object.d.ts:33

___

### \_validate

▸ `Protected` **_validate**(`_value`, `opts`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `any` |
| `opts` | `undefined` \| `InternalOptions`<`TContext`\> |
| `callback` | `Callback`<`any`\> |

#### Returns

`void`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[_validate](../wiki/MultilanguageYup.BaseSchema#_validate)

#### Defined in

node_modules/yup/lib/object.d.ts:35

___

### camelCase

▸ **camelCase**(): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:48

___

### cast

▸ **cast**(`value`, `options?`): `TIn`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options?` | `CastOptions`<`TContext`\> |

#### Returns

`TIn`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[cast](../wiki/MultilanguageYup.BaseSchema#cast)

#### Defined in

node_modules/yup/lib/schema.d.ts:88

___

### clone

▸ **clone**(`spec?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spec?` | `ObjectSchemaSpec` |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[clone](../wiki/MultilanguageYup.BaseSchema#clone)

#### Defined in

node_modules/yup/lib/object.d.ts:36

___

### concat

▸ **concat**<`TOther`\>(`schema`): `TOther` extends [`default`](../wiki/MultilanguageYup.default)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`default`](../wiki/MultilanguageYup.default)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOther` | extends [`default`](../wiki/MultilanguageYup.default)<`any`, `any`, `any`, `any`, `TOther`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `TOther` |

#### Returns

`TOther` extends [`default`](../wiki/MultilanguageYup.default)<`S`, `C`, `IType`, `AssertsShape`<`S`\> \| `Extract`<`IType`, `undefined` \| ``null``\>\> ? [`default`](../wiki/MultilanguageYup.default)<`TShape` & `S`, `TContext` & `C`, `Extract`<`IType`, `undefined` \| ``null``\> \| `TypeOfShape`<`TShape` & `S`\>, `AssertsShape`<`TShape` & `S`\> \| `Extract`<`Extract`<`IType`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`TShape` & `S`\>, `undefined` \| ``null``\>\> : `never`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[concat](../wiki/MultilanguageYup.BaseSchema#concat)

#### Defined in

node_modules/yup/lib/object.d.ts:37

▸ **concat**(`schema`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[concat](../wiki/MultilanguageYup.BaseSchema#concat)

#### Defined in

node_modules/yup/lib/object.d.ts:38

___

### constantCase

▸ **constantCase**(): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:50

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

▸ **defined**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[defined](../wiki/MultilanguageYup.BaseSchema#defined)

#### Defined in

node_modules/yup/lib/schema.d.ts:100

___

### describe

▸ **describe**(): `SchemaObjectDescription`

#### Returns

`SchemaObjectDescription`

#### Overrides

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[describe](../wiki/MultilanguageYup.BaseSchema#describe)

#### Defined in

node_modules/yup/lib/object.d.ts:51

___

### from

▸ **from**(`from`, `to`, `alias?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | keyof `TShape` |
| `alias?` | `boolean` |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:44

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

### getDefaultFromShape

▸ **getDefaultFromShape**(): `DefaultFromShape`<`TShape`\>

#### Returns

`DefaultFromShape`<`TShape`\>

#### Defined in

node_modules/yup/lib/object.d.ts:39

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

▸ **label**(`label`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[label](../wiki/MultilanguageYup.BaseSchema#label)

#### Defined in

node_modules/yup/lib/schema.d.ts:73

___

### meta

▸ **meta**(): `undefined` \| `Record`<`string`, `unknown`\>

#### Returns

`undefined` \| `Record`<`string`, `unknown`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:74

▸ **meta**(`obj`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[meta](../wiki/MultilanguageYup.BaseSchema#meta)

#### Defined in

node_modules/yup/lib/schema.d.ts:75

___

### noUnknown

▸ **noUnknown**(`noAllow?`, `message?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `noAllow?` | `boolean` |
| `message?` | `Message`<{}\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:45

___

### notOneOf

▸ **notOneOf**<`U`\>(`enums`, `message?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

▸ **nullable**(`isNullable?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable?` | ``true`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/schema.d.ts:103

▸ **nullable**(`isNullable`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isNullable` | ``false`` |

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[nullable](../wiki/MultilanguageYup.BaseSchema#nullable)

#### Defined in

node_modules/yup/lib/schema.d.ts:104

___

### omit

▸ **omit**(`keys`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/object.d.ts:43

___

### oneOf

▸ **oneOf**<`U`\>(`enums`, `message?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Maybe`<`TypeOfShape`<`TShape`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enums` | (`default`<`unknown`\> \| `Maybe`<`U`\>)[] |
| `message?` | `Message`<{ `values`: `any`  }\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

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

### pick

▸ **pick**(`keys`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string`[] |

#### Returns

`any`

#### Defined in

node_modules/yup/lib/object.d.ts:42

___

### required

▸ **required**(`message?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `Message`<{}\> |

#### Returns

`any`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[required](../wiki/MultilanguageYup.BaseSchema#required)

#### Defined in

node_modules/yup/lib/schema.d.ts:101

___

### resolve

▸ **resolve**(`options`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ResolveOptions`<`any`\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[resolve](../wiki/MultilanguageYup.BaseSchema#resolve)

#### Defined in

node_modules/yup/lib/schema.d.ts:80

___

### shape

▸ **shape**<`TNextShape`\>(`additions`, `excludes?`): [`default`](../wiki/MultilanguageYup.default)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TNextShape` | extends `ObjectShape` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `additions` | `TNextShape` |
| `excludes?` | [`string`, `string`][] |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`Assign`<`TShape`, `TNextShape`\>, `TContext`, `Extract`<`TIn`, `undefined` \| ``null``\> \| `TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `AssertsShape`<`Assign`<`TShape`, `TNextShape`\>\> \| `Extract`<`Extract`<`TIn`, `undefined` \| ``null``\>, `undefined` \| ``null``\> \| `Extract`<`TypeOfShape`<`Assign`<`TShape`, `TNextShape`\>\>, `undefined` \| ``null``\>\>

#### Defined in

node_modules/yup/lib/object.d.ts:41

___

### snakeCase

▸ **snakeCase**(): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:49

___

### strict

▸ **strict**(`isStrict?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `isStrict?` | `boolean` |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strict](../wiki/MultilanguageYup.BaseSchema#strict)

#### Defined in

node_modules/yup/lib/schema.d.ts:98

___

### strip

▸ **strip**(`strip?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `strip?` | `boolean` |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[strip](../wiki/MultilanguageYup.BaseSchema#strip)

#### Defined in

node_modules/yup/lib/schema.d.ts:132

___

### test

▸ **test**(`options`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `options` | [`TestConfig`](../wiki/MultilanguageYup#testconfig)<`TIn`, `TContext`\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:119

▸ **test**(`test`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:120

▸ **test**(`name`, `test`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:121

▸ **test**(`name`, `message`, `test`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `message` | `Message`<{}\> |
| `test` | [`TestFunction`](../wiki/MultilanguageYup#testfunction)<`TIn`, `TContext`\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[test](../wiki/MultilanguageYup.BaseSchema#test)

#### Defined in

node_modules/yup/lib/schema.d.ts:122

___

### transform

▸ **transform**(`fn`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `TransformFunction`<[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[transform](../wiki/MultilanguageYup.BaseSchema#transform)

#### Defined in

node_modules/yup/lib/schema.d.ts:105

___

### transformKeys

▸ **transformKeys**(`fn`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`key`: `string`) => `string` |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:47

___

### typeError

▸ **typeError**(`message`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Message`<{}\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[typeError](../wiki/MultilanguageYup.BaseSchema#typeerror)

#### Defined in

node_modules/yup/lib/schema.d.ts:125

___

### unknown

▸ **unknown**(`allow?`, `message?`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `allow?` | `boolean` |
| `message?` | `Message`<{}\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Defined in

node_modules/yup/lib/object.d.ts:46

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

### validateMultiLanguage

▸ **validateMultiLanguage**(`languages`, `schema`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `languages` | [`Language`](../wiki/Exports#language)[] |
| `schema` | [`AnySchema`](../wiki/MultilanguageYup#anyschema)<`any`, `any`, `any`\> |

#### Returns

`any`

#### Defined in

public/components/FormikMultilanguageField/yup-extended.ts:51

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

▸ **when**(`options`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ConditionOptions`<[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[when](../wiki/MultilanguageYup.BaseSchema#when)

#### Defined in

node_modules/yup/lib/schema.d.ts:123

▸ **when**(`keys`, `options`): [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `string` \| `string`[] |
| `options` | `ConditionOptions`<[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>\> |

#### Returns

[`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>

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
| `fn` | (`schema`: [`default`](../wiki/MultilanguageYup.default)<`TShape`, `TContext`, `TIn`, `TOut`\>) => `T` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/MultilanguageYup.BaseSchema).[withMutation](../wiki/MultilanguageYup.BaseSchema#withmutation)

#### Defined in

node_modules/yup/lib/schema.d.ts:76

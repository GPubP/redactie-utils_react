# Namespace: <internal\>

## Table of contents

### Classes

- [AlertService](../wiki/%3Cinternal%3E.AlertService)

### Interfaces

- [BaseMultiEntityModel](../wiki/%3Cinternal%3E.BaseMultiEntityModel)
- [CheckboxListProps](../wiki/%3Cinternal%3E.CheckboxListProps)
- [CopyValueProps](../wiki/%3Cinternal%3E.CopyValueProps)
- [InfoTooltipProps](../wiki/%3Cinternal%3E.InfoTooltipProps)
- [Observable](../wiki/%3Cinternal%3E.Observable)

### Type aliases

- [FlatObject](../wiki/%3Cinternal%3E#flatobject)

### Variables

- [DEFAULT\_API\_QUERY\_PARAMS\_CONFIG](../wiki/%3Cinternal%3E#default_api_query_params_config)
- [QUERY\_PARAMS\_MAP](../wiki/%3Cinternal%3E#query_params_map)

## Type aliases

### FlatObject

Ƭ **FlatObject**<`V`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `string` |

#### Index signature

▪ [key: `string`]: `V` \| ``null`` \| `undefined`

#### Defined in

public/hooks/useAPIQueryParams/useAPIQueryParams.types.ts:5

## Variables

### DEFAULT\_API\_QUERY\_PARAMS\_CONFIG

• `Const` **DEFAULT\_API\_QUERY\_PARAMS\_CONFIG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `direction` | { `type`: ``"number"`` = 'number' } |
| `direction.type` | ``"number"`` |
| `page` | { `defaultValue`: ``1`` = 1; `type`: ``"number"`` = 'number' } |
| `page.defaultValue` | ``1`` |
| `page.type` | ``"number"`` |
| `pagesize` | { `defaultValue`: ``20`` = 20; `type`: ``"number"`` = 'number' } |
| `pagesize.defaultValue` | ``20`` |
| `pagesize.type` | ``"number"`` |
| `sort` | { `type`: ``"string"`` = 'string' } |
| `sort.type` | ``"string"`` |

#### Defined in

public/hooks/useAPIQueryParams/useAPIQueryParams.const.ts:16

___

### QUERY\_PARAMS\_MAP

• `Const` **QUERY\_PARAMS\_MAP**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array` | `QueryParamConfig`<`undefined` \| ``null`` \| (``null`` \| `string`)[], `undefined` \| ``null`` \| (``null`` \| `string`)[]\> |
| `boolean` | `QueryParamConfig`<`undefined` \| ``null`` \| `boolean`, `undefined` \| ``null`` \| `boolean`\> |
| `date` | `QueryParamConfig`<`undefined` \| ``null`` \| `Date`, `undefined` \| ``null`` \| `Date`\> |
| `dateTime` | `QueryParamConfig`<`undefined` \| ``null`` \| `Date`, `undefined` \| ``null`` \| `Date`\> |
| `delimitedArray` | `QueryParamConfig`<`undefined` \| ``null`` \| (``null`` \| `string`)[], `undefined` \| ``null`` \| (``null`` \| `string`)[]\> |
| `delimitedNumericArray` | `QueryParamConfig`<`undefined` \| ``null`` \| (``null`` \| `number`)[], `undefined` \| ``null`` \| (``null`` \| `number`)[]\> |
| `json` | `QueryParamConfig`<`any`, `any`\> |
| `number` | `QueryParamConfig`<`undefined` \| ``null`` \| `number`, `undefined` \| ``null`` \| `number`\> |
| `numericArray` | `QueryParamConfig`<`undefined` \| ``null`` \| (``null`` \| `number`)[], `undefined` \| ``null`` \| (``null`` \| `number`)[]\> |
| `numericObject` | `QueryParamConfig`<`undefined` \| ``null`` \| { `[key: string]`: `number` \| ``null`` \| `undefined`;  }, `undefined` \| ``null`` \| { `[key: string]`: `number` \| ``null`` \| `undefined`;  }\> |
| `object` | `QueryParamConfig`<`undefined` \| ``null`` \| { `[key: string]`: `string` \| `undefined`;  }, `undefined` \| ``null`` \| { `[key: string]`: `string` \| `undefined`;  }\> |
| `string` | `QueryParamConfig`<`undefined` \| ``null`` \| `string`, `undefined` \| ``null`` \| `string`\> |

#### Defined in

public/hooks/useAPIQueryParams/useAPIQueryParams.const.ts:33

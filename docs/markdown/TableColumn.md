# Interface: TableColumn<RowData\>

Table

## Type parameters

| Name | Type |
| :------ | :------ |
| `RowData` | `unknown` |

## Table of contents

### Properties

- [classList](../wiki/TableColumn#classlist)
- [disableSorting](../wiki/TableColumn#disablesorting)
- [disabled](../wiki/TableColumn#disabled)
- [ellipsis](../wiki/TableColumn#ellipsis)
- [fallback](../wiki/TableColumn#fallback)
- [hidden](../wiki/TableColumn#hidden)
- [hideLabel](../wiki/TableColumn#hidelabel)
- [label](../wiki/TableColumn#label)
- [tdClassList](../wiki/TableColumn#tdclasslist)
- [value](../wiki/TableColumn#value)
- [width](../wiki/TableColumn#width)

### Methods

- [component](../wiki/TableColumn#component)
- [format](../wiki/TableColumn#format)
- [headerComponent](../wiki/TableColumn#headercomponent)
- [indentingComponent](../wiki/TableColumn#indentingcomponent)

## Properties

### classList

• `Optional` **classList**: `string`[]

#### Defined in

public/types/editorialUI.types.ts:74

___

### disableSorting

• `Optional` **disableSorting**: `boolean`

#### Defined in

public/types/editorialUI.types.ts:73

___

### disabled

• `Optional` **disabled**: `boolean`

#### Defined in

public/types/editorialUI.types.ts:72

___

### ellipsis

• `Optional` **ellipsis**: `boolean`

#### Defined in

public/types/editorialUI.types.ts:77

___

### fallback

• `Optional` **fallback**: `string`

#### Defined in

public/types/editorialUI.types.ts:76

___

### hidden

• `Optional` **hidden**: `boolean`

#### Defined in

public/types/editorialUI.types.ts:71

___

### hideLabel

• `Optional` **hideLabel**: `boolean`

#### Defined in

public/types/editorialUI.types.ts:79

___

### label

• **label**: `string`

#### Defined in

public/types/editorialUI.types.ts:65

___

### tdClassList

• `Optional` **tdClassList**: `string`[]

#### Defined in

public/types/editorialUI.types.ts:75

___

### value

• `Optional` **value**: `string`

#### Defined in

public/types/editorialUI.types.ts:66

___

### width

• `Optional` **width**: `string`

#### Defined in

public/types/editorialUI.types.ts:78

## Methods

### component

▸ `Optional` **component**(`value`, `rowData`, `rowIndex`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `rowData` | `RowData` |
| `rowIndex` | `number` |

#### Returns

`ReactNode`

#### Defined in

public/types/editorialUI.types.ts:67

___

### format

▸ `Optional` **format**(`value`, `col`, `rowData`, `rowIndex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `col` | [`TableColumn`](../wiki/TableColumn)<`RowData`\> |
| `rowData` | `RowData` |
| `rowIndex` | `number` |

#### Returns

`string`

#### Defined in

public/types/editorialUI.types.ts:70

___

### headerComponent

▸ `Optional` **headerComponent**(`value`, `label`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `label` | `string` |

#### Returns

`ReactNode`

#### Defined in

public/types/editorialUI.types.ts:69

___

### indentingComponent

▸ `Optional` **indentingComponent**(`value`, `rowData`, `rowIndex`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `rowData` | `RowData` |
| `rowIndex` | `number` |

#### Returns

`ReactNode`

#### Defined in

public/types/editorialUI.types.ts:68

# Interface: LeavePromptProps

## Table of contents

### Properties

- [allowedPaths](../wiki/LeavePromptProps#allowedpaths)
- [body](../wiki/LeavePromptProps#body)
- [cancelText](../wiki/LeavePromptProps#canceltext)
- [confirmText](../wiki/LeavePromptProps#confirmtext)
- [deleteText](../wiki/LeavePromptProps#deletetext)
- [shouldBlockNavigationOnConfirm](../wiki/LeavePromptProps#shouldblocknavigationonconfirm)
- [title](../wiki/LeavePromptProps#title)
- [when](../wiki/LeavePromptProps#when)

### Methods

- [navigate](../wiki/LeavePromptProps#navigate)
- [onCancel](../wiki/LeavePromptProps#oncancel)
- [onConfirm](../wiki/LeavePromptProps#onconfirm)
- [onDelete](../wiki/LeavePromptProps#ondelete)
- [shouldBlockNavigation](../wiki/LeavePromptProps#shouldblocknavigation)

## Properties

### allowedPaths

• `Optional` **allowedPaths**: `string`[]

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:5

___

### body

• `Optional` **body**: `ReactNode`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:6

___

### cancelText

• `Optional` **cancelText**: `string`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:7

___

### confirmText

• `Optional` **confirmText**: `string`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:8

___

### deleteText

• `Optional` **deleteText**: `string`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:9

___

### shouldBlockNavigationOnConfirm

• `Optional` **shouldBlockNavigationOnConfirm**: `boolean` \| (`location`: `Location`<`unknown`\>) => `boolean`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:17

___

### title

• `Optional` **title**: `string`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:10

___

### when

• **when**: `boolean`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:11

## Methods

### navigate

▸ `Optional` **navigate**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:12

___

### onCancel

▸ `Optional` **onCancel**(): `void`

#### Returns

`void`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:13

___

### onConfirm

▸ `Optional` **onConfirm**(): `void`

#### Returns

`void`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:14

___

### onDelete

▸ `Optional` **onDelete**(): `void`

#### Returns

`void`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:15

___

### shouldBlockNavigation

▸ `Optional` **shouldBlockNavigation**(`location`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | `Location`<`unknown`\> |

#### Returns

`boolean`

#### Defined in

public/components/LeavePrompt/LeavePrompt.types.ts:16

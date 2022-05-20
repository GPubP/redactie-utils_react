# Interface: CustomOptions

## Hierarchy

- `ToastOptions`

  ↳ **`CustomOptions`**

## Table of contents

### Properties

- [autoClose](../wiki/CustomOptions#autoclose)
- [autoDismiss](../wiki/CustomOptions#autodismiss)
- [bodyClassName](../wiki/CustomOptions#bodyclassname)
- [bodyStyle](../wiki/CustomOptions#bodystyle)
- [className](../wiki/CustomOptions#classname)
- [closeButton](../wiki/CustomOptions#closebutton)
- [closeOnClick](../wiki/CustomOptions#closeonclick)
- [containerId](../wiki/CustomOptions#containerid)
- [delay](../wiki/CustomOptions#delay)
- [draggable](../wiki/CustomOptions#draggable)
- [draggablePercent](../wiki/CustomOptions#draggablepercent)
- [hideProgressBar](../wiki/CustomOptions#hideprogressbar)
- [pauseOnFocusLoss](../wiki/CustomOptions#pauseonfocusloss)
- [pauseOnHover](../wiki/CustomOptions#pauseonhover)
- [position](../wiki/CustomOptions#position)
- [progress](../wiki/CustomOptions#progress)
- [progressClassName](../wiki/CustomOptions#progressclassname)
- [progressStyle](../wiki/CustomOptions#progressstyle)
- [role](../wiki/CustomOptions#role)
- [rtl](../wiki/CustomOptions#rtl)
- [scrollToTop](../wiki/CustomOptions#scrolltotop)
- [style](../wiki/CustomOptions#style)
- [toastId](../wiki/CustomOptions#toastid)
- [transition](../wiki/CustomOptions#transition)
- [type](../wiki/CustomOptions#type)
- [updateId](../wiki/CustomOptions#updateid)

### Methods

- [onClick](../wiki/CustomOptions#onclick)
- [onClose](../wiki/CustomOptions#onclose)
- [onOpen](../wiki/CustomOptions#onopen)

## Properties

### autoClose

• `Optional` **autoClose**: `number` \| ``false``

Set the delay in ms to close the toast automatically.
Use `false` to prevent the toast from closing.
`Default: 5000`

#### Inherited from

ToastOptions.autoClose

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:56

___

### autoDismiss

• `Optional` **autoDismiss**: `boolean`

#### Defined in

public/services/AlertService/AlertService.types.ts:11

___

### bodyClassName

• `Optional` **bodyClassName**: `ToastClassName`

An optional css class to set for the toast content.

#### Inherited from

ToastOptions.bodyClassName

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:79

___

### bodyStyle

• `Optional` **bodyStyle**: `CSSProperties`

An optional inline style to apply for the toast content.

#### Inherited from

ToastOptions.bodyStyle

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:83

___

### className

• `Optional` **className**: `ToastClassName`

An optional css class to set.

#### Inherited from

ToastOptions.className

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:127

___

### closeButton

• `Optional` **closeButton**: `boolean` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> \| (`props`: `any`) => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Pass a custom close button.
To remove the close button pass `false`

#### Inherited from

ToastOptions.closeButton

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:67

___

### closeOnClick

• `Optional` **closeOnClick**: `boolean`

Remove the toast when clicked.
`Default: true`

#### Inherited from

ToastOptions.closeOnClick

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:50

___

### containerId

• `Optional` **containerId**: `Id`

Set id to handle multiple container

#### Inherited from

ToastOptions.containerId

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:112

___

### delay

• `Optional` **delay**: `number`

Add a delay in ms before the toast appear.

#### Inherited from

ToastOptions.delay

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:160

___

### draggable

• `Optional` **draggable**: `boolean`

Allow toast to be draggable
`Default: true`

#### Inherited from

ToastOptions.draggable

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:97

___

### draggablePercent

• `Optional` **draggablePercent**: `number`

The percentage of the toast's width it takes for a drag to dismiss a toast
`Default: 80`

#### Inherited from

ToastOptions.draggablePercent

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:102

___

### hideProgressBar

• `Optional` **hideProgressBar**: `boolean`

Hide or show the progress bar.
`Default: false`

#### Inherited from

ToastOptions.hideProgressBar

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:88

___

### pauseOnFocusLoss

• `Optional` **pauseOnFocusLoss**: `boolean`

Pause the toast when the window loose focus.
`Default: true`

#### Inherited from

ToastOptions.pauseOnFocusLoss

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:45

___

### pauseOnHover

• `Optional` **pauseOnHover**: `boolean`

Pause the timer when the mouse hover the toast.
`Default: true`

#### Inherited from

ToastOptions.pauseOnHover

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:40

___

### position

• `Optional` **position**: `ToastPosition`

Set the default position to use.
`One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
`Default: 'top-right'`

#### Inherited from

ToastOptions.position

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:62

___

### progress

• `Optional` **progress**: `string` \| `number`

Set the percentage for the controlled progress bar. `Value must be between 0 and 1.`

#### Inherited from

ToastOptions.progress

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:156

___

### progressClassName

• `Optional` **progressClassName**: `ToastClassName`

An optional css class to set for the progress bar.

#### Inherited from

ToastOptions.progressClassName

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:71

___

### progressStyle

• `Optional` **progressStyle**: `CSSProperties`

An optional style to set for the progress bar.

#### Inherited from

ToastOptions.progressStyle

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:75

___

### role

• `Optional` **role**: `string`

Define the ARIA role for the toast
`Default: alert`
 https://www.w3.org/WAI/PF/aria/roles

#### Inherited from

ToastOptions.role

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:108

___

### rtl

• `Optional` **rtl**: `boolean`

Support right to left display.
`Default: false`

#### Inherited from

ToastOptions.rtl

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:121

___

### scrollToTop

• `Optional` **scrollToTop**: `boolean`

#### Defined in

public/services/AlertService/AlertService.types.ts:12

___

### style

• `Optional` **style**: `CSSProperties`

An optional inline style to apply.

#### Inherited from

ToastOptions.style

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:139

___

### toastId

• `Optional` **toastId**: `Id`

Set a custom `toastId`

#### Inherited from

ToastOptions.toastId

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:148

___

### transition

• `Optional` **transition**: `ToastTransition`

Pass a custom transition built with react-transition-group.

#### Inherited from

ToastOptions.transition

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:92

___

### type

• `Optional` **type**: `TypeOptions`

Set the toast type.
`One of: 'info', 'success', 'warning', 'error', 'default'`

#### Inherited from

ToastOptions.type

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:144

___

### updateId

• `Optional` **updateId**: `Id`

Used during update

#### Inherited from

ToastOptions.updateId

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:152

## Methods

### onClick

▸ `Optional` **onClick**(`event`): `void`

Fired when clicking inside toaster

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Inherited from

ToastOptions.onClick

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:116

___

### onClose

▸ `Optional` **onClose**<`T`\>(`props`): `void`

Called when toast is unmounted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `T` |

#### Returns

`void`

#### Inherited from

ToastOptions.onClose

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:135

___

### onOpen

▸ `Optional` **onOpen**<`T`\>(`props`): `void`

Called when toast is mounted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `T` |

#### Returns

`void`

#### Inherited from

ToastOptions.onOpen

#### Defined in

node_modules/react-toastify/dist/types/index.d.ts:131

# Interface: WorkerMessageEvent<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `MessageEvent`

  ↳ **`WorkerMessageEvent`**

## Table of contents

### Properties

- [AT\_TARGET](../wiki/WorkerMessageEvent#at_target)
- [BUBBLING\_PHASE](../wiki/WorkerMessageEvent#bubbling_phase)
- [CAPTURING\_PHASE](../wiki/WorkerMessageEvent#capturing_phase)
- [NONE](../wiki/WorkerMessageEvent#none)
- [bubbles](../wiki/WorkerMessageEvent#bubbles)
- [cancelBubble](../wiki/WorkerMessageEvent#cancelbubble)
- [cancelable](../wiki/WorkerMessageEvent#cancelable)
- [composed](../wiki/WorkerMessageEvent#composed)
- [currentTarget](../wiki/WorkerMessageEvent#currenttarget)
- [data](../wiki/WorkerMessageEvent#data)
- [defaultPrevented](../wiki/WorkerMessageEvent#defaultprevented)
- [eventPhase](../wiki/WorkerMessageEvent#eventphase)
- [isTrusted](../wiki/WorkerMessageEvent#istrusted)
- [lastEventId](../wiki/WorkerMessageEvent#lasteventid)
- [origin](../wiki/WorkerMessageEvent#origin)
- [ports](../wiki/WorkerMessageEvent#ports)
- [returnValue](../wiki/WorkerMessageEvent#returnvalue)
- [source](../wiki/WorkerMessageEvent#source)
- [srcElement](../wiki/WorkerMessageEvent#srcelement)
- [target](../wiki/WorkerMessageEvent#target)
- [timeStamp](../wiki/WorkerMessageEvent#timestamp)
- [type](../wiki/WorkerMessageEvent#type)

### Methods

- [composedPath](../wiki/WorkerMessageEvent#composedpath)
- [initEvent](../wiki/WorkerMessageEvent#initevent)
- [initMessageEvent](../wiki/WorkerMessageEvent#initmessageevent)
- [preventDefault](../wiki/WorkerMessageEvent#preventdefault)
- [stopImmediatePropagation](../wiki/WorkerMessageEvent#stopimmediatepropagation)
- [stopPropagation](../wiki/WorkerMessageEvent#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

MessageEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4954

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

MessageEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4955

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

MessageEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4956

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

MessageEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4957

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

MessageEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4920

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

MessageEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4921

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

MessageEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4923

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

MessageEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4925

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

MessageEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4927

___

### data

• **data**: `T`

#### Overrides

MessageEvent.data

#### Defined in

public/types/workers.types.ts:2

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

MessageEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4929

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

MessageEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4931

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

MessageEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4933

___

### lastEventId

• `Readonly` **lastEventId**: `string`

Returns the last event ID string, for server-sent events.

#### Inherited from

MessageEvent.lastEventId

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9442

___

### origin

• `Readonly` **origin**: `string`

Returns the origin of the message, for server-sent events and cross-document messaging.

#### Inherited from

MessageEvent.origin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9444

___

### ports

• `Readonly` **ports**: readonly `MessagePort`[]

Returns the MessagePort array sent with the message, for cross-document messaging and channel messaging.

#### Inherited from

MessageEvent.ports

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9446

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

MessageEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4935

___

### source

• `Readonly` **source**: ``null`` \| `MessageEventSource`

Returns the WindowProxy of the source window, for cross-document messaging, and the MessagePort being attached, in the connect event fired at SharedWorkerGlobalScope objects.

#### Inherited from

MessageEvent.source

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9448

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| `EventTarget`

**`deprecated`**

#### Inherited from

MessageEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4937

___

### target

• `Readonly` **target**: ``null`` \| `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

MessageEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4939

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

MessageEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4941

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

MessageEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4943

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

MessageEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4945

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

MessageEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4947

___

### initMessageEvent

▸ **initMessageEvent**(`type`, `bubbles?`, `cancelable?`, `data?`, `origin?`, `lastEventId?`, `source?`, `ports?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |
| `data?` | `any` |
| `origin?` | `string` |
| `lastEventId?` | `string` |
| `source?` | ``null`` \| `MessageEventSource` |
| `ports?` | `MessagePort`[] |

#### Returns

`void`

#### Inherited from

MessageEvent.initMessageEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9450

▸ **initMessageEvent**(`type`, `bubbles?`, `cancelable?`, `data?`, `origin?`, `lastEventId?`, `source?`, `ports?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |
| `data?` | `any` |
| `origin?` | `string` |
| `lastEventId?` | `string` |
| `source?` | ``null`` \| `MessageEventSource` |
| `ports?` | `Iterable`<`MessagePort`\> |

#### Returns

`void`

#### Inherited from

MessageEvent.initMessageEvent

#### Defined in

node_modules/typescript/lib/lib.dom.iterable.d.ts:146

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

MessageEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4949

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

MessageEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4951

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

MessageEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4953

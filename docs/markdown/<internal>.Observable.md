# Interface: Observable<T\>

[<internal>](../wiki/%3Cinternal%3E).Observable

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [subscribe](../wiki/%3Cinternal%3E.Observable#subscribe)

## Methods

### subscribe

▸ **subscribe**(`listener`, `error?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`value`: `T`) => `void` |
| `error?` | (`err`: `string`) => `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `unsubscribe` | () => `void` |

#### Defined in

public/hooks/useObservable/useObservable.types.ts:2

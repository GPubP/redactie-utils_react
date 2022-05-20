# Class: BaseMultiEntityStore<S, EntityType, IDType\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`\> |
| `EntityType` | `getEntityType`<`S`\> |
| `IDType` | `getIDType`<`S`\> |

## Hierarchy

- `EntityStore`<`S`, `EntityType`, `IDType`\>

  ↳ **`BaseMultiEntityStore`**

## Table of contents

### Constructors

- [constructor](../wiki/BaseMultiEntityStore#constructor)

### Properties

- [\_producerFn](../wiki/BaseMultiEntityStore#_producerfn)
- [cache](../wiki/BaseMultiEntityStore#cache)
- [cacheConfig](../wiki/BaseMultiEntityStore#cacheconfig)
- [config](../wiki/BaseMultiEntityStore#config)
- [deepFreeze](../wiki/BaseMultiEntityStore#deepfreeze)
- [idKey](../wiki/BaseMultiEntityStore#idkey)
- [options](../wiki/BaseMultiEntityStore#options)
- [resettable](../wiki/BaseMultiEntityStore#resettable)
- [selectEntityAction$](../wiki/BaseMultiEntityStore#selectentityaction$)
- [storeName](../wiki/BaseMultiEntityStore#storename)
- [ui](../wiki/BaseMultiEntityStore#ui)

### Methods

- [\_cache](../wiki/BaseMultiEntityStore#_cache)
- [\_select](../wiki/BaseMultiEntityStore#_select)
- [\_setState](../wiki/BaseMultiEntityStore#_setstate)
- [\_value](../wiki/BaseMultiEntityStore#_value)
- [add](../wiki/BaseMultiEntityStore#add)
- [addActive](../wiki/BaseMultiEntityStore#addactive)
- [addItem](../wiki/BaseMultiEntityStore#additem)
- [akitaPreAddEntity](../wiki/BaseMultiEntityStore#akitapreaddentity)
- [akitaPreCheckEntity](../wiki/BaseMultiEntityStore#akitaprecheckentity)
- [akitaPreUpdate](../wiki/BaseMultiEntityStore#akitapreupdate)
- [akitaPreUpdateEntity](../wiki/BaseMultiEntityStore#akitapreupdateentity)
- [createUIStore](../wiki/BaseMultiEntityStore#createuistore)
- [destroy](../wiki/BaseMultiEntityStore#destroy)
- [getValue](../wiki/BaseMultiEntityStore#getvalue)
- [move](../wiki/BaseMultiEntityStore#move)
- [ngOnDestroy](../wiki/BaseMultiEntityStore#ngondestroy)
- [remove](../wiki/BaseMultiEntityStore#remove)
- [removeActive](../wiki/BaseMultiEntityStore#removeactive)
- [replace](../wiki/BaseMultiEntityStore#replace)
- [reset](../wiki/BaseMultiEntityStore#reset)
- [set](../wiki/BaseMultiEntityStore#set)
- [setActive](../wiki/BaseMultiEntityStore#setactive)
- [setError](../wiki/BaseMultiEntityStore#seterror)
- [setHasCache](../wiki/BaseMultiEntityStore#sethascache)
- [setIsCreating](../wiki/BaseMultiEntityStore#setiscreating)
- [setIsUpdating](../wiki/BaseMultiEntityStore#setisupdating)
- [setItemError](../wiki/BaseMultiEntityStore#setitemerror)
- [setItemIsCreating](../wiki/BaseMultiEntityStore#setitemiscreating)
- [setItemIsFetching](../wiki/BaseMultiEntityStore#setitemisfetching)
- [setItemIsRemoving](../wiki/BaseMultiEntityStore#setitemisremoving)
- [setItemIsUpdating](../wiki/BaseMultiEntityStore#setitemisupdating)
- [setItemValue](../wiki/BaseMultiEntityStore#setitemvalue)
- [setLoading](../wiki/BaseMultiEntityStore#setloading)
- [toggleActive](../wiki/BaseMultiEntityStore#toggleactive)
- [update](../wiki/BaseMultiEntityStore#update)
- [updateActive](../wiki/BaseMultiEntityStore#updateactive)
- [updateStoreConfig](../wiki/BaseMultiEntityStore#updatestoreconfig)
- [upsert](../wiki/BaseMultiEntityStore#upsert)
- [upsertMany](../wiki/BaseMultiEntityStore#upsertmany)

## Constructors

### constructor

• **new BaseMultiEntityStore**<`S`, `EntityType`, `IDType`\>(`initialState?`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`, `S`\> |
| `EntityType` | `getEntityType`<`S`\> |
| `IDType` | `getIDType`<`S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | `Partial`<`S`\> |
| `options?` | `Partial`<`StoreConfigOptions`\> |

#### Overrides

EntityStore&lt;S, EntityType, IDType\&gt;.constructor

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:15

## Properties

### \_producerFn

• `Readonly` **\_producerFn**: (`state`: `any`, `fn`: `any`) => `any`

#### Type declaration

▸ (`state`, `fn`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `any` |
| `fn` | `any` |

##### Returns

`any`

#### Inherited from

EntityStore.\_producerFn

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:87

___

### cache

• `Protected` **cache**: `StoreCache`

#### Inherited from

EntityStore.cache

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:36

___

### cacheConfig

• `Readonly` **cacheConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ttl` | `number` |

#### Inherited from

EntityStore.cacheConfig

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:84

___

### config

• `Readonly` **config**: `StoreConfigOptions`

#### Inherited from

EntityStore.config

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:81

___

### deepFreeze

• `Readonly` **deepFreeze**: (`o`: `any`) => `any`

#### Type declaration

▸ (`o`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

##### Returns

`any`

#### Inherited from

EntityStore.deepFreeze

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:83

___

### idKey

• `Readonly` **idKey**: `string`

#### Inherited from

EntityStore.idKey

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:32

___

### options

• `Protected` **options**: `Partial`<`StoreConfigOptions`\>

#### Inherited from

EntityStore.options

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:27

___

### resettable

• `Readonly` **resettable**: `boolean`

#### Inherited from

EntityStore.resettable

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:88

___

### selectEntityAction$

• `Readonly` **selectEntityAction$**: `Observable`<`EntityAction`<`IDType`\>\>

#### Inherited from

EntityStore.selectEntityAction$

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:31

___

### storeName

• `Readonly` **storeName**: `string`

#### Inherited from

EntityStore.storeName

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:82

___

### ui

• **ui**: `EntityUIStore`<`any`, `EntityType`\>

#### Inherited from

EntityStore.ui

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:28

## Methods

### \_cache

▸ **_cache**(): `BehaviorSubject`<`boolean`\>

#### Returns

`BehaviorSubject`<`boolean`\>

#### Inherited from

EntityStore.\_cache

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:80

___

### \_select

▸ **_select**<`R`\>(`project`): `Observable`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`store`: `S`) => `R` |

#### Returns

`Observable`<`R`\>

#### Inherited from

EntityStore.\_select

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:78

___

### \_setState

▸ **_setState**(`newState`, `_dispatchAction?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `S` \| (`state`: `Readonly`<`S`\>) => `S` |
| `_dispatchAction?` | `boolean` |

#### Returns

`void`

#### Inherited from

EntityStore.\_setState

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:89

___

### \_value

▸ **_value**(): `S`

#### Returns

`S`

#### Inherited from

EntityStore.\_value

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:79

___

### add

▸ **add**(`entities`, `options?`): `void`

Add entities

**`example`**

this.store.add([Entity, Entity])
this.store.add(Entity)
this.store.add(Entity, { prepend: true })

this.store.add(Entity, { loading: false })

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `OrArray`<`EntityType`\> |
| `options?` | `AddEntitiesOptions` |

#### Returns

`void`

#### Inherited from

EntityStore.add

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:58

___

### addActive

▸ **addActive**<`T`\>(`ids`): `void`

Add active entities

**`example`**

store.addActive(2);
store.addActive([3, 4, 5]);

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `OrArray`<`IDType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `T` |

#### Returns

`void`

#### Inherited from

EntityStore.addActive

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:185

___

### addItem

▸ **addItem**(`id`, `item?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `IDType` |
| `item?` | `EntityType` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:28

___

### akitaPreAddEntity

▸ **akitaPreAddEntity**(`newEntity`): `EntityType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEntity` | `any` |

#### Returns

`EntityType`

#### Inherited from

EntityStore.akitaPreAddEntity

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:230

___

### akitaPreCheckEntity

▸ **akitaPreCheckEntity**(`newEntity`): `EntityType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newEntity` | `Readonly`<`EntityType`\> |

#### Returns

`EntityType`

#### Inherited from

EntityStore.akitaPreCheckEntity

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:231

___

### akitaPreUpdate

▸ **akitaPreUpdate**(`_`, `nextState`): `S`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Readonly`<`S`\> |
| `nextState` | `Readonly`<`S`\> |

#### Returns

`S`

#### Inherited from

EntityStore.akitaPreUpdate

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:119

___

### akitaPreUpdateEntity

▸ **akitaPreUpdateEntity**(`_`, `nextEntity`): `EntityType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `Readonly`<`EntityType`\> |
| `nextEntity` | `any` |

#### Returns

`EntityType`

#### Inherited from

EntityStore.akitaPreUpdateEntity

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:229

___

### createUIStore

▸ **createUIStore**(`initialState?`, `storeConfig?`): `EntityUIStore`<`any`, `EntityType`\>

Create sub UI store for managing Entity's UI state

**`example`**

export type ProductUI = {
  isLoading: boolean;
  isOpen: boolean
}

interface ProductsUIState extends EntityState<ProductUI> {}

export class ProductsStore EntityStore<ProductsState, Product> {
  ui: EntityUIStore<ProductsUIState, ProductUI>;

  constructor() {
    super();
    this.createUIStore();
  }

}

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState?` | `Object` |
| `storeConfig?` | `Partial`<`StoreConfigOptions`\> |

#### Returns

`EntityUIStore`<`any`, `EntityType`\>

#### Inherited from

EntityStore.createUIStore

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:227

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

EntityStore.destroy

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:228

___

### getValue

▸ **getValue**(): `S`

Sometimes we need to access the store value from a store

**`example`** middleware

#### Returns

`S`

#### Inherited from

EntityStore.getValue

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:68

___

### move

▸ **move**(`from`, `to`): `void`

Move entity inside the collection

**`example`**

this.store.move(fromIndex, toIndex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |

#### Returns

`void`

#### Inherited from

EntityStore.move

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:135

___

### ngOnDestroy

▸ **ngOnDestroy**(): `void`

#### Returns

`void`

#### Inherited from

EntityStore.ngOnDestroy

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:120

___

### remove

▸ **remove**(`id?`): `any`

Remove one or more entities

**`example`**

this.store.remove(5)
this.store.remove([1,2,3])
this.store.remove()

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `OrArray`<`IDType`\> |

#### Returns

`any`

#### Inherited from

EntityStore.remove

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:146

▸ **remove**(`predicate`): `any`

this.store.remove(entity => entity.id === 1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`entity`: `Readonly`<`EntityType`\>) => `boolean` |

#### Returns

`any`

#### Inherited from

EntityStore.remove

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:150

___

### removeActive

▸ **removeActive**<`T`\>(`ids`): `void`

Remove active entities

**`example`**

store.removeActive(2)
store.removeActive([3, 4, 5])

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `OrArray`<`IDType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `T` |

#### Returns

`void`

#### Inherited from

EntityStore.removeActive

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:194

___

### replace

▸ **replace**(`ids`, `newState`): `void`

Replace one or more entities (except the id property)

**`example`**

this.store.replace(5, newEntity)
this.store.replace([1,2,3], newEntity)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `IDS` |
| `newState` | `Partial`<`EntityType`\> |

#### Returns

`void`

#### Inherited from

EntityStore.replace

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:125

___

### reset

▸ **reset**(): `void`

Reset the current store back to the initial value

**`example`**

store.reset()

#### Returns

`void`

#### Inherited from

EntityStore.reset

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:99

___

### set

▸ **set**(`entities`, `options?`): `void`

Replace current collection with provided collection

**`example`**

this.store.set([Entity, Entity])
this.store.set({ids: [], entities: {}})
this.store.set({ 1: {}, 2: {}})

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `SetEntities`<`EntityType`\> |
| `options?` | `Object` |
| `options.activeId?` | ``null`` \| `IDType` |

#### Returns

`void`

#### Inherited from

EntityStore.set

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:44

___

### setActive

▸ **setActive**(`idOrOptions`): `any`

Set the given entity as active

**`example`**

store.setActive(1)
store.setActive([1, 2, 3])

#### Parameters

| Name | Type |
| :------ | :------ |
| `idOrOptions` | `S`[``"active"``] extends `any`[] ? `any`[`any`] : `SetActiveOptions` \| `S`[``"active"``] |

#### Returns

`any`

#### Inherited from

EntityStore.setActive

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:176

___

### setError

▸ **setError**<`T`\>(`error`): `void`

 Set the error state

**`example`**

 store.setError({text: 'unable to load data' })

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `T` |

#### Returns

`void`

#### Inherited from

EntityStore.setError

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:77

___

### setHasCache

▸ **setHasCache**(`hasCache`, `options?`): `void`

Set whether the data is cached

**`example`**

store.setHasCache(true)
store.setHasCache(false)
store.setHasCache(true, { restartTTL: true })

#### Parameters

| Name | Type |
| :------ | :------ |
| `hasCache` | `boolean` |
| `options?` | `Object` |
| `options.restartTTL` | `boolean` |

#### Returns

`void`

#### Inherited from

EntityStore.setHasCache

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:58

___

### setIsCreating

▸ **setIsCreating**(`isCreating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isCreating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:89

___

### setIsUpdating

▸ **setIsUpdating**(`isUpdating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isUpdating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:83

___

### setItemError

▸ **setItemError**(`id`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `IDType` |
| `error` | `any` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:47

___

### setItemIsCreating

▸ **setItemIsCreating**(`uuid`, `isCreating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isCreating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:69

___

### setItemIsFetching

▸ **setItemIsFetching**(`uuid`, `isFetching?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isFetching` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:55

___

### setItemIsRemoving

▸ **setItemIsRemoving**(`uuid`, `isRemoving?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isRemoving` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:62

___

### setItemIsUpdating

▸ **setItemIsUpdating**(`uuid`, `isUpdating?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `uuid` | `IDType` | `undefined` |
| `isUpdating` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:76

___

### setItemValue

▸ **setItemValue**(`id`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `IDType` |
| `value` | `getEntityType`<`S`\>[``"value"``] |

#### Returns

`void`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.store.ts:38

___

### setLoading

▸ **setLoading**(`loading?`): `void`

 Set the loading state

**`example`**

 store.setLoading(true)

#### Parameters

| Name | Type |
| :------ | :------ |
| `loading?` | `boolean` |

#### Returns

`void`

#### Inherited from

EntityStore.setLoading

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:46

___

### toggleActive

▸ **toggleActive**<`T`\>(`ids`): `void`

Toggle active entities

**`example`**

store.toggle(2)
store.toggle([3, 4, 5])

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `OrArray`<`IDType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `T` |

#### Returns

`void`

#### Inherited from

EntityStore.toggleActive

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:203

___

### update

▸ **update**(`id`, `newStateFn`): `any`

Update entities

**`example`**

store.update(1, entity => ...)
store.update([1, 2, 3], entity => ...)
store.update(null, entity => ...)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` \| `OrArray`<`IDType`\> |
| `newStateFn` | `UpdateStateCallback`<`EntityType`\> |

#### Returns

`any`

#### Inherited from

EntityStore.update

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:69

▸ **update**(`id`, `newState`): `any`

store.update(1, { name: newName })

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` \| `OrArray`<`IDType`\> |
| `newState` | `Partial`<`EntityType`\> |

#### Returns

`any`

#### Inherited from

EntityStore.update

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:73

▸ **update**(`predicate`, `newStateFn`): `any`

store.update(entity => entity.price > 3, entity => ({ name: newName }))

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `UpdateEntityPredicate`<`EntityType`\> |
| `newStateFn` | `UpdateStateCallback`<`EntityType`\> |

#### Returns

`any`

#### Inherited from

EntityStore.update

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:77

▸ **update**(`predicate`, `newState`): `any`

store.update(entity => entity.price > 3, { name: newName })

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `UpdateEntityPredicate`<`EntityType`\> |
| `newState` | `Partial`<`EntityType`\> |

#### Returns

`any`

#### Inherited from

EntityStore.update

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:81

▸ **update**(`newState`): `any`

Support non-entity updates

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `UpdateStateCallback`<`S`\> |

#### Returns

`any`

#### Inherited from

EntityStore.update

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:83

▸ **update**(`newState`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `Partial`<`S`\> |

#### Returns

`any`

#### Inherited from

EntityStore.update

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:84

___

### updateActive

▸ **updateActive**(`newStateOrCallback`): `void`

Update the active entity

**`example`**

this.store.updateActive({ completed: true })
this.store.updateActive(active => {
  return {
    config: {
     ..active.config,
     date
    }
  }
})

#### Parameters

| Name | Type |
| :------ | :------ |
| `newStateOrCallback` | `UpdateStateCallback`<`EntityType`\> \| `Partial`<`EntityType`\> |

#### Returns

`void`

#### Inherited from

EntityStore.updateActive

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:167

___

### updateStoreConfig

▸ **updateStoreConfig**(`newOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOptions` | `UpdatableStoreConfigOptions` |

#### Returns

`void`

#### Inherited from

EntityStore.updateStoreConfig

#### Defined in

node_modules/@datorama/akita/src/store.d.ts:118

___

### upsert

▸ **upsert**(`ids`, `newState`, `options?`): `void`

Create or update

**`example`**

store.upsert(1, { active: true })
store.upsert([2, 3], { active: true })
store.upsert([2, 3], entity => ({ isOpen: !entity.isOpen}))

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `OrArray`<`IDType`\> |
| `newState` | `EntityType` \| `EntityType`[] \| `UpdateStateCallback`<`EntityType`\> \| `Partial`<`EntityType`\> |
| `options?` | `Object` |
| `options.baseClass?` | `Constructor`<`any`\> |

#### Returns

`void`

#### Inherited from

EntityStore.upsert

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:96

___

### upsertMany

▸ **upsertMany**(`entities`, `options?`): `void`

Upsert entity collection (idKey must be present)

**`example`**

store.upsertMany([ { id: 1 }, { id: 2 }]);

store.upsertMany([ { id: 1 }, { id: 2 }], { loading: true  });
store.upsertMany([ { id: 1 }, { id: 2 }], { baseClass: Todo  });

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | `EntityType`[] |
| `options?` | `Object` |
| `options.baseClass?` | `Constructor`<`any`\> |
| `options.loading?` | `boolean` |

#### Returns

`void`

#### Inherited from

EntityStore.upsertMany

#### Defined in

node_modules/@datorama/akita/src/entityStore.d.ts:111

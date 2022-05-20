# Class: CacheEntityQuery<UIState, State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `UIState` | extends [`CacheEntityUIState`](../wiki/Exports#cacheentityuistate) = `any` |
| `State` | extends [`CacheEntityState`](../wiki/CacheEntityState)<`unknown`, `unknown`\> = `any` |

## Hierarchy

- `QueryEntity`<`State`\>

  ↳ **`CacheEntityQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/CacheEntityQuery#constructor)

### Properties

- [\_\_store\_\_](../wiki/CacheEntityQuery#__store__)
- [config](../wiki/CacheEntityQuery#config)
- [error$](../wiki/CacheEntityQuery#error$)
- [isCreating$](../wiki/CacheEntityQuery#iscreating$)
- [isFetching$](../wiki/CacheEntityQuery#isfetching$)
- [store](../wiki/CacheEntityQuery#store)
- [ui](../wiki/CacheEntityQuery#ui)

### Methods

- [createUIQuery](../wiki/CacheEntityQuery#createuiquery)
- [getActive](../wiki/CacheEntityQuery#getactive)
- [getActiveId](../wiki/CacheEntityQuery#getactiveid)
- [getAll](../wiki/CacheEntityQuery#getall)
- [getCount](../wiki/CacheEntityQuery#getcount)
- [getEntity](../wiki/CacheEntityQuery#getentity)
- [getHasCache](../wiki/CacheEntityQuery#gethascache)
- [getValue](../wiki/CacheEntityQuery#getvalue)
- [hasActive](../wiki/CacheEntityQuery#hasactive)
- [hasEntity](../wiki/CacheEntityQuery#hasentity)
- [select](../wiki/CacheEntityQuery#select)
- [selectActive](../wiki/CacheEntityQuery#selectactive)
- [selectActiveId](../wiki/CacheEntityQuery#selectactiveid)
- [selectAll](../wiki/CacheEntityQuery#selectall)
- [selectCount](../wiki/CacheEntityQuery#selectcount)
- [selectEntity](../wiki/CacheEntityQuery#selectentity)
- [selectEntityAction](../wiki/CacheEntityQuery#selectentityaction)
- [selectEntityError](../wiki/CacheEntityQuery#selectentityerror)
- [selectError](../wiki/CacheEntityQuery#selecterror)
- [selectFirst](../wiki/CacheEntityQuery#selectfirst)
- [selectHasCache](../wiki/CacheEntityQuery#selecthascache)
- [selectIsDeletingEntity](../wiki/CacheEntityQuery#selectisdeletingentity)
- [selectIsFetchingEntity](../wiki/CacheEntityQuery#selectisfetchingentity)
- [selectIsProp](../wiki/CacheEntityQuery#selectisprop)
- [selectIsUpdatingEntity](../wiki/CacheEntityQuery#selectisupdatingentity)
- [selectLast](../wiki/CacheEntityQuery#selectlast)
- [selectLoading](../wiki/CacheEntityQuery#selectloading)
- [selectMany](../wiki/CacheEntityQuery#selectmany)

## Constructors

### constructor

• **new CacheEntityQuery**<`UIState`, `State`\>(`store`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `UIState` | extends `EntityState`<`any`, `any`, `UIState`\> = `any` |
| `State` | extends [`CacheEntityState`](../wiki/CacheEntityState)<`unknown`, `unknown`, `State`\> = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`CacheEntityStore`](../wiki/CacheEntityStore)<`UIState`, `State`, `getEntityType`<`State`\>, `getIDType`<`State`\>\> |
| `options?` | `QueryConfigOptions`<`any`\> |

#### Overrides

QueryEntity&lt;State\&gt;.constructor

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:15

## Properties

### \_\_store\_\_

• **\_\_store\_\_**: `any`

#### Inherited from

QueryEntity.\_\_store\_\_

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:25

___

### config

• `Readonly` **config**: `QueryConfigOptions`<`any`\>

#### Inherited from

QueryEntity.config

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:72

___

### error$

• **error$**: `Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:26

___

### isCreating$

• **isCreating$**: `Observable`<`State`[``"isCreating"``]\>

GLOBAL UI STATES

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:24

___

### isFetching$

• **isFetching$**: `Observable`<`State`[``"isFetching"``]\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:25

___

### store

• `Protected` **store**: [`CacheEntityStore`](../wiki/CacheEntityStore)<`UIState`, `State`, `getEntityType`<`State`\>, `getIDType`<`State`\>\>

#### Inherited from

QueryEntity.store

___

### ui

• **ui**: `EntityUIQuery`<`UIState`, `any`\>

#### Overrides

QueryEntity.ui

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:13

## Methods

### createUIQuery

▸ **createUIQuery**(): `void`

Create sub UI query for querying Entity's UI state

**`example`**

export class ProductsQuery extends QueryEntity<ProductsState> {
  ui: EntityUIQuery<ProductsUIState>;

  constructor(protected store: ProductsStore) {
    super(store);
    this.createUIQuery();
  }

}

#### Returns

`void`

#### Inherited from

QueryEntity.createUIQuery

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:246

___

### getActive

▸ **getActive**(): `State`[``"active"``] extends `any`[] ? `getEntityType`<`State`\>[] : `getEntityType`<`State`\>

Get the active entity

**`example`**

this.query.getActive()

#### Returns

`State`[``"active"``] extends `any`[] ? `getEntityType`<`State`\>[] : `getEntityType`<`State`\>

#### Inherited from

QueryEntity.getActive

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:150

___

### getActiveId

▸ **getActiveId**(): `State`[``"active"``]

Get the active id

**`example`**

this.query.getActiveId()

#### Returns

`State`[``"active"``]

#### Inherited from

QueryEntity.getActiveId

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:132

___

### getAll

▸ **getAll**(`options`): `HashMap`<`getEntityType`<`State`\>\>

Get the entire store's entity collection

**`example`**

this.query.getAll()

this.query.getAll({
  limitTo: 5
  filterBy: entity => entity.completed === true
})

this.query.getAll({
  asObject: true,
  limitTo: 3
})

 this.query.getAll({
  sortBy: 'price',
  sortByOrder: Order.DESC
})

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsA`<`getEntityType`<`State`\>\> |

#### Returns

`HashMap`<`getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:78

▸ **getAll**(`options`): `getEntityType`<`State`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsB`<`getEntityType`<`State`\>\> |

#### Returns

`getEntityType`<`State`\>[]

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:79

▸ **getAll**(`options`): `HashMap`<`getEntityType`<`State`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsC`<`getEntityType`<`State`\>\> |

#### Returns

`HashMap`<`getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:80

▸ **getAll**(`options`): `getEntityType`<`State`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsD`<`getEntityType`<`State`\>\> |

#### Returns

`getEntityType`<`State`\>[]

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:81

▸ **getAll**(`options`): `getEntityType`<`State`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsE`<`getEntityType`<`State`\>\> |

#### Returns

`getEntityType`<`State`\>[]

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:82

▸ **getAll**(): `getEntityType`<`State`\>[]

#### Returns

`getEntityType`<`State`\>[]

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:83

___

### getCount

▸ **getCount**(`predicate?`): `number`

Get the store's entity collection length

**`example`**

this.query.getCount()
this.query.getCount(entity => entity.completed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`entity`: `getEntityType`<`State`\>, `index`: `number`) => `boolean` |

#### Returns

`number`

#### Inherited from

QueryEntity.getCount

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:168

___

### getEntity

▸ **getEntity**(`id`): `getEntityType`<`State`\>

Get an entity by id

**`example`**

this.query.getEntity(1);

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`State`\> |

#### Returns

`getEntityType`<`State`\>

#### Inherited from

QueryEntity.getEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:116

___

### getHasCache

▸ **getHasCache**(): `boolean`

Whether we've cached data

**`example`**

this.query.getHasCache()

#### Returns

`boolean`

#### Inherited from

QueryEntity.getHasCache

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:71

___

### getValue

▸ **getValue**(): `State`

Get the store's value

**`example`**

this.query.getValue()

#### Returns

`State`

#### Inherited from

QueryEntity.getValue

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:50

___

### hasActive

▸ **hasActive**(`id?`): `boolean`

Returns whether entity store has an active entity

**`example`**

this.query.hasActive()
this.query.hasActive(3)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `getIDType`<`State`\> |

#### Returns

`boolean`

#### Inherited from

QueryEntity.hasActive

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:228

___

### hasEntity

▸ **hasEntity**(`id`): `boolean`

Returns whether entity exists

**`example`**

this.query.hasEntity(2)
this.query.hasEntity(entity => entity.completed)
this.query.hasEntity([1, 2, 33])

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`State`\> |

#### Returns

`boolean`

#### Inherited from

QueryEntity.hasEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:215

▸ **hasEntity**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`State`\>[] |

#### Returns

`boolean`

#### Inherited from

QueryEntity.hasEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:216

▸ **hasEntity**(`project`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`entity`: `getEntityType`<`State`\>) => `boolean` |

#### Returns

`boolean`

#### Inherited from

QueryEntity.hasEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:217

▸ **hasEntity**(): `boolean`

#### Returns

`boolean`

#### Inherited from

QueryEntity.hasEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:218

___

### select

▸ **select**<`K`\>(`key`): `Observable`<`State`[`K`]\>

Select a slice from the store

**`example`**

this.query.select()
this.query.select(state => state.entities)
this.query.select('token');
this.query.select(['name', 'email'])
this.query.select([state => state.name, state => state.age])

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`Observable`<`State`[`K`]\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:21

▸ **select**<`R`\>(`project`): `Observable`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`store`: `State`) => `R` |

#### Returns

`Observable`<`R`\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:22

▸ **select**<`K`\>(`stateKeys`): `Observable`<`Pick`<`State`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateKeys` | `K`[] |

#### Returns

`Observable`<`Pick`<`State`, `K`\>\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:23

▸ **select**<`R`\>(`selectorFns`): `Observable`<`ReturnTypes`<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [(`state`: `State`) => `any`] \| (`state`: `State`) => `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectorFns` | `R` |

#### Returns

`Observable`<`ReturnTypes`<`R`\>\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:24

▸ **select**(): `Observable`<`State`\>

#### Returns

`Observable`<`State`\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:25

___

### selectActive

▸ **selectActive**<`R`\>(): `State`[``"active"``] extends `any`[] ? `Observable`<`getEntityType`<`State`\>[]\> : `Observable`<`getEntityType`<`State`\>\>

Select the active entity

**`example`**

this.query.selectActive()
this.query.selectActive(entity => entity.title)

#### Type parameters

| Name |
| :------ |
| `R` |

#### Returns

`State`[``"active"``] extends `any`[] ? `Observable`<`getEntityType`<`State`\>[]\> : `Observable`<`getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.selectActive

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:141

▸ **selectActive**<`R`\>(`project?`): `State`[``"active"``] extends `any`[] ? `Observable`<`R`[]\> : `Observable`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project?` | (`entity`: `getEntityType`<`State`\>) => `R` |

#### Returns

`State`[``"active"``] extends `any`[] ? `Observable`<`R`[]\> : `Observable`<`R`\>

#### Inherited from

QueryEntity.selectActive

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:142

___

### selectActiveId

▸ **selectActiveId**(): `Observable`<`State`[``"active"``]\>

Select the active entity's id

**`example`**

this.query.selectActiveId()

#### Returns

`Observable`<`State`[``"active"``]\>

#### Inherited from

QueryEntity.selectActiveId

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:124

___

### selectAll

▸ **selectAll**(`options`): `Observable`<`HashMap`<`getEntityType`<`State`\>\>\>

Select the entire store's entity collection

**`example`**

this.query.selectAll()

this.query.selectAll({
  limitTo: 5
  filterBy: entity => entity.completed === true
})

this.query.selectAll({
  asObject: true,
  limitTo: 3
})

 this.query.selectAll({
  sortBy: 'price',
  sortByOrder: Order.DESC
})

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsA`<`getEntityType`<`State`\>\> |

#### Returns

`Observable`<`HashMap`<`getEntityType`<`State`\>\>\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:50

▸ **selectAll**(`options`): `Observable`<`getEntityType`<`State`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsB`<`getEntityType`<`State`\>\> |

#### Returns

`Observable`<`getEntityType`<`State`\>[]\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:51

▸ **selectAll**(`options`): `Observable`<`HashMap`<`getEntityType`<`State`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsC`<`getEntityType`<`State`\>\> |

#### Returns

`Observable`<`HashMap`<`getEntityType`<`State`\>\>\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:52

▸ **selectAll**(`options`): `Observable`<`getEntityType`<`State`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsD`<`getEntityType`<`State`\>\> |

#### Returns

`Observable`<`getEntityType`<`State`\>[]\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:53

▸ **selectAll**(`options`): `Observable`<`getEntityType`<`State`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsE`<`getEntityType`<`State`\>\> |

#### Returns

`Observable`<`getEntityType`<`State`\>[]\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:54

▸ **selectAll**(): `Observable`<`getEntityType`<`State`\>[]\>

#### Returns

`Observable`<`getEntityType`<`State`\>[]\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:55

___

### selectCount

▸ **selectCount**(`predicate?`): `Observable`<`number`\>

Select the store's entity collection length

**`example`**

this.query.selectCount()
this.query.selectCount(entity => entity.completed)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate?` | (`entity`: `getEntityType`<`State`\>, `index`: `number`) => `boolean` |

#### Returns

`Observable`<`number`\>

#### Inherited from

QueryEntity.selectCount

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:159

___

### selectEntity

▸ **selectEntity**<`R`\>(`id`): `Observable`<`getEntityType`<`State`\>\>

Select an entity or a slice of an entity

**`example`**

this.query.selectEntity(1)
this.query.selectEntity(1, entity => entity.config.date)
this.query.selectEntity(1, 'comments')
this.query.selectEntity(e => e.title === 'title')

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`State`\> |

#### Returns

`Observable`<`getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.selectEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:105

▸ **selectEntity**<`K`\>(`id`, `project?`): `Observable`<`getEntityType`<`State`\>[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`State`\> |
| `project?` | `K` |

#### Returns

`Observable`<`getEntityType`<`State`\>[`K`]\>

#### Inherited from

QueryEntity.selectEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:106

▸ **selectEntity**<`R`\>(`id`, `project`): `Observable`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`State`\> |
| `project` | (`entity`: `getEntityType`<`State`\>) => `R` |

#### Returns

`Observable`<`R`\>

#### Inherited from

QueryEntity.selectEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:107

▸ **selectEntity**<`R`\>(`predicate`): `Observable`<`getEntityType`<`State`\>\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ItemPredicate`<`getEntityType`<`State`\>\> |

#### Returns

`Observable`<`getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.selectEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:108

___

### selectEntityAction

▸ **selectEntityAction**(`action`): `Observable`<`getIDType`<`State`\>[]\>

Listen for entity actions

**`example`**

 this.query.selectEntityAction(EntityActions.Add);
 this.query.selectEntityAction(EntityActions.Update);
 this.query.selectEntityAction(EntityActions.Remove);

 this.query.selectEntityAction();

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `EntityActions` |

#### Returns

`Observable`<`getIDType`<`State`\>[]\>

#### Inherited from

QueryEntity.selectEntityAction

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:203

▸ **selectEntityAction**(): `Observable`<`EntityAction`<`getIDType`<`State`\>\>\>

#### Returns

`Observable`<`EntityAction`<`getIDType`<`State`\>\>\>

#### Inherited from

QueryEntity.selectEntityAction

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:204

___

### selectEntityError

▸ **selectEntityError**(`entityId`): `Observable`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`any`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:44

___

### selectError

▸ **selectError**<`ErrorType`\>(): `Observable`<`ErrorType`\>

Select the error state

**`example`**

this.query.selectError().subscribe(error => {})

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ErrorType` | `any` |

#### Returns

`Observable`<`ErrorType`\>

#### Inherited from

QueryEntity.selectError

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:41

___

### selectFirst

▸ **selectFirst**<`R`\>(): `Observable`<`getEntityType`<`State`\>\>

Select the first entity from the store

**`example`**

this.query.selectFirst()
this.query.selectFirst(todo => todo.title)

#### Type parameters

| Name |
| :------ |
| `R` |

#### Returns

`Observable`<`getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.selectFirst

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:189

▸ **selectFirst**<`R`\>(`project`): `Observable`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`entity`: `getEntityType`<`State`\>) => `R` |

#### Returns

`Observable`<`R`\>

#### Inherited from

QueryEntity.selectFirst

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:190

___

### selectHasCache

▸ **selectHasCache**(): `Observable`<`boolean`\>

Select the cache state

**`example`**

this.query.selectHasCache().pipe(
  switchMap(hasCache => {
    return hasCache ? of() : http().pipe(res => store.set(res))
  })
)

#### Returns

`Observable`<`boolean`\>

#### Inherited from

QueryEntity.selectHasCache

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:62

___

### selectIsDeletingEntity

▸ **selectIsDeletingEntity**(`entityId`): `Observable`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:40

___

### selectIsFetchingEntity

▸ **selectIsFetchingEntity**(`entityId`): `Observable`<`boolean`\>

ENTITY UI STATE QUERIES

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:32

___

### selectIsProp

▸ `Protected` **selectIsProp**(`prop`, `entityId`): `Observable`<`boolean`\>

HELPERS

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `string` |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:55

___

### selectIsUpdatingEntity

▸ **selectIsUpdatingEntity**(`entityId`): `Observable`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityId` | `getIDType`<`UIState`\> |

#### Returns

`Observable`<`boolean`\>

#### Defined in

public/store/cacheEntity/cacheEntity.query.ts:36

___

### selectLast

▸ **selectLast**<`R`\>(): `Observable`<`getEntityType`<`State`\>\>

Select the last entity from the store

**`example`**

this.query.selectLast()
this.query.selectLast(todo => todo.title)

#### Type parameters

| Name |
| :------ |
| `R` |

#### Returns

`Observable`<`getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.selectLast

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:178

▸ **selectLast**<`R`\>(`project`): `Observable`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | (`entity`: `getEntityType`<`State`\>) => `R` |

#### Returns

`Observable`<`R`\>

#### Inherited from

QueryEntity.selectLast

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:179

___

### selectLoading

▸ **selectLoading**(): `Observable`<`boolean`\>

Select the loading state

**`example`**

this.query.selectLoading().subscribe(isLoading => {})

#### Returns

`Observable`<`boolean`\>

#### Inherited from

QueryEntity.selectLoading

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:33

___

### selectMany

▸ **selectMany**<`R`\>(`ids`): `Observable`<`getEntityType`<`State`\>[]\>

Select multiple entities from the store

**`example`**

this.query.selectMany([1,2,3])
this.query.selectMany([1,2], entity => entity.title)

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `getIDType`<`State`\>[] |

#### Returns

`Observable`<`getEntityType`<`State`\>[]\>

#### Inherited from

QueryEntity.selectMany

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:92

▸ **selectMany**<`R`\>(`ids`, `project`): `Observable`<`R`[]\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `getIDType`<`State`\>[] |
| `project` | (`entity`: `getEntityType`<`State`\>) => `R` |

#### Returns

`Observable`<`R`[]\>

#### Inherited from

QueryEntity.selectMany

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:93

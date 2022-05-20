# Class: BaseEntityQuery<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityState`](../wiki/BaseEntityState)<`unknown`, `unknown`\> |

## Hierarchy

- `QueryEntity`<`S`\>

  ↳ **`BaseEntityQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/BaseEntityQuery#constructor)

### Properties

- [\_\_store\_\_](../wiki/BaseEntityQuery#__store__)
- [config](../wiki/BaseEntityQuery#config)
- [error$](../wiki/BaseEntityQuery#error$)
- [isCreating$](../wiki/BaseEntityQuery#iscreating$)
- [isFetching$](../wiki/BaseEntityQuery#isfetching$)
- [isFetchingOne$](../wiki/BaseEntityQuery#isfetchingone$)
- [isRemoving$](../wiki/BaseEntityQuery#isremoving$)
- [isUpdating$](../wiki/BaseEntityQuery#isupdating$)
- [store](../wiki/BaseEntityQuery#store)
- [ui](../wiki/BaseEntityQuery#ui)

### Methods

- [convertBoolToLoadingState](../wiki/BaseEntityQuery#convertbooltoloadingstate)
- [createUIQuery](../wiki/BaseEntityQuery#createuiquery)
- [getActive](../wiki/BaseEntityQuery#getactive)
- [getActiveId](../wiki/BaseEntityQuery#getactiveid)
- [getAll](../wiki/BaseEntityQuery#getall)
- [getCount](../wiki/BaseEntityQuery#getcount)
- [getEntity](../wiki/BaseEntityQuery#getentity)
- [getHasCache](../wiki/BaseEntityQuery#gethascache)
- [getValue](../wiki/BaseEntityQuery#getvalue)
- [hasActive](../wiki/BaseEntityQuery#hasactive)
- [hasEntity](../wiki/BaseEntityQuery#hasentity)
- [select](../wiki/BaseEntityQuery#select)
- [selectActive](../wiki/BaseEntityQuery#selectactive)
- [selectActiveId](../wiki/BaseEntityQuery#selectactiveid)
- [selectAll](../wiki/BaseEntityQuery#selectall)
- [selectCount](../wiki/BaseEntityQuery#selectcount)
- [selectEntity](../wiki/BaseEntityQuery#selectentity)
- [selectEntityAction](../wiki/BaseEntityQuery#selectentityaction)
- [selectError](../wiki/BaseEntityQuery#selecterror)
- [selectFirst](../wiki/BaseEntityQuery#selectfirst)
- [selectHasCache](../wiki/BaseEntityQuery#selecthascache)
- [selectLast](../wiki/BaseEntityQuery#selectlast)
- [selectLoading](../wiki/BaseEntityQuery#selectloading)
- [selectMany](../wiki/BaseEntityQuery#selectmany)

## Constructors

### constructor

• **new BaseEntityQuery**<`S`\>(`store`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseEntityState`](../wiki/BaseEntityState)<`unknown`, `unknown`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`BaseEntityStore`](../wiki/BaseEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\> |
| `options?` | `QueryConfigOptions`<`any`\> |

#### Overrides

QueryEntity&lt;S\&gt;.constructor

#### Defined in

public/store/baseEntity/baseEntity.query.ts:10

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

public/store/baseEntity/baseEntity.query.ts:22

___

### isCreating$

• **isCreating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:31

___

### isFetching$

• **isFetching$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:25

___

### isFetchingOne$

• **isFetchingOne$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:28

___

### isRemoving$

• **isRemoving$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:37

___

### isUpdating$

• **isUpdating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseEntity/baseEntity.query.ts:34

___

### store

• `Protected` **store**: [`BaseEntityStore`](../wiki/BaseEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\>

#### Inherited from

QueryEntity.store

___

### ui

• **ui**: `EntityUIQuery`<`any`, `getEntityType`<`S`\>\>

#### Inherited from

QueryEntity.ui

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:23

## Methods

### convertBoolToLoadingState

▸ `Protected` **convertBoolToLoadingState**(`bool`): [`LoadingState`](../wiki/LoadingState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

[`LoadingState`](../wiki/LoadingState)

#### Defined in

public/store/baseEntity/baseEntity.query.ts:14

___

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

▸ **getActive**(): `S`[``"active"``] extends `any`[] ? `getEntityType`<`S`\>[] : `getEntityType`<`S`\>

Get the active entity

**`example`**

this.query.getActive()

#### Returns

`S`[``"active"``] extends `any`[] ? `getEntityType`<`S`\>[] : `getEntityType`<`S`\>

#### Inherited from

QueryEntity.getActive

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:150

___

### getActiveId

▸ **getActiveId**(): `S`[``"active"``]

Get the active id

**`example`**

this.query.getActiveId()

#### Returns

`S`[``"active"``]

#### Inherited from

QueryEntity.getActiveId

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:132

___

### getAll

▸ **getAll**(`options`): `HashMap`<`getEntityType`<`S`\>\>

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
| `options` | `SelectAllOptionsA`<`getEntityType`<`S`\>\> |

#### Returns

`HashMap`<`getEntityType`<`S`\>\>

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:78

▸ **getAll**(`options`): `getEntityType`<`S`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsB`<`getEntityType`<`S`\>\> |

#### Returns

`getEntityType`<`S`\>[]

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:79

▸ **getAll**(`options`): `HashMap`<`getEntityType`<`S`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsC`<`getEntityType`<`S`\>\> |

#### Returns

`HashMap`<`getEntityType`<`S`\>\>

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:80

▸ **getAll**(`options`): `getEntityType`<`S`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsD`<`getEntityType`<`S`\>\> |

#### Returns

`getEntityType`<`S`\>[]

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:81

▸ **getAll**(`options`): `getEntityType`<`S`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsE`<`getEntityType`<`S`\>\> |

#### Returns

`getEntityType`<`S`\>[]

#### Inherited from

QueryEntity.getAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:82

▸ **getAll**(): `getEntityType`<`S`\>[]

#### Returns

`getEntityType`<`S`\>[]

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
| `predicate?` | (`entity`: `getEntityType`<`S`\>, `index`: `number`) => `boolean` |

#### Returns

`number`

#### Inherited from

QueryEntity.getCount

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:168

___

### getEntity

▸ **getEntity**(`id`): `getEntityType`<`S`\>

Get an entity by id

**`example`**

this.query.getEntity(1);

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`S`\> |

#### Returns

`getEntityType`<`S`\>

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

▸ **getValue**(): `S`

Get the store's value

**`example`**

this.query.getValue()

#### Returns

`S`

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
| `id?` | `getIDType`<`S`\> |

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
| `id` | `getIDType`<`S`\> |

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
| `id` | `getIDType`<`S`\>[] |

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
| `project` | (`entity`: `getEntityType`<`S`\>) => `boolean` |

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

▸ **select**<`K`\>(`key`): `Observable`<`S`[`K`]\>

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

`Observable`<`S`[`K`]\>

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
| `project` | (`store`: `S`) => `R` |

#### Returns

`Observable`<`R`\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:22

▸ **select**<`K`\>(`stateKeys`): `Observable`<`Pick`<`S`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stateKeys` | `K`[] |

#### Returns

`Observable`<`Pick`<`S`, `K`\>\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:23

▸ **select**<`R`\>(`selectorFns`): `Observable`<`ReturnTypes`<`R`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends [(`state`: `S`) => `any`] \| (`state`: `S`) => `any`[] |

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

▸ **select**(): `Observable`<`S`\>

#### Returns

`Observable`<`S`\>

#### Inherited from

QueryEntity.select

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:25

___

### selectActive

▸ **selectActive**<`R`\>(): `S`[``"active"``] extends `any`[] ? `Observable`<`getEntityType`<`S`\>[]\> : `Observable`<`getEntityType`<`S`\>\>

Select the active entity

**`example`**

this.query.selectActive()
this.query.selectActive(entity => entity.title)

#### Type parameters

| Name |
| :------ |
| `R` |

#### Returns

`S`[``"active"``] extends `any`[] ? `Observable`<`getEntityType`<`S`\>[]\> : `Observable`<`getEntityType`<`S`\>\>

#### Inherited from

QueryEntity.selectActive

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:141

▸ **selectActive**<`R`\>(`project?`): `S`[``"active"``] extends `any`[] ? `Observable`<`R`[]\> : `Observable`<`R`\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project?` | (`entity`: `getEntityType`<`S`\>) => `R` |

#### Returns

`S`[``"active"``] extends `any`[] ? `Observable`<`R`[]\> : `Observable`<`R`\>

#### Inherited from

QueryEntity.selectActive

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:142

___

### selectActiveId

▸ **selectActiveId**(): `Observable`<`S`[``"active"``]\>

Select the active entity's id

**`example`**

this.query.selectActiveId()

#### Returns

`Observable`<`S`[``"active"``]\>

#### Inherited from

QueryEntity.selectActiveId

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:124

___

### selectAll

▸ **selectAll**(`options`): `Observable`<`HashMap`<`getEntityType`<`S`\>\>\>

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
| `options` | `SelectAllOptionsA`<`getEntityType`<`S`\>\> |

#### Returns

`Observable`<`HashMap`<`getEntityType`<`S`\>\>\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:50

▸ **selectAll**(`options`): `Observable`<`getEntityType`<`S`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsB`<`getEntityType`<`S`\>\> |

#### Returns

`Observable`<`getEntityType`<`S`\>[]\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:51

▸ **selectAll**(`options`): `Observable`<`HashMap`<`getEntityType`<`S`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsC`<`getEntityType`<`S`\>\> |

#### Returns

`Observable`<`HashMap`<`getEntityType`<`S`\>\>\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:52

▸ **selectAll**(`options`): `Observable`<`getEntityType`<`S`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsD`<`getEntityType`<`S`\>\> |

#### Returns

`Observable`<`getEntityType`<`S`\>[]\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:53

▸ **selectAll**(`options`): `Observable`<`getEntityType`<`S`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `SelectAllOptionsE`<`getEntityType`<`S`\>\> |

#### Returns

`Observable`<`getEntityType`<`S`\>[]\>

#### Inherited from

QueryEntity.selectAll

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:54

▸ **selectAll**(): `Observable`<`getEntityType`<`S`\>[]\>

#### Returns

`Observable`<`getEntityType`<`S`\>[]\>

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
| `predicate?` | (`entity`: `getEntityType`<`S`\>, `index`: `number`) => `boolean` |

#### Returns

`Observable`<`number`\>

#### Inherited from

QueryEntity.selectCount

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:159

___

### selectEntity

▸ **selectEntity**<`R`\>(`id`): `Observable`<`getEntityType`<`S`\>\>

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
| `id` | `getIDType`<`S`\> |

#### Returns

`Observable`<`getEntityType`<`S`\>\>

#### Inherited from

QueryEntity.selectEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:105

▸ **selectEntity**<`K`\>(`id`, `project?`): `Observable`<`getEntityType`<`S`\>[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `getIDType`<`S`\> |
| `project?` | `K` |

#### Returns

`Observable`<`getEntityType`<`S`\>[`K`]\>

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
| `id` | `getIDType`<`S`\> |
| `project` | (`entity`: `getEntityType`<`S`\>) => `R` |

#### Returns

`Observable`<`R`\>

#### Inherited from

QueryEntity.selectEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:107

▸ **selectEntity**<`R`\>(`predicate`): `Observable`<`getEntityType`<`S`\>\>

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `ItemPredicate`<`getEntityType`<`S`\>\> |

#### Returns

`Observable`<`getEntityType`<`S`\>\>

#### Inherited from

QueryEntity.selectEntity

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:108

___

### selectEntityAction

▸ **selectEntityAction**(`action`): `Observable`<`getIDType`<`S`\>[]\>

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

`Observable`<`getIDType`<`S`\>[]\>

#### Inherited from

QueryEntity.selectEntityAction

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:203

▸ **selectEntityAction**(): `Observable`<`EntityAction`<`getIDType`<`S`\>\>\>

#### Returns

`Observable`<`EntityAction`<`getIDType`<`S`\>\>\>

#### Inherited from

QueryEntity.selectEntityAction

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:204

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

▸ **selectFirst**<`R`\>(): `Observable`<`getEntityType`<`S`\>\>

Select the first entity from the store

**`example`**

this.query.selectFirst()
this.query.selectFirst(todo => todo.title)

#### Type parameters

| Name |
| :------ |
| `R` |

#### Returns

`Observable`<`getEntityType`<`S`\>\>

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
| `project` | (`entity`: `getEntityType`<`S`\>) => `R` |

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

### selectLast

▸ **selectLast**<`R`\>(): `Observable`<`getEntityType`<`S`\>\>

Select the last entity from the store

**`example`**

this.query.selectLast()
this.query.selectLast(todo => todo.title)

#### Type parameters

| Name |
| :------ |
| `R` |

#### Returns

`Observable`<`getEntityType`<`S`\>\>

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
| `project` | (`entity`: `getEntityType`<`S`\>) => `R` |

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

▸ **selectMany**<`R`\>(`ids`): `Observable`<`getEntityType`<`S`\>[]\>

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
| `ids` | `getIDType`<`S`\>[] |

#### Returns

`Observable`<`getEntityType`<`S`\>[]\>

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
| `ids` | `getIDType`<`S`\>[] |
| `project` | (`entity`: `getEntityType`<`S`\>) => `R` |

#### Returns

`Observable`<`R`[]\>

#### Inherited from

QueryEntity.selectMany

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:93

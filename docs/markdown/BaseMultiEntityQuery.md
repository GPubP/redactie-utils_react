# Class: BaseMultiEntityQuery<S\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`\> |

## Hierarchy

- `QueryEntity`<`S`\>

  ↳ **`BaseMultiEntityQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/BaseMultiEntityQuery#constructor)

### Properties

- [\_\_store\_\_](../wiki/BaseMultiEntityQuery#__store__)
- [config](../wiki/BaseMultiEntityQuery#config)
- [isCreating$](../wiki/BaseMultiEntityQuery#iscreating$)
- [isUpdating$](../wiki/BaseMultiEntityQuery#isupdating$)
- [store](../wiki/BaseMultiEntityQuery#store)
- [ui](../wiki/BaseMultiEntityQuery#ui)

### Methods

- [convertBoolToLoadingState](../wiki/BaseMultiEntityQuery#convertbooltoloadingstate)
- [convertModelToLoadingState](../wiki/BaseMultiEntityQuery#convertmodeltoloadingstate)
- [createUIQuery](../wiki/BaseMultiEntityQuery#createuiquery)
- [getActive](../wiki/BaseMultiEntityQuery#getactive)
- [getActiveId](../wiki/BaseMultiEntityQuery#getactiveid)
- [getAll](../wiki/BaseMultiEntityQuery#getall)
- [getCount](../wiki/BaseMultiEntityQuery#getcount)
- [getEntity](../wiki/BaseMultiEntityQuery#getentity)
- [getHasCache](../wiki/BaseMultiEntityQuery#gethascache)
- [getItem](../wiki/BaseMultiEntityQuery#getitem)
- [getItemError](../wiki/BaseMultiEntityQuery#getitemerror)
- [getItemIsCreating](../wiki/BaseMultiEntityQuery#getitemiscreating)
- [getItemIsFetching](../wiki/BaseMultiEntityQuery#getitemisfetching)
- [getItemIsRemoving](../wiki/BaseMultiEntityQuery#getitemisremoving)
- [getItemIsUpdating](../wiki/BaseMultiEntityQuery#getitemisupdating)
- [getItemValue](../wiki/BaseMultiEntityQuery#getitemvalue)
- [getValue](../wiki/BaseMultiEntityQuery#getvalue)
- [hasActive](../wiki/BaseMultiEntityQuery#hasactive)
- [hasEntity](../wiki/BaseMultiEntityQuery#hasentity)
- [select](../wiki/BaseMultiEntityQuery#select)
- [selectActive](../wiki/BaseMultiEntityQuery#selectactive)
- [selectActiveId](../wiki/BaseMultiEntityQuery#selectactiveid)
- [selectAll](../wiki/BaseMultiEntityQuery#selectall)
- [selectCount](../wiki/BaseMultiEntityQuery#selectcount)
- [selectEntity](../wiki/BaseMultiEntityQuery#selectentity)
- [selectEntityAction](../wiki/BaseMultiEntityQuery#selectentityaction)
- [selectError](../wiki/BaseMultiEntityQuery#selecterror)
- [selectFirst](../wiki/BaseMultiEntityQuery#selectfirst)
- [selectHasCache](../wiki/BaseMultiEntityQuery#selecthascache)
- [selectItem](../wiki/BaseMultiEntityQuery#selectitem)
- [selectItemError](../wiki/BaseMultiEntityQuery#selectitemerror)
- [selectItemIsCreating](../wiki/BaseMultiEntityQuery#selectitemiscreating)
- [selectItemIsFetching](../wiki/BaseMultiEntityQuery#selectitemisfetching)
- [selectItemIsRemoving](../wiki/BaseMultiEntityQuery#selectitemisremoving)
- [selectItemIsUpdating](../wiki/BaseMultiEntityQuery#selectitemisupdating)
- [selectItemValue](../wiki/BaseMultiEntityQuery#selectitemvalue)
- [selectLast](../wiki/BaseMultiEntityQuery#selectlast)
- [selectLoading](../wiki/BaseMultiEntityQuery#selectloading)
- [selectMany](../wiki/BaseMultiEntityQuery#selectmany)

## Constructors

### constructor

• **new BaseMultiEntityQuery**<`S`\>(`store`, `options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`BaseMultiEntityState`](../wiki/BaseMultiEntityState)<`any`, `any`, `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`BaseMultiEntityStore`](../wiki/BaseMultiEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\> |
| `options?` | `QueryConfigOptions`<`any`\> |

#### Overrides

QueryEntity&lt;S\&gt;.constructor

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:11

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

### isCreating$

• **isCreating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:76

___

### isUpdating$

• **isUpdating$**: `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:79

___

### store

• `Protected` **store**: [`BaseMultiEntityStore`](../wiki/BaseMultiEntityStore)<`S`, `getEntityType`<`S`\>, `getIDType`<`S`\>\>

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

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:26

___

### convertModelToLoadingState

▸ `Protected` **convertModelToLoadingState**(`item`, `property`): [`LoadingState`](../wiki/LoadingState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `undefined` \| `getEntityType`<`S`\> |
| `property` | keyof `getEntityType`<`S`\> |

#### Returns

[`LoadingState`](../wiki/LoadingState)

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:15

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

### getItem

▸ **getItem**(`uuid`): `undefined` \| `getEntityType`<`S`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `getEntityType`<`S`\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:34

___

### getItemError

▸ **getItemError**(`uuid`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`any`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:37

___

### getItemIsCreating

▸ **getItemIsCreating**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:40

___

### getItemIsFetching

▸ **getItemIsFetching**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:38

___

### getItemIsRemoving

▸ **getItemIsRemoving**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:44

___

### getItemIsUpdating

▸ **getItemIsUpdating**(`uuid`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `boolean`

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:42

___

### getItemValue

▸ **getItemValue**(`uuid`): `undefined` \| `getEntityType`<`S`\>[``"value"``]

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`undefined` \| `getEntityType`<`S`\>[``"value"``]

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:35

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

### selectItem

▸ **selectItem**(`uuid`): `Observable`<`undefined` \| `getEntityType`<`S`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<`undefined` \| `getEntityType`<`S`\>\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:47

___

### selectItemError

▸ **selectItemError**(`uuid`): `Observable`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<`any`\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:54

___

### selectItemIsCreating

▸ **selectItemIsCreating**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:63

___

### selectItemIsFetching

▸ **selectItemIsFetching**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:59

___

### selectItemIsRemoving

▸ **selectItemIsRemoving**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:71

___

### selectItemIsUpdating

▸ **selectItemIsUpdating**(`uuid`): `Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<[`LoadingState`](../wiki/LoadingState)\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:67

___

### selectItemValue

▸ **selectItemValue**(`uuid`): `Observable`<`getEntityType`<`S`\>[``"value"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uuid` | `getIDType`<`S`\> |

#### Returns

`Observable`<`getEntityType`<`S`\>[``"value"``]\>

#### Defined in

public/store/baseMultiEntityStore/baseMultiEntity.query.ts:49

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

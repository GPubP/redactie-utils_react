# Class: DynamicCompartmentsQuery<State\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

## Hierarchy

- `QueryEntity`<`State`\>

  ↳ **`DynamicCompartmentsQuery`**

## Table of contents

### Constructors

- [constructor](../wiki/DynamicCompartmentsQuery#constructor)

### Properties

- [\_\_store\_\_](../wiki/DynamicCompartmentsQuery#__store__)
- [active$](../wiki/DynamicCompartmentsQuery#active$)
- [all$](../wiki/DynamicCompartmentsQuery#all$)
- [config](../wiki/DynamicCompartmentsQuery#config)
- [store](../wiki/DynamicCompartmentsQuery#store)
- [ui](../wiki/DynamicCompartmentsQuery#ui)

### Methods

- [createUIQuery](../wiki/DynamicCompartmentsQuery#createuiquery)
- [getActive](../wiki/DynamicCompartmentsQuery#getactive)
- [getActiveId](../wiki/DynamicCompartmentsQuery#getactiveid)
- [getAll](../wiki/DynamicCompartmentsQuery#getall)
- [getCount](../wiki/DynamicCompartmentsQuery#getcount)
- [getEntity](../wiki/DynamicCompartmentsQuery#getentity)
- [getHasCache](../wiki/DynamicCompartmentsQuery#gethascache)
- [getValue](../wiki/DynamicCompartmentsQuery#getvalue)
- [hasActive](../wiki/DynamicCompartmentsQuery#hasactive)
- [hasEntity](../wiki/DynamicCompartmentsQuery#hasentity)
- [select](../wiki/DynamicCompartmentsQuery#select)
- [selectActive](../wiki/DynamicCompartmentsQuery#selectactive)
- [selectActiveId](../wiki/DynamicCompartmentsQuery#selectactiveid)
- [selectAll](../wiki/DynamicCompartmentsQuery#selectall)
- [selectCount](../wiki/DynamicCompartmentsQuery#selectcount)
- [selectEntity](../wiki/DynamicCompartmentsQuery#selectentity)
- [selectEntityAction](../wiki/DynamicCompartmentsQuery#selectentityaction)
- [selectError](../wiki/DynamicCompartmentsQuery#selecterror)
- [selectFirst](../wiki/DynamicCompartmentsQuery#selectfirst)
- [selectHasCache](../wiki/DynamicCompartmentsQuery#selecthascache)
- [selectLast](../wiki/DynamicCompartmentsQuery#selectlast)
- [selectLoading](../wiki/DynamicCompartmentsQuery#selectloading)
- [selectMany](../wiki/DynamicCompartmentsQuery#selectmany)

## Constructors

### constructor

• **new DynamicCompartmentsQuery**<`State`\>(`store`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `State` | extends `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`, `State`\> = `EntityState`<[`DynamicCompartmentModel`](../wiki/DynamicCompartmentModel), `string`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `store` | [`DynamicCompartmentsStore`](../wiki/DynamicCompartmentsStore)<`State`\> |

#### Overrides

QueryEntity&lt;State\&gt;.constructor

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.query.ts:15

## Properties

### \_\_store\_\_

• **\_\_store\_\_**: `any`

#### Inherited from

QueryEntity.\_\_store\_\_

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:25

___

### active$

• **active$**: `State`[``"active"``] extends `any`[] ? `Observable`<`getEntityType`<`State`\>[]\> : `Observable`<`getEntityType`<`State`\>\>

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.query.ts:13

___

### all$

• **all$**: `Observable`<`getEntityType`<`State`\>[]\>

#### Defined in

public/store/dynamicCompartments/dynamicCompartments.query.ts:12

___

### config

• `Readonly` **config**: `QueryConfigOptions`<`any`\>

#### Inherited from

QueryEntity.config

#### Defined in

node_modules/@datorama/akita/src/query.d.ts:72

___

### store

• `Protected` **store**: [`DynamicCompartmentsStore`](../wiki/DynamicCompartmentsStore)<`State`\>

#### Inherited from

QueryEntity.store

___

### ui

• **ui**: `EntityUIQuery`<`any`, `getEntityType`<`State`\>\>

#### Inherited from

QueryEntity.ui

#### Defined in

node_modules/@datorama/akita/src/queryEntity.d.ts:23

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

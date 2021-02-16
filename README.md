# Redactie Utils

Set of utilities to use in Redactie App and Modules.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Utilities](#features)
	* [Components](#Components)
		+ [RenderChildRoutes](#RenderChildRoutes)
		+ [DataLoader](#DataLoader)
		+ [DeletePrompt](#DeletePrompt)
		+ [ErrorMessage](#ErrorMessage)
		+ [FormikOnChangeHandler](#FormikOnChangeHandler)
		+ [LeavePrompt](#LeavePromt)
	* [Hooks](#hooks)
		+ [useAPIQueryParams](#useapiqueryparams)
		+ [useNavigate](#usNavigate)
		+ [useCreateHandlerSetter](#useCreateHandlerSetter)
		+ [useTenantContext](#useTenantContext)
		+ [useSiteContext](#useSiteContext)
		+ [useRoutes](#useRoutes)
		+ [useDidMount](#useDidMount)
		+ [useWillUnmount](#useWillUnmount)
		+ [usePrevious](#usePrevious)
		+ [usePersist](#usePersist)
		+ [useObservable](#useObservable)
		+ [useWorker](#useWorker)
		+ [usePromiseWorker](#usePromiseWorker)
		+ [useDetectValueChangesWorker](#useDetectValueChangesWorker)
		+ [useActiveRouteConfig](#useActiveRouteConfig)
		+ [useQuery](#useQuery)
	* [Context](#Context)
		+ [TenantContext](#TenantContext)
		+ [SiteContext](#SiteContext)
	* [Services](#services)
		+ [alertService](#alertservice)
- [Sandbox](#features)

## Installation

Clone this repo to your local machine

Now install all dependencies using npm

```shell
$ npm install
```

Run tests to see if everything is working correctly

```shell
$ npm run test
```

## Usage

Install the package using npm

```shell
$ npm install @redactie/utils
```

```js
import { useAPIQueryParams } from '@redactie/utils';
```

## Utilities

### Components

Commonly used components

</br>

#### RenderChildRoutes
<hr></br>

This component is used to render child routes.
It wraps the `Core.routes.render` function inside a component

**Usage**

```tsx
import { RenderChildRoutes } from '@redactie/utils';
import React from 'react';

const Root = () => {
	const routes = [
		component: () => <div>route component</div>,
		path: 'path',
		guardOptions: {}
	];
	const guardsMeta = {
		tenantId: 'id'
	};
	const extraOptions = {
		data: 'some data',
	};
	return (
		<Router>
			<RenderChildRoutes routes={routes} guardsMeta={guardsMeta} extraOptions={extraOptions}>
		<Router>
	)
}
```

**Props**
By default the config is extended with the following values:

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| routes            | `ModuleRouteConfig[] ` | undefined     | routes to render
| guardsMeta        | `Record<string, any>`  | undefined     | meta data that will be available for all guards
| extraOptions      | `Record<string, any>`  | undefined     | extra options that will be available for each child route

</br>

#### DataLoader
<hr></br>

Show component when data is loaded

**Usage**

```tsx
	import React, { useEffect, useState } from 'react';
	import { DataLoader, LoadingState } from '@redactie/utils';

	const DataLoaderComponent = () => {
		const [loading, setLoading] = useState(LoadingState.Loading);

		useEffect(() => {
			const timer = setTimeout(() => {
				setLoadingState(LoadingState.Loaded);
			}, 200)

			return () => clearTimeout(timer);
		}, [])

		const render = () = {
			return <p>render component when data is loaded</p>
		};

		return <DataLoader loadingState={loading} render={render} />;
	}

```

**Props**
By default the config is extended with the following values:

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| loadingState      | `LoadingState `         | undefined     | the loading state
| render            | `() => ReactElement | null`  | undefined     | The component that will be rendered when the loading state is set to loaded
| errorMessage     | `string`  | 'Er ging iets mis tijdens het ophalen van de data'  | Message that is shown when the loading state is set to Error
| notFoundMessage  | `string`  | 'Geen data gevonden' | Message that wil be shown when the render component return null

</br>

#### DeletePrompt
<hr></br>

A prompt that can be shown when deleting items

**Usage**

```tsx
import { DeletePrompt } from '@redactie/utils';

const ViewComponent = ({
	showModal = true,
	onCancel = () => null,
	onConfirm = () => null,
}) => {
	return (
		<>
			<DeletePrompt
				showModal={showModal}
				onConfirm={onConfirm}
				onCancel={onCancel}
			/>
		</>
	)
}
```

**Props**

| Name              | Type                   | Default value                | description
| ----------------- | ---------------------- | ---------------------------- | -----------
| body              | `ReactNode`            | DELETE_PROMPT_DEFAULT_PROPS  | body modal
| cancelText        | `string`               | DELETE_PROMPT_DEFAULT_PROPS  | cancel button text
| confirmText       | `string`               | DELETE_PROMPT_DEFAULT_PROPS  | confirm button text
| title             | `string`               | DELETE_PROMPT_DEFAULT_PROPS  | title modal
| showModal         | `boolean`              | true                         | title modal
| onCancel          | `() => void`           | undefined                    | onCancel callback
| onConfirm         | `() => void`           | undefined                    | onConfirm callback

<br>

#### ErrorMessage
<hr></br>

A custom formik ErrorMessage

**Usage**

```tsx
import { ErrorMessage } from '@redactie/utils';

const renderErrorMessage = () => {
	function validateName(value: string): string | undefined {
		let error;

		if (value === 'admin') {
			error = 'Nice try!';
		}

		return error;
	}

	return (
		<Formik
			initialValues={{
				name: '',
			}}
			onSubmit={() => {
				//
			}}
		>
			{() => (
				<Form>
					<Field name="name" validate={validateName} />
					<ErrorMessage className="custom-class" name="name" />
				</Form>
			)}
		</Formik>
	);
};

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| component         | `() => ReactElement`   | Div           | component to render
| className         | `string`               | ''            | className

</br>

#### FormikOnChangeHandler
<hr></br>

A custom formik on change handler

**Usage**

```tsx
import { FormikOnChangeHandler } from '@redactie/utils';

const renderFormikForm = ({
	onChangeHanlder: () => null
}) => {
	return (
		<Formik
			initialValues={{
				name: '',
			}}
			onSubmit={() => {
				//
			}}
		>
			{() => (
				<Form>
					<FormikOnChangeHandler
						delay={300}
						onChange={(values) => onChangeHanlder(values)}
					/>
					<Field name="name" />
				</Form>
			)}
		</Formik>
	);
};

```
**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| delay             | `number`               | 300           | delay
| onChange          | `(values: FormikValues) => void`  | '() => null'  | onChange callback function

</br>

#### LeavePromt
<hr></br>

A prompt that can be shown when navigating through the app

**Usage**

```tsx
import { LeavePrompt } from '@redactie/utils';

const ViewComponent = ({
	onFieldSubmit = () => null,
}) => {
	const showPromptOnLeave = true;
	const shouldBlockNavigationOnConfirm = () => true;
	return (
		<>
			<LeavePrompt
					shouldBlockNavigationOnConfirm={shouldBlockNavigationOnConfirm}
					when={showPromptOnLeave }
					onConfirm={onFieldSubmit}
				/>
		</>
	)
}
```

**Props**

| Name              | Type                   | Default value                | description
| ----------------- | ---------------------- | ---------------------------- | -----------
| body              | `ReactNode`            | LEAVE_PROMPT_DEFAULT_PROPS   | body modal
| cancelText        | `string`               | LEAVE_PROMPT_DEFAULT_PROPS   | cancel button text
| confirmText       | `string`               | LEAVE_PROMPT_DEFAULT_PROPS   | confirm button text
| deleteText        | `string`               | LEAVE_PROMPT_DEFAULT_PROPS   | delete button text
| title             | `string`               | LEAVE_PROMPT_DEFAULT_PROPS   | title modal
| when              | `boolean`              | undefined                    | show modal on navigate when true
| navigate          | `(path: string) => void` | history.push               | navigate function
| onCancel          | `() => void`               | undefined                | onCancel callback
| onConfirm         | `() => void`               | undefined                | onConfirm callback
| onDelete          | `() => void`               | undefined                | onDelete callback
| shouldBlockNavigationOnConfirm             | `location: Location) => boolean`     | () => false            | block navigation on confirm


<br>

### Hooks

Custom React hooks.

#### useAPIQueryParams
<hr></br>

Built upon [use-query-params](https://github.com/pbeshai/use-query-params). For more info on `<QueryParamProvider />` or `setQuery()` options be sure to check their API docs.

**Usage**:

Wrap your app with the `<QueryParamProvider />` and link your routing system (like react-router).

```tsx
import { QueryParamProvider } from '@redactie/utils';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = () => {
	return (
		<Router>
			<QueryParamProvider ReactRouterRoute={Route}>
				<App />
			</QueryParamProvider>
		</Router>
	);
}
```

Then we can call `useAPIQueryParams()` from within our App component with a given config.

```tsx
import { useAPIQueryParams } from '@redactie/utils';
import React from 'react';

const Example = () => {
	const [query, setQuery] = useAPIQueryParams({
		search: { type: 'string' },
		until: { defaultValue: Date.now(), type: 'date' },
	});
}
```

**Config**

useAPIQueryParams options:

| Property                | Type
| ----------------------- | ----
| defaultValue (optional) | `any`
| type                    | `'string' \| 'number' \| 'boolean' \| 'object' \| 'date' \| 'dateTime' \| 'numericObject' \| 'array' \| 'delimitedArray' \| 'numericArray' \| 'delimitedNumericArray' \| 'json'`

By default the config is extended with the following values:

| Name      | Type              | Default value
| --------- | ----------------- | -------------
| page      | `number`          | 1
| pagesize  | `number`          | 20
| sort      | `string`          | undefined
| direction | `'asc' \| 'desc'` | undefined

you can disable these defaults by adding your config and `false` as second param:

```tsx
const Example = () => {
	const [query, setQuery] = useAPIQueryParams(
		{
			search: { type: 'string' },
			until: { defaultValue: Date.now(), type: 'date' },
		},
		false
	);
}
```

#### useNavigate
<hr></br>

Navigate through the application by using the tenantContext

**Usage**

```tsx
import { useNavigate, TenantContext } from '@redactie/utils';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = () => {
	return (

		<Router>
			<TenantContext.Provider value={{ tenantId }}>
				<NavigateComponent/>
			</TenantContext.Provider>
		</Router>
	);
}

const NavigateComponent = () => {
	const pathPrefix = 'sites';
	const { navigate, generatePath } = useNavigate(pathPrefix);
	const siteId: '123';
	const path = '/:siteId/some-path';
	const locactionState = {
		state: 'value',
	};
	const queryParams = new URLSearchParams({
		search: 'name',
	});

	navigate(path, { siteId }, locactionState, queryParams);

	const generatedPath = generatePath(path, { siteId }, queryParams);

	return null;
}
```

**Props useNavigate**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| pathPrefix        | `string`               | undefined     | prefix the location path with the given string

</br>

**Props navigate**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| path              | `string`               | undefined     | path to navigate to
| params            | `Record<string, string>`| undefined    | route params
| state             | `Record<string, string>`| undefined    | location state
| queryParams       | `URLSearchParams`       | undefined    | query params

</br>

**Props generatePath**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| path              | `string`               | undefined     | path to navigate to
| params            | `Record<string, string>`| undefined    | route params
| queryParams       | `URLSearchParams`       | undefined    | query params

</br>

#### useCreateHandlerSetter
<hr></br>

Returns an array where the first item is the [ref](https://reactjs.org/docs/hooks-reference.html#useref) to a callback function and the second one is setter for that function.<br /><br />
Although it function looks quite similar to the [useState](https://reactjs.org/docs/hooks-reference.html#usestate),
hook, in this case the setter just makes sure the given callback is indeed a new function.<br /><br />

**Setting a callback ref does not imply your component to re-render.**<br /><br />
`createHandlerSetter` is useful when abstracting other hooks to possibly implement handlers setters.

**Usage**:

```tsx

import React from 'react';

import { useCreateHandlerSetter } from '@redactie/utils';

const Component = (): ReactElement => {
	const [onMountHandler, setOnMountHandler] = useCreateHandlerSetter(() => {});

	// current value
	onMountHandler.current();

	// set handler
	setOnMountHandler(() => {})

	return null;
};

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| handlerFn         | `Function `            | undefined     | callback function

</br>

#### useTenantContext
<hr></br>

Returns the current tenant context

**Usage**

```jsx
import { useTenantContext, TenantContext } from '@redactie/utils';

const TenantContextComponent = () => {
	const { tenantId } = useTenantContext();

	return null;
}

const Root = () => {
	return (
		<TenantContext.Provider value={{ tenantId: '123' }}>
			<TenantContextComponent />
		</TenantContext.Provider>;
	)
}

```

#### useSiteContext
<hr></br>

Returns the current site context

**Usage**

```jsx
import { useSiteContext, SiteContext } from '@redactie/utils';

const SiteContextComponent = () => {
	const { siteId } = useSiteContext();

	return null;
}

const Root = () => {
	return (
		<SiteContext.Provider value={{ siteId: '123' }}>
			<SiteContextComponent />
		</SiteContext.Provider>;
	)
}

```

#### useRoutes
<hr></br>

returns all routes available on the `Core.routes` module.

**Usage**

```tsx
import { useRoutes } from '@redactie/utils';

const ModuleRouteComponent = () => {
	const routes = userRoutes();


	return null;
}
```

#### useDidMount
<hr></br>

Accepts a function to be performed when the component did mount.

It is a shortcut to `useEffect(onMount, [])`

**Usage**:

```tsx
import React from 'react';

import { useDidMount } from '@redactie/utils';

const Component = (): ReactElement => {
	const onMount = useDidMount();

	onMount(() => {
		console.log('component did mount');
	});

	return null;
};

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| handlerFn         | `Function `            | undefined     | callback function

</br>

#### useWillUnmount
<hr></br>

Accepts a function to be performed right before the component unmounts.

It's as a shortcut to `useEffect(() => () => willUnmount, [])`

**Usage**:

```tsx
import React from 'react';

import { useWillUnmount } from '@redactie/utils';

const Component = (): ReactElement => {
	const onUnMount = useWillUnmount();

	onUnMount(() => {
		console.log('Component will unmount');
	});

	return null;
};

```
**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| handlerFn         | `Function `            | undefined     | callback function

<br/>

#### usePrevious
<hr></br>

A Hook to store the previous value

**Usage**:

```tsx
import { usePrevious } from '@redactie/utils';
import React, { useState } from 'react';

const Component = () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  return (
    <>
      <div>counter current value: {count}</div>
      <div>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        increase
      </button>
      <button type="button" onClick={() => setCount((c) => c - 1)}>
        decrease
      </button>
    </>
  );
};

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| state             | `T`                    | undefined     | the state needed to be tracked
| compareFunction   |  `(prev: T | undefined, next: T) => boolean` | undefined | optional, customize when the previous value need to be stored

<br/>

#### usePersist
<hr></br>

Hooks for persistent functions

**Usage**:

```tsx
import React, { useState, useCallback, useRef } from 'react';
import { usePersistFn } from '@redactie/utils';

export default () => {
	const [count, setCount] = useState(0);
	const showCountPersistFn = usePersistFn(() => {
		console.log(`Current count is ${count}`);
	});
	const showCountCommon = useCallback(() => {
		console.log(`Current count is ${count}`);
	}, [count]);
	return (
    	<>
			<button
				type="button"
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				Add Count
			</button>
			<p>
				You can click the button to see the number of sub-component renderings
			</p>
			<div>
				<h4>Component with persist function:</h4>
				{/* use persist function, ExpensiveTree component will only render once */}
				<ExpensiveTree showCount={showCountPersistFn} />
			</div>
			<div>
				<h4>Component without persist function:</h4>
				{/* without persist function, ExpensiveTree component will re-render on state change */}
				<ExpensiveTree showCount={showCountCommon} />
			</div>
		</>
	);
};
// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
	const renderCountRef = useRef(0);
	renderCountRef.current += 1;
	return (
		<div>
			<p>Render Count: {renderCountRef.current}</p>
			<button type="button" onClick={showCount}>
				showParentCount
			</button>
		</div>
	);
});

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| fn                | `(...args: any[]) => any`            | undefined     | Function that requires persistence

<br/>

#### useObservable
<hr></br>

React state hook that tracks the latest value of an Observable.

**Usage**:

```tsx
import {useObservable} from '@redactie/utils';

const counter$ = new BehaviorSubject(0);
const Demo = () => {
  const value = useObservable(counter$, 0);

  return (
    <button onClick={() => counter$.next(value + 1)}>
      Clicked {value} times
    </button>
  );
};

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| Observable        | Observable             | undefined     | The Observable to subscribe on
| initialValue      | any                    | undefined     | First emitted value

<br/>

#### useWorker
<hr></br>

A hook to use a web worker

**Usage**:

```tsx
import { useWorker } from '@redactie/utils';

const workerData = useMemo(
	() =>
		({
			data
		}),
	[data]
);
const defaultResult = null;
const [result] = useWorker<WorkerData, ResultData>(
	BFF_MODULE_PUBLIC_PATH,
	'custom.worker',
	workerData,
	defaultResult,
);
```

**Props**

| Name               | Type                   | Default value | description
| -----------------  | ---------------------- | ------------- | -----------
| bffModulePath      | string                 | undefined     | path where we can find the worker
| workerOrPath       | Worker | string        | undefined     | instance from a worker or a path where we can find it
| data               | any                    | undefined     | data send to the worker
| defaultValue       | any                    | undefined     | default result
| tenantContext      | any                    | Tenantcontext | context where we can find the tenantId


<br/>

#### usePromiseWorker
<hr></br>

A hook that makes it possible to communicate with a web worker by using a Promise API

```tsx
import { usePromiseWorker } from '@redactie/utils';

const [promiseWorker] = usePromiseWorker<WorkerData, ResultData>(
	BFF_MODULE_PUBLIC_PATH,
	'custom.worker',
);
promiseWorker.postMessage({data})
	.then(result => console.log(result))
	.catch(error => console.log(error))

```

**Props**

| Name               | Type                   | Default value | description
| -----------------  | ---------------------- | ------------- | -----------
| bffModulePath      | string                 | undefined     | path where we can find the worker
| workerOrPath       | Worker | string        | undefined     | instance from a worker or a path where we can find it
| timeoutTime        | number                 | 30000ms       | max time the worker has to respond
| tenantContext      | any                    | Tenantcontext | context where we can find the tenantId

<br/>

#### useDetectValueChangesWorker
<hr></br>

A hook that detect value changes by use a worker


```tsx
import { useDetectValueChangesWorker } from '@redactie/utils';

const [hasChanges] = useDetectValueChangesWorker(
		isLoaded,
		valueToCheck,
		BFF_MODULE_PUBLIC_PATH
	);
```

**Props**

| Name               | Type                   | Default value | description
| -----------------  | ---------------------- | ------------- | -----------
| isLoaded           | boolean                | undefined     | Indicates that the value to check is loaded successfully
| value              | any                    | undefined     | value to check
| bffModulePath      | string                 | undefined     | path where we can find the worker
| tenantContext      | any                    | Tenantcontext | context where we can find the tenantId

<br/>

#### useActiveRouteConfig
<hr></br>

Get the current active route configuration


```tsx
import { usActiveRouteConfig } from '@redactie/utils';
import { useLocation } from 'react-router-dom';

const location = useLocation();
const route = {
	path: 'path',
	component: Component,
	routes: [
		{
			path: 'path/child',
			component: Component,
		},
	],
}

const activeRouteConfig = usActiveRouteConfig(
		location
		route
	);
```

**Props**

| Name               | Type                   | Default value | description
| -----------------  | ---------------------- | ------------- | -----------
| location           | Location               | /             | Browser Location
| route              | ModuleRouteConfig      | /             | Route config

<br/>

#### useQuery
<hr></br>

Get the query params from the current url


```tsx
import { useQuery } from '@redactie/utils';

const query = useQuery();

```

<br/>

### Context

#### TenantContext
<hr></br>

Holds the tenantId

**Usage**

```tsx
import { TenantContext } from '@redactie/utils';

const SiteContentTypesComponent: FC<RouteProps> = ({
	match,
	route,
	tenantId,
}) => {
	return (
		<TenantContext.Provider value={{ tenantId }}>
			<div>some component</div>
		</TenantContext.Provider>
	);
};

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| value             | `{ tenantId: string }` | undefined     | The tenantId

<br/>

#### SiteContext
<hr></br>

Holds the sideId

**Usage**

```tsx
import { TenantContext, SiteContext } from '@redactie/utils';

const SiteContentTypesComponent: FC<RouteProps<{ siteId: string }>> = ({
	match,
	route,
	tenantId,
}) => {
	const { siteId } = match.params;

	return (
		<TenantContext.Provider value={{ tenantId }}>
			<SiteContext.Provider value={{ siteId }}>
				<div>some component</div>
			</SiteContext.Provider>
		</TenantContext.Provider>
	);
};

```

**Props**

| Name              | Type                   | Default value | description
| ----------------- | ---------------------- | ------------- | -----------
| value             | `{ siteId: string }`   | undefined     | The siteId

<br/>

### Services

#### AlertService
<hr></br>

Built upon [react-toastify](https://github.com/fkhadra/react-toastify). For more info on `<AlertContainer />` or `alertService()` options be sure to check their API docs.

**Usage**:

Add the `<AlertContainer />` component where you want your alerts to show in the app.

```tsx
import { AlertContainer } from '@redactie/utils';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Root = () => {
	return (
		<AlertContainer />
		<Router>
			<App />
		</Router>
	);
}
```

Then we can call our `alertService.[info|success|warning|danger]()` to show an alert in our container.

```tsx
const Example = () => {
	const showAlert = () => {
		alertService.info({ title: 'A title', message: 'Lorem ipsum' });
	};

	return (
		<button onClick={showAlert}>Alert me</button>
	);
}
```

**Config**

`<AlertContainer />` prop defaults:

| Property             | Value
| -------------------- | -----
| autoClose            | false
| closeButton          | false
| closeOnClick         | false
| draggable            | false
| enableMultiContainer | true
| hideProgressBar      | true
| limit                | 1

`alertService()` alert props:

| Property       | Type                  | Default value
| -------------- | --------------------- | -----
| className?:    | `string \| undefined`  | undefined
| closable?:     | `boolean \| undefined` | true
| ariaLabelClose | `string \| undefined`  | undefined
| message:       | `ReactNode`           | undefined
| title?:        | `string \| undefined`  | undefined


## Sandbox

You can test utilities in the sandbox environment before publishing

Create a tarball file from utils package.
This will create a file `redactie-utils-x.x.x.tgz`

```shell
$ npm pack
```

Install dependencies and the newly created tarball

```shell
$ cd sandbox/
$ npm install
$ npm install ../redactie-utils-x.x.x.tgz
```

Start up the local sandbox server

```shell
$ npm start
```

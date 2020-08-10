# Redactie Utils

Set of utilities to use in Redactie App and Modules.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Utilities](#features)
  * [Hooks](#hooks)
    + [useAPIQueryParams](#useapiqueryparams)
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

### Hooks

Custom React hooks.

#### useAPIQueryParams

Built upon [use-query-params](https://github.com/pbeshai/use-query-params). For more info on `<QueryParamProvider />` or `setQuery()` options be sure to check their API docs.

**Usage**:

Wrap your app with the `<QueryParamProvider />` and link your routing system (like react-router).

```js
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

```js
import { useAPIQueryParams } from '@redactie/utils';
import React from 'react';

const Example = () => {
	const [query, setQuery] = useAPIQueryParams({
		search: { type: 'string' },
		until: { defaultValue: Date.now(), type: 'date' },
	});
}
```

Config options:

| Property                | Type
| ----------------------- | -----------------
| defaultValue (optional) | `any`
| type                    | `'string' | 'number' | 'boolean' | 'object' | 'date' | 'dateTime' | 'numericObject' | 'array' | 'delimitedArray' | 'numericArray' | 'delimitedNumericArray' | 'json'`

By default the config is extended with the following values:

| Name      | Type             | Default value
| --------- | ---------------- | -------------
| page      | `number`         | 1
| pagesize  | `number`         | 20
| sort      | `string`         | undefined
| direction | `'asc' | 'desc'` | undefined

you can disable these defaults by adding your config and `false` as second param:

```js
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

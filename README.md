# node-yahoo-finance2

Community API for Yahoo-Finance

Copyright (c) 2021 by Gadi Cohen <dragon@wastelands.net>.  MIT licensed.

[![npm](https://img.shields.io/npm/v/yahoo-finance2)](https://www.npmjs.com/package/yahoo-finance2) [![CircleCI](https://img.shields.io/circleci/build/github/gadicc/node-yahoo-finance2)](https://circleci.com/gh/gadicc/node-yahoo-finance2) [![coverage](https://img.shields.io/codecov/c/github/gadicc/node-yahoo-finance2)](https://codecov.io/gh/gadicc/node-yahoo-finance2) ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

DO NOT USE!  In active development.  API may change without warning until
stable release.  Use
[node-yahoo-finance](https://www.npmjs.com/package/yahoo-finance)
instead, unless you are contributing to development.

## Unofficial API

This project is neither created nor endorsed by Yahoo Inc.  Yahoo does not
provide any official API to developers, nor makes any guarantees regarding
service availability or API consistency.  In practice however, the open
source community has kept this project (and it's predecessor) working well
since 2013.

Nevertheless, we make no guarantees and you use this package at your own risk.
The developers (and obviously Yahoo) cannot be held responsible for any losses
you may incur as a result of using this service.  Use of this package is
considered acknowledgement and acceptance of these terms and of it's license.

## Quickstart

The library can be imported into your project or used directly as a CLI.

**Importing**

```js
// Import the entire library or the specific module you need
import { search } from 'yahoo-finance2';
import search from 'yahoo-finance2/api/search';

const results = await search('AAPL');
const results = await search('AAPL', { someOption: true, etc });
```

**CLI** (Command line interface)

```bash
$ npm install -g yahoo-finance2
$ yahoo-finance search AAPL
$ yahoo-finance search AAPL '{ "someOption": true }'
```

For the full list of modules, see the [Documentation](./docs/docs.md).

## Devel Mode

In "devel" mode, any URL will only be fetched *once* and cached in memory
and on the disk.  All future requests (for the rest of time) will return the
cached result. This is very helpful to speed up development and is used
extensively for our tests.

```js
await search('AAPL', {}, { devel: true });                // uses sha1 from URL
await search('AAPL', {}, { devel: 'search-AAPL.json' });  // fixed filename
```

Note: `require('yahooFinanceFetchDevel')` is called conditionally when
`devel: true`.  It also uses packages from `devDependencies`.  As such,
deployment to production is not supported.

## Credits

* Massive thanks to [@pilwon](https://github.com/pilwon) for the original
[node-yahoo-finance](https://www.npmjs.com/package/yahoo-finance)
and for all our prior collaborations on this and other projects 🙏

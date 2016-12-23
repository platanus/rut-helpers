# Rut Helpers

[![Build Status](https://travis-ci.org/platanus/rut-helpers.svg?branch=master)](https://travis-ci.org/platanus/rut-helpers)

A small collection of helpers to validate and format strings to RUT (Chilean DNI).

## Installation
```bash
npm install rut-helpers --save
```

or with Yarn

```bash
yarn add rut-helpers
```

## Use

```javascript
// You can import everything
import * as rutHelpers from 'rut-helpers';

// Or import only what you need.
import { rutValidate, rutFormat } from 'rut-helpers';

// Or with node
var rutHelpers = require('rut-helpers');
```

### Validating RUTs
```javascript

rutHelpers.rutValidate('THIS IS A RUT');
// false

rutHelpers.rutValidate('7.618.285-K');
// true

rutHelpers.rutValidate('7618285K');
// true
```

### Formatting strings as RUTs

```javascript
rutHelpers.rutFormat('7618285K');
// 7.618.285-K
```

### Cleaning RUTs

```javascript
rutHelpers.rutClean('7.618.285-K');
// 7618285K
```

## Contributing

If you want to add functionality please go to
the [contributing](/docs/CONTRIBUTING.md)

## Credits

Thank you [contributors](https://github.com/platanus/rut-helpers/graphs/contributors)!

<img src="http://platan.us/gravatar_with_text.png" alt="Platanus" width="250"/>

rut-helpers is maintained by [platanus](http://platan.us).

## License

Potassium is © 2017 platanus, spa. It is free software and may be redistributed under the terms specified in the LICENSE file.
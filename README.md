# Rut Helpers

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
import { rutValidator, rutFormat } from 'rut-helpers';

// Or with node
var rutHelpers = require('rut-helpers');
```

### Validating RUTs

```javascript

rutHelpers.rutValidator('THIS IS A RUT');
// false

rutHelpers.rutValidator('7.618.285-K');
// true

rutHelpers.rutValidator('7618285K');
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
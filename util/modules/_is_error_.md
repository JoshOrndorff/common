> # External module: "is/error"

### Index

#### Functions

* [isError](_is_error_.md#iserror)

## Functions

###  isError

▸ **isError**(`value`: any): *boolean*

*Defined in [is/error.ts:22](https://github.com/polkadot-js/common/blob/f13810d/packages/util/src/is/error.ts#L22)*

**`name`** isError

**`summary`** Tests for a `Error` object instance.

**`description`** 
Checks to see if the input object is an instance of `Error`.

**`example`** 
<BR>

```javascript
import { isError } from '@polkadot/util';

console.log('isError', isError(new Error('message'))); // => true
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*
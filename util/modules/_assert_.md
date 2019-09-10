**[Polkadot JS Common](../README.md)**

[Globals](../globals.md) › ["assert"](_assert_.md)

# External module: "assert"

## Index

### Functions

* [assert](_assert_.md#assert)

## Functions

###  assert

▸ **assert**<**T**>(`test`: Falsy | T, `message`: string | MessageFn): *boolean*

*Defined in [assert.ts:27](https://github.com/polkadot-js/common/blob/a5d2369/packages/util/src/assert.ts#L27)*

**`name`** assert

**`summary`** Checks for a valid test, if not Error is thrown.

**`description`** 
Checks that `test` is a truthy value. If value is falsy (`null`, `undefined`, `false`, ...), it throws an Error with the supplied `message`. When `test` passes, `true` is returned.

**`example`** 
<BR>

```javascript
const { assert } from '@polkadot/util';

assert(true, 'True should be true'); // true returned
assert(false, 'False should not be true'); // Error thrown
assert(false, () => 'message'); // Error with 'message'
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`test` | Falsy \| T |
`message` | string \| MessageFn |

**Returns:** *boolean*
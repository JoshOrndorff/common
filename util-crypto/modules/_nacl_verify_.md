> # External module: "nacl/verify"

## Index

### Functions

* [naclVerify](_nacl_verify_.md#naclverify)

## Functions

###  naclVerify

▸ **naclVerify**(`message`: `Uint8Array` | string, `signature`: `Uint8Array` | string, `publicKey`: `Uint8Array` | string): *boolean*

*Defined in [nacl/verify.ts:23](https://github.com/polkadot-js/common/blob/395569c/packages/util-crypto/src/nacl/verify.ts#L23)*

**`name`** naclSign

**`summary`** Verifies the signature on the supplied message.

**`description`** 
Verifies the `signature` on `message` with the supplied `plublicKey`. Returns `true` on sucess, `false` otherwise.

**`example`** 
<BR>

```javascript
import { naclVerify } from '@polkadot/util-crypto';

naclVerify([...], [...], [...]); // => true/false
```

**Parameters:**

Name | Type |
------ | ------ |
`message` | `Uint8Array` \| string |
`signature` | `Uint8Array` \| string |
`publicKey` | `Uint8Array` \| string |

**Returns:** *boolean*
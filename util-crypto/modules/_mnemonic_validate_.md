> # External module: "mnemonic/validate"

### Index

#### Functions

* [mnemonicValidate](_mnemonic_validate_.md#mnemonicvalidate)

## Functions

###  mnemonicValidate

▸ **mnemonicValidate**(`mnemonic`: string): *boolean*

*Defined in [mnemonic/validate.ts:23](https://github.com/polkadot-js/common/blob/f13810d/packages/util-crypto/src/mnemonic/validate.ts#L23)*

**`name`** mnemonicValidate

**`summary`** Validates a mnemonic input using [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

**`example`** 
<BR>

```javascript
import { mnemonicGenerate, mnemonicValidate } from '@polkadot/util-crypto';

const mnemonic = mnemonicGenerate(); // => string
const isValidMnemonic = mnemonicValidate(mnemonic); // => boolean
```

**Parameters:**

Name | Type |
------ | ------ |
`mnemonic` | string |

**Returns:** *boolean*
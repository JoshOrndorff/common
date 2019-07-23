> # Interface: Codec

## Hierarchy

* **Codec**

## Index

### Properties

* [decode](_types_.codec.md#decode)
* [encode](_types_.codec.md#encode)
* [hashing](_types_.codec.md#hashing)
* [type](_types_.codec.md#type)

## Properties

###  decode

• **decode**: *function*

*Defined in [types.ts:6](https://github.com/polkadot-js/common/blob/884c965/packages/trie-codec/src/types.ts#L6)*

#### Type declaration:

▸ (`input`: null | `Uint8Array`): *`Uint8Array` | null | null | `Uint8Array` | null | `Uint8Array`[][]*

**Parameters:**

Name | Type |
------ | ------ |
`input` | null \| `Uint8Array` |

___

###  encode

• **encode**: *function*

*Defined in [types.ts:7](https://github.com/polkadot-js/common/blob/884c965/packages/trie-codec/src/types.ts#L7)*

#### Type declaration:

▸ (`input?`: null | `Uint8Array` | null | `Uint8Array`[]): *`Uint8Array`*

**Parameters:**

Name | Type |
------ | ------ |
`input?` | null \| `Uint8Array` \| null \| `Uint8Array`[] |

___

###  hashing

• **hashing**: *function*

*Defined in [types.ts:8](https://github.com/polkadot-js/common/blob/884c965/packages/trie-codec/src/types.ts#L8)*

#### Type declaration:

▸ (`input`: `Uint8Array`): *`Uint8Array`*

**Parameters:**

Name | Type |
------ | ------ |
`input` | `Uint8Array` |

___

###  type

• **type**: *string*

*Defined in [types.ts:9](https://github.com/polkadot-js/common/blob/884c965/packages/trie-codec/src/types.ts#L9)*
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [eth-connect](./eth-connect.md) &gt; [BigNumber](./eth-connect.bignumber.md) &gt; [Config](./eth-connect.bignumber.config.md) &gt; [CRYPTO](./eth-connect.bignumber.config.crypto.md)

## BigNumber.Config.CRYPTO property

A boolean: `true` or `false`<!-- -->. Default value: `false`<!-- -->.

The value that determines whether cryptographically-secure pseudo-random number generation is used. If `CRYPTO` is set to true then the random method will generate random digits using `crypto.getRandomValues` in browsers that support it, or `crypto.randomBytes` if using a version of Node.js that supports it.

If neither function is supported by the host environment then attempting to set `CRYPTO` to `true` will fail and an exception will be thrown.

If `CRYPTO` is `false` then the source of randomness used will be `Math.random` (which is assumed to generate at least 30 bits of randomness).

See `BigNumber.random`<!-- -->.

```ts
BigNumber.config({ CRYPTO: true })
BigNumber.config().CRYPTO       // true
BigNumber.random()              // 0.54340758610486147524

```

<b>Signature:</b>

```typescript
CRYPTO?: boolean;
```
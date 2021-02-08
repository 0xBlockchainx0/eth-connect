<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [eth-connect](./eth-connect.md) &gt; [BigNumber](./eth-connect.bignumber.md) &gt; [Config](./eth-connect.bignumber.config.md) &gt; [POW\_PRECISION](./eth-connect.bignumber.config.pow_precision.md)

## BigNumber.Config.POW\_PRECISION property

An integer, 0 to 1e+9. Default value: 0.

The maximum precision, i.e. number of significant digits, of the result of the power operation - unless a modulus is specified.

If set to 0, the number of significant digits will not be limited.

See `exponentiatedBy`<!-- -->.

```ts
BigNumber.config({ POW_PRECISION: 100 })

```

<b>Signature:</b>

```typescript
POW_PRECISION?: number;
```
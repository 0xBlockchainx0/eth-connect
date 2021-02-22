<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [eth-connect](./eth-connect.md) &gt; [BigNumber](./eth-connect.bignumber.md) &gt; [sum](./eth-connect.bignumber.sum.md)

## BigNumber.sum() method

Returns a BigNumber whose value is the sum of the arguments.

The return value is always exact and unrounded.

```ts
x = new BigNumber('3257869345.0378653')
BigNumber.sum(4e9, x, '123456789.9')      // '7381326134.9378653'

arr = [2, new BigNumber(14), '15.9999', 12]
BigNumber.sum.apply(null, arr)            // '43.9999'

```

<b>Signature:</b>

```typescript
static sum(...n: BigNumber.Value[]): BigNumber;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  n | [BigNumber.Value](./eth-connect.bignumber.value.md)<!-- -->\[\] | A numeric value. |

<b>Returns:</b>

[BigNumber](./eth-connect.bignumber.md)

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [eth-connect](./eth-connect.md) &gt; [BigNumber](./eth-connect.bignumber.md) &gt; [comparedTo](./eth-connect.bignumber.comparedto.md)

## BigNumber.comparedTo() method

Returns \| \| :\-\-\-\-\-\--:\|:\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\---\| 1 \| If the value of this BigNumber is greater than the value of `n` -1 \| If the value of this BigNumber is less than the value of `n` 0 \| If this BigNumber and `n` have the same value `null` \| If the value of either this BigNumber or `n` is `NaN`

```ts

x = new BigNumber(Infinity)
y = new BigNumber(5)
x.comparedTo(y)                 // 1
x.comparedTo(x.minus(1))        // 0
y.comparedTo(NaN)               // null
y.comparedTo('110', 2)          // -1

```

<b>Signature:</b>

```typescript
comparedTo(n: BigNumber.Value, base?: number): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  n | [BigNumber.Value](./eth-connect.bignumber.value.md) | A numeric value. |
|  base | number | The base of n. |

<b>Returns:</b>

number

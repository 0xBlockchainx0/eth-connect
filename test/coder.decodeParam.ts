import * as chai from 'chai'
const assert = chai.assert
import * as coder from '../src/solidity/coder'
import BigNumber from 'bignumber.js'
let bn = BigNumber

describe('lib/solidity/coder', function() {
  describe('decodeParam', function() {
    let test = function(t) {
      it('should turn ' + t.value + ' to ' + t.expected, function() {
        assert.deepEqual(coder.coder.decodeParam(t.type, t.value), t.expected)
      })
    }

    test({
      type: 'address',
      expected: '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
      value: '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1'
    })
    test({
      type: 'address[2]',
      expected: ['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x407d73d8a49eeb85d32cf465507dd71d507100c3'],
      value:
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c3'
    })
    test({
      type: 'address[]',
      expected: ['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x407d73d8a49eeb85d32cf465507dd71d507100c3'],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c3'
    })
    test({
      type: 'address[][2]',
      expected: [
        ['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x407d73d8a49eeb85d32cf465507dd71d507100c2'],
        ['0x407d73d8a49eeb85d32cf465507dd71d507100c3', '0x407d73d8a49eeb85d32cf465507dd71d507100c4']
      ],
      value:
        '0000000000000000000000000000000000000000000000000000000000000040' +
        '00000000000000000000000000000000000000000000000000000000000000a0' +
        '0000000000000000000000000000000000000000000000000000000000000002' /* 40 */ +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1' /* 60 */ +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c2' +
        '0000000000000000000000000000000000000000000000000000000000000002' /* a0 */ +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c3' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c4'
    })
    test({
      type: 'address[2][]',
      expected: [
        ['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x407d73d8a49eeb85d32cf465507dd71d507100c2'],
        ['0x407d73d8a49eeb85d32cf465507dd71d507100c3', '0x407d73d8a49eeb85d32cf465507dd71d507100c4']
      ],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000002' /* 20 */ +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c2' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c3' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c4'
    })
    test({
      type: 'address[][]',
      expected: [
        ['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x407d73d8a49eeb85d32cf465507dd71d507100c2'],
        ['0x407d73d8a49eeb85d32cf465507dd71d507100c3', '0x407d73d8a49eeb85d32cf465507dd71d507100c4']
      ],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000002' /* 20 */ +
        '0000000000000000000000000000000000000000000000000000000000000080' +
        '00000000000000000000000000000000000000000000000000000000000000e0' +
        '0000000000000000000000000000000000000000000000000000000000000002' /* 80 */ +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1' /* a0 */ +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c2' +
        '0000000000000000000000000000000000000000000000000000000000000002' /* e0 */ +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c3' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c4'
    })
    test({ type: 'bool', expected: true, value: '0000000000000000000000000000000000000000000000000000000000000001' })
    test({ type: 'bool', expected: false, value: '0000000000000000000000000000000000000000000000000000000000000000' })
    test({
      type: 'bool[2]',
      expected: [true, false],
      value:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'bool[]',
      expected: [true, true, false],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000000'
    })

    test({
      type: 'int',
      expected: new bn(1),
      value: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      type: 'int',
      expected: new bn(1),
      value: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      type: 'int',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'int',
      expected: new bn(-1),
      value: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    })
    test({
      type: 'int256',
      expected: new bn(1),
      value: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      type: 'int256',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'int256',
      expected: new bn(-1),
      value: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    })
    test({
      type: 'int8',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'int8[2]',
      expected: [new bn(16), new bn(2)],
      value:
        '0000000000000000000000000000000000000000000000000000000000000010' +
        '0000000000000000000000000000000000000000000000000000000000000002'
    })
    test({
      type: 'int32',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'int64',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'int128',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'int[]',
      expected: [],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'int[]',
      expected: [new bn(3)],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000003'
    })
    test({
      type: 'int256[]',
      expected: [new bn(3)],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000003'
    })
    test({
      type: 'int[]',
      expected: [new bn(1), new bn(2), new bn(3)],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000003'
    })
    test({
      type: 'int[3][]',
      expected: [[new bn(1), new bn(2), new bn(3)], [new bn(4), new bn(5), new bn(6)]],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000004' +
        '0000000000000000000000000000000000000000000000000000000000000005' +
        '0000000000000000000000000000000000000000000000000000000000000006'
    })

    test({
      type: 'uint',
      expected: new bn(1),
      value: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      type: 'uint',
      expected: new bn(1),
      value: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      type: 'uint',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'uint',
      expected: new bn('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
      value: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    })
    test({
      type: 'uint256',
      expected: new bn(1),
      value: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      type: 'uint256',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'uint8',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'uint32',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'uint64',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'uint128',
      expected: new bn(16),
      value: '0000000000000000000000000000000000000000000000000000000000000010'
    })
    test({
      type: 'uint[]',
      expected: [],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'uint[]',
      expected: [new bn(3)],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000003'
    })
    test({
      type: 'uint256[]',
      expected: [new bn(3)],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000003'
    })
    test({
      type: 'uint[]',
      expected: [new bn(1), new bn(2), new bn(3)],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000003'
    })
    test({
      type: 'uint[3][]',
      expected: [[new bn(1), new bn(2), new bn(3)], [new bn(4), new bn(5), new bn(6)]],
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000004' +
        '0000000000000000000000000000000000000000000000000000000000000005' +
        '0000000000000000000000000000000000000000000000000000000000000006'
    })
    test({
      type: 'bytes',
      expected: '0x6761766f66796f726b',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000009' +
        '6761766f66796f726b0000000000000000000000000000000000000000000000'
    })
    test({
      type: 'bytes',
      expected: '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b'
    })
    test({
      type: 'bytes',
      expected:
        '0x131a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '231a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '331a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000060' +
        '131a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '231a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '331a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b'
    })
    test({
      type: 'bytes',
      expected:
        '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000040' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b'
    })
    test({
      type: 'bytes[2]',
      expected: [
        '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134a',
        '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b'
      ],
      value:
        '0000000000000000000000000000000000000000000000000000000000000040' +
        '0000000000000000000000000000000000000000000000000000000000000080' +
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134a' +
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b'
    })
    test({
      type: 'bytes[][2]',
      expected: [
        ['0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134a'],
        [
          '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
            '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134c',
          '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134d'
        ]
      ],
      value:
        '0000000000000000000000000000000000000000000000000000000000000040' +
        '0000000000000000000000000000000000000000000000000000000000000080' +
        '0000000000000000000000000000000000000000000000000000000000000001' + // 40
        '00000000000000000000000000000000000000000000000000000000000000e0' +
        '0000000000000000000000000000000000000000000000000000000000000002' + // 80
        '0000000000000000000000000000000000000000000000000000000000000120' +
        '0000000000000000000000000000000000000000000000000000000000000180' +
        '0000000000000000000000000000000000000000000000000000000000000020' + // e0
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134a' +
        '0000000000000000000000000000000000000000000000000000000000000040' + // 120
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134c' +
        '0000000000000000000000000000000000000000000000000000000000000020' + // 180
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134d'
    })

    test({
      type: 'bytes1',
      expected: '0xcf',
      value: 'cf00000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'bytes1[4]',
      expected: ['0xcf', '0x68', '0x4d', '0xfb'],
      value:
        'cf00000000000000000000000000000000000000000000000000000000000000' +
        '6800000000000000000000000000000000000000000000000000000000000000' +
        '4d00000000000000000000000000000000000000000000000000000000000000' +
        'fb00000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'bytes32',
      expected: '0x6761766f66796f726b0000000000000000000000000000000000000000000000',
      value: '6761766f66796f726b0000000000000000000000000000000000000000000000'
    })

    test({
      type: 'string',
      expected: 'gavofyork',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000009' +
        '6761766f66796f726b0000000000000000000000000000000000000000000000'
    })
    test({
      type: 'string',
      expected: 'Ã¤Ã¤',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000008' +
        'c383c2a4c383c2a4000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'string',
      expected: 'ü',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        'c3bc000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'string',
      expected: 'Ã',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        'c383000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'bytes',
      expected: '0xc3a40000c3a4',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '0000000000000000000000000000000000000000000000000000000000000006' +
        'c3a40000c3a40000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'bytes32',
      expected: '0xc3a40000c3a40000000000000000000000000000000000000000000000000000',
      value: 'c3a40000c3a40000000000000000000000000000000000000000000000000000'
    })
    test({
      type: 'real',
      expected: new bn(1),
      value: '0000000000000000000000000000000100000000000000000000000000000000'
    })
    test({
      type: 'real',
      expected: new bn(2.125),
      value: '0000000000000000000000000000000220000000000000000000000000000000'
    })
    test({
      type: 'real',
      expected: new bn(8.5),
      value: '0000000000000000000000000000000880000000000000000000000000000000'
    })
    test({
      type: 'real',
      expected: new bn(-1),
      value: 'ffffffffffffffffffffffffffffffff00000000000000000000000000000000'
    })
    test({
      type: 'ureal',
      expected: new bn(1),
      value: '0000000000000000000000000000000100000000000000000000000000000000'
    })
    test({
      type: 'ureal',
      expected: new bn(2.125),
      value: '0000000000000000000000000000000220000000000000000000000000000000'
    })
    test({
      type: 'ureal',
      expected: new bn(8.5),
      value: '0000000000000000000000000000000880000000000000000000000000000000'
    })
    test({
      type: 'address',
      expected: '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
      value: '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1'
    })
    test({
      type: 'string',
      expected: 'welcome to ethereum. welcome to ethereum. welcome to ethereum.',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '000000000000000000000000000000000000000000000000000000000000003e' +
        '77656c636f6d6520746f20657468657265756d2e2077656c636f6d6520746f20' +
        '657468657265756d2e2077656c636f6d6520746f20657468657265756d2e0000'
    })
    test({
      type: 'bytes',
      expected:
        '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1',
      value:
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '000000000000000000000000000000000000000000000000000000000000009f' +
        'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' +
        'fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff100'
    })
  })
})

describe('lib/solidity/coder', function() {
  describe('decodeParams', function() {
    let test = function(t) {
      it('should turn ' + t.values + ' to ' + t.expected, function() {
        assert.deepEqual(coder.coder.decodeParams(t.types, t.values), t.expected)
      })
    }

    test({
      types: ['address'],
      expected: ['0x407d73d8a49eeb85d32cf465507dd71d507100c1'],
      values: '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1'
    })
    test({
      types: ['address', 'address'],
      expected: ['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x407d73d8a49eeb85d32cf465507dd71d507100c3'],
      values:
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c3'
    })
    test({
      types: ['bool[2]', 'bool[3]'],
      expected: [[true, false], [false, false, true]],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['int[2]', 'int256[3]'],
      expected: [[new bn(1), new bn(2)], [new bn(3), new bn(4), new bn(5)]],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000004' +
        '0000000000000000000000000000000000000000000000000000000000000005'
    })
    test({
      types: ['int'],
      expected: [new bn(1)],
      values: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['uint[2]', 'uint256[3]'],
      expected: [[new bn(1), new bn(2)], [new bn(3), new bn(4), new bn(5)]],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000004' +
        '0000000000000000000000000000000000000000000000000000000000000005'
    })
    test({
      types: ['uint'],
      expected: [new bn(1)],
      values: '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['bytes1', 'bytes1'],
      expected: ['0xaa', '0xbb'],
      values:
        'aa00000000000000000000000000000000000000000000000000000000000000' +
        'bb00000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      types: ['bytes1[2]', 'bytes1'],
      expected: [['0xaa', '0xbb'], '0xcc'],
      values:
        'aa00000000000000000000000000000000000000000000000000000000000000' +
        'bb00000000000000000000000000000000000000000000000000000000000000' +
        'cc00000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      types: ['bytes', 'bytes'],
      expected: [
        '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b',
        '0x731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134c'
      ],
      values:
        '0000000000000000000000000000000000000000000000000000000000000040' +
        '0000000000000000000000000000000000000000000000000000000000000080' +
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '0000000000000000000000000000000000000000000000000000000000000020' +
        '731a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134c'
    })
    test({
      types: ['int', 'string', 'int'],
      expected: [new bn(1), 'gavofyork', new bn(5)],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000060' +
        '0000000000000000000000000000000000000000000000000000000000000005' +
        '0000000000000000000000000000000000000000000000000000000000000009' +
        '6761766f66796f726b0000000000000000000000000000000000000000000000'
    })
    test({
      types: ['bytes32', 'int'],
      expected: ['0x6761766f66796f726b0000000000000000000000000000000000000000000000', new bn(5)],
      values:
        '6761766f66796f726b0000000000000000000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000005'
    })
    test({
      types: ['int', 'bytes32'],
      expected: [new bn(5), '0x6761766f66796f726b0000000000000000000000000000000000000000000000'],
      values:
        '0000000000000000000000000000000000000000000000000000000000000005' +
        '6761766f66796f726b0000000000000000000000000000000000000000000000'
    })
    test({
      types: ['int', 'string', 'int', 'int', 'int', 'int[]'],
      expected: [new bn(1), 'gavofyork', new bn(2), new bn(3), new bn(4), [new bn(5), new bn(6), new bn(7)]],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '00000000000000000000000000000000000000000000000000000000000000c0' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000004' +
        '0000000000000000000000000000000000000000000000000000000000000100' +
        '0000000000000000000000000000000000000000000000000000000000000009' +
        '6761766f66796f726b0000000000000000000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '0000000000000000000000000000000000000000000000000000000000000005' +
        '0000000000000000000000000000000000000000000000000000000000000006' +
        '0000000000000000000000000000000000000000000000000000000000000007'
    })
    test({
      types: ['int', 'bytes', 'int', 'bytes'],
      expected: [
        new bn(5),
        '0x131a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
          '231a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b',
        new bn(3),
        '0x331a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
          '431a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b'
      ],
      values:
        '0000000000000000000000000000000000000000000000000000000000000005' +
        '0000000000000000000000000000000000000000000000000000000000000080' +
        '0000000000000000000000000000000000000000000000000000000000000003' +
        '00000000000000000000000000000000000000000000000000000000000000e0' +
        '0000000000000000000000000000000000000000000000000000000000000040' +
        '131a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '231a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '0000000000000000000000000000000000000000000000000000000000000040' +
        '331a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b' +
        '431a3afc00d1b1e3461b955e53fc866dcf303b3eb9f4c16f89e388930f48134b'
    })
    test({
      types: ['address[2][1]', 'bool'],
      expected: [[['0x407d73d8a49eeb85d32cf465507dd71d507100c1', '0x407d73d8a49eeb85d32cf465507dd71d507100c3']], false],
      values:
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c1' +
        '000000000000000000000000407d73d8a49eeb85d32cf465507dd71d507100c3' +
        '0000000000000000000000000000000000000000000000000000000000000000'
    })
    test({
      types: ['bool[2][1]', 'bool'],
      expected: [[[true, false]], true],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['bytes1[2][1]', 'bool'],
      expected: [[['0xaa', '0xbb']], true],
      values:
        'aa00000000000000000000000000000000000000000000000000000000000000' +
        'bb00000000000000000000000000000000000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['int[2][1]', 'bool'],
      expected: [[[new bn(1), new bn(2)]], true],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['real[2][1]', 'bool'],
      expected: [[[new bn(1), new bn(2.125)]], true],
      values:
        '0000000000000000000000000000000100000000000000000000000000000000' +
        '0000000000000000000000000000000220000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['uint[2][1]', 'bool'],
      expected: [[[new bn(1), new bn(2)]], true],
      values:
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000002' +
        '0000000000000000000000000000000000000000000000000000000000000001'
    })
    test({
      types: ['ureal[2][1]', 'bool'],
      expected: [[[new bn(1), new bn(2.125)]], true],
      values:
        '0000000000000000000000000000000100000000000000000000000000000000' +
        '0000000000000000000000000000000220000000000000000000000000000000' +
        '0000000000000000000000000000000000000000000000000000000000000001'
    })
  })
})

import * as chai from 'chai'
const assert = chai.assert
import BigNumber from 'bignumber.js'
import { SolidityEvent } from '../src/SolidityEvent'

let name = 'event1'
let address = '0x1234567890123456789012345678901234567890'

let tests = [
  {
    abi: {
      name: name,
      inputs: []
    },
    data: {
      logIndex: '0x1',
      transactionIndex: '0x10',
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: '0x1'
    },
    expected: {
      event: name,
      args: {},
      logIndex: 1,
      transactionIndex: 16,
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: 1
    }
  },
  {
    abi: {
      name: name,
      inputs: [
        {
          name: 'a',
          type: 'int',
          indexed: false
        }
      ]
    },
    data: {
      logIndex: '0x1',
      transactionIndex: '0x10',
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: '0x1',
      data: '0x0000000000000000000000000000000000000000000000000000000000000001'
    },
    expected: {
      event: name,
      args: {
        a: new BigNumber(1)
      },
      logIndex: 1,
      transactionIndex: 16,
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: 1
    }
  },
  {
    abi: {
      name: name,
      inputs: [
        {
          name: 'a',
          type: 'int',
          indexed: false
        },
        {
          name: 'b',
          type: 'int',
          indexed: true
        },
        {
          name: 'c',
          type: 'int',
          indexed: false
        },
        {
          name: 'd',
          type: 'int',
          indexed: true
        }
      ]
    },
    data: {
      logIndex: '0x1',
      transactionIndex: '0x10',
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: '0x1',
      data:
        '0x' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000004',
      topics: [
        address,
        '0x000000000000000000000000000000000000000000000000000000000000000a',
        '0x0000000000000000000000000000000000000000000000000000000000000010'
      ]
    },
    expected: {
      event: name,
      args: {
        a: new BigNumber(1),
        b: new BigNumber(10),
        c: new BigNumber(4),
        d: new BigNumber(16)
      },
      logIndex: 1,
      transactionIndex: 16,
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: 1
    }
  },
  {
    abi: {
      name: name,
      anonymous: true,
      inputs: [
        {
          name: 'a',
          type: 'int',
          indexed: false
        },
        {
          name: 'b',
          type: 'int',
          indexed: true
        },
        {
          name: 'c',
          type: 'int',
          indexed: false
        },
        {
          name: 'd',
          type: 'int',
          indexed: true
        }
      ]
    },
    data: {
      logIndex: '0x1',
      transactionIndex: '0x10',
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: '0x1',
      data:
        '0x' +
        '0000000000000000000000000000000000000000000000000000000000000001' +
        '0000000000000000000000000000000000000000000000000000000000000004',
      topics: [
        '0x000000000000000000000000000000000000000000000000000000000000000a',
        '0x0000000000000000000000000000000000000000000000000000000000000010'
      ]
    },
    expected: {
      event: name,
      args: {
        a: new BigNumber(1),
        b: new BigNumber(10),
        c: new BigNumber(4),
        d: new BigNumber(16)
      },
      logIndex: 1,
      transactionIndex: 16,
      transactionHash: '0x1234567890',
      address: address,
      blockHash: '0x1234567890',
      blockNumber: 1
    }
  }
]

describe('lib/web3/event', function() {
  describe('decode', function() {
    tests.forEach(function(test, index) {
      it('test no: ' + index, function() {
        let event = new SolidityEvent(null, test.abi as any, address)

        let result = event.decode(test.data as any)
        assert.deepEqual(result, test.expected as any)
      })
    })
  })
})

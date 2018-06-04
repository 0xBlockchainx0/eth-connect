import chai = require('chai')
const assert = chai.assert
import * as formatters from '../src/utils/formatters'
import BigNumber from 'bignumber.js'
import { BlockObject } from '../src/Schema'

describe('formatters', function () {
  describe('outputBlockFormatter', function () {
    it('should return the correct value', function () {
      assert.deepEqual(
        formatters.outputBlockFormatter({
          uncles: [],
          transactions: [],
          receiptsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          transactionsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          hash: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          parentHash: '0x83ffb245cfced97ccc5c75253d6960376d6c6dea93647397a543a72fdaea5265',
          miner: '0xdcc6960376d6c6dea93647383ffb245cfced97cf',
          stateRoot: '0x54dda68af07643f68739a6e9612ad157a26ae7e2ce81f77842bb5835fbcde583',
          sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
          logsBloom: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          difficulty: '0x3e8',
          totalDifficulty: '0x3e8',
          number: '0x3e8',
          gasLimit: '0x3e8',
          gasUsed: '0x3e8',
          timestamp: '0x3e8',
          extraData: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          nonce: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          size: '0x3e8'
        }),
        {
          uncles: [],
          transactions: [],
          receiptsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          transactionsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          hash: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          parentHash: '0x83ffb245cfced97ccc5c75253d6960376d6c6dea93647397a543a72fdaea5265',
          miner: '0xdcc6960376d6c6dea93647383ffb245cfced97cf',
          stateRoot: '0x54dda68af07643f68739a6e9612ad157a26ae7e2ce81f77842bb5835fbcde583',
          sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
          logsBloom: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          difficulty: new BigNumber(1000),
          totalDifficulty: new BigNumber(1000),
          number: 1000,
          gasLimit: 1000,
          gasUsed: 1000,
          timestamp: 1000,
          extraData: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          nonce: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          size: 1000
        }
      )
    })
    it('should return the correct value, when null values are present', function () {
      assert.deepEqual(
        formatters.outputBlockFormatter({
          uncles: [],
          transactions: [],
          receiptsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          transactionsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea52',
          hash: null,
          parentHash: '0x83ffb245cfced97ccc5c75253d6960376d6c6dea93647397a543a72fdaea5265',
          miner: null,
          stateRoot: '0x54dda68af07643f68739a6e9612ad157a26ae7e2ce81f77842bb5835fbcde583',
          sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
          logsBloom: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          difficulty: '0x3e8',
          totalDifficulty: '0x3e8',
          number: null,
          gasLimit: '0x3e8',
          gasUsed: '0x3e8',
          timestamp: '0x3e8',
          extraData: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          nonce: null,
          size: '0x3e8'
        }),
        {
          uncles: [],
          transactions: [],
          receiptsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          transactionsRoot: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea52',
          hash: null,
          parentHash: '0x83ffb245cfced97ccc5c75253d6960376d6c6dea93647397a543a72fdaea5265',
          miner: null,
          stateRoot: '0x54dda68af07643f68739a6e9612ad157a26ae7e2ce81f77842bb5835fbcde583',
          sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
          logsBloom: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          difficulty: new BigNumber(1000),
          totalDifficulty: new BigNumber(1000),
          number: null,
          gasLimit: 1000,
          gasUsed: 1000,
          timestamp: 1000,
          extraData: '0xd6960376d6c6dea93647383ffb245cfced97ccc5c7525397a543a72fdaea5265',
          nonce: null,
          size: 1000
        } as BlockObject
      )
    })
  })
})

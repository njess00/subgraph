const fs = require('fs');
const path = require('path');

const Contracts = require('./contracts');
const { createStartBlock } = require('../common');
const contracts = require('./contracts');

module.exports = {
  createYaml: (env, universalTestBlock, subgraph) => {
    const commonRatesABI = 'ExchangeRates';
    const commonRatesEntities = ['RatesUpdated'];
    const useExchangerBlocks = subgraph === 'exchanger';

    const createRatesBlock = ({ name, startBlocks, address, bytes, abiPath = null }) => ({
      name,
      mappingFile: '../src/rates-mapping.ts',
      startBlock: createStartBlock(startBlocks, env, universalTestBlock, useExchangerBlocks),
      address,
      abi: commonRatesABI,
      entities: commonRatesEntities,
      abis: [
        {
          name: 'ExchangeRates',
          path: abiPath != null ? abiPath : `../abis/ExchangeRates_bytes${bytes}.json`,
        },
      ],
      events: [
        {
          event: `RatesUpdated(bytes${bytes}[],uint256[])`,
          handler: 'handleRatesUpdated',
        },
      ],
    });

    const createRates4Block = ({ name, startBlocks, address, abiPath }) =>
      createRatesBlock({ name, startBlocks, address, abiPath, bytes: 4 });

    const createRates32Block = ({ name, startBlocks, address, abiPath }) =>
      createRatesBlock({ name, startBlocks, address, abiPath, bytes: 32 });

    const createAggregatorBlock = ({ name, startBlocks, address }) => ({
      name,
      mappingFile: '../src/rates-mapping.ts',
      startBlock: createStartBlock(startBlocks, env, universalTestBlock, useExchangerBlocks),
      address,
      abi: 'Aggregator',
      entities: ['AggregatorAnswer'],
      abis: [
        {
          name: 'Aggregator',
          path: '../abis/Aggregator.json',
        },
        {
          name: 'ExchangeRates',
          path: '../abis/ExchangeRates.json',
        },
        {
          name: 'AddressResolver',
          path: '../abis/AddressResolver.json',
        },
      ],
      events: [
        {
          event: 'AnswerUpdated(indexed int256,uint256)',
          handler: 'handleAggregatorAnswerUpdated',
        },
      ],
    });
    const newLine = '\n';
    const readOnlyComment = `// this is a read only file generated by manual inputs to file mustache/templates/rates/contracts.js.${newLine}`;
    const space = '\xa0';
    const doubleSpace = space + space;
    let contractsToProxiesContent = `${readOnlyComment}export let contractsToProxies = new Map<string, string>();${newLine}`;
    Contracts.forEach(({ address, proxyAddress, name }) => {
      if (proxyAddress != null) {
        contractsToProxiesContent += `contractsToProxies.set(${newLine}${doubleSpace}${address.toLowerCase()},${space}//${space}${name}${newLine}${doubleSpace}${proxyAddress}${newLine});${newLine}`;
      }
    });
    contractsToProxiesContent += readOnlyComment;
    const targetFile = path.join(__dirname, '../../../src/', 'contractsToProxies.ts');
    fs.writeFileSync(targetFile, contractsToProxiesContent, 'utf8');
    return Contracts.map(({ type, prod, test, name, address, exchanger, abiPath }) => {
      const startBlocks = { prod, test, exchanger };
      if (type === 'bytes4') {
        return createRates4Block(
          abiPath != null ? { name, startBlocks, address, abiPath } : { name, startBlocks, address },
        );
      } else if (type === 'bytes32') {
        return createRates32Block(
          abiPath != null ? { name, startBlocks, address, abiPath } : { name, startBlocks, address },
        );
      } else if (type === 'aggregator') {
        return createAggregatorBlock({ name, startBlocks, address });
      } else {
        throw new Error('invalid type in rates');
      }
    });
  },
};

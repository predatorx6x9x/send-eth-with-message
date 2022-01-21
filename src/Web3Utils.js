import { InjectedConnector } from '@web3-react/injected-connector';
// import { NetworkConnector } from '@web3-react/network-connector';
import Web3 from 'web3';

const chains = {
    ropsten: 3,
    fantom: 250,
    bscTestnet: 97,
    bsc: 56
}

const rpcUrls = {
    3: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    56: 'https://bsc-dataseed.binance.org/',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    250: 'https://rpcapi.fantom.network/'
}

const injected = new InjectedConnector(/*{ supportedChainIds: [chains.fantom, chains.bscTestnet, chains.fantom.bsc, chains.ropsten] }*/);
// const network = new NetworkConnector({ urls: rpcUrls, defaultChainId: chains.ropsten });

const connectors = { injected };

export default {
    "connectors": connectors,
    "Web3": Web3
};
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rate sad protect hover another army gasp'; 
let testAccounts = [
"0x5cdc020f62bd07e44c597d41289d4c9b4c3874ea1a48f186901b4b3da10aff6b",
"0xa5a0a1f21742077afeb2fb43cf2705183345e735368ea7b95871f97862eb6434",
"0x66708a676ca02e0b524afde45be8ee43f1e6cfa1a01b1d853e4b29e1ecd187ec",
"0x68a4bead942cebcb66e00b041ae5405996bda4d4d37a70f17cd8e3698090ef9e",
"0xfdc8853c06081a144c29b292014d4004c653cff5c36b2ea5c5283568b4bbeba6",
"0xcbadde86c1d08a02029ead25a7583ebe51dcc835e5ff5fea98f69e0d066742b9",
"0x32ac3940979ff9bd6fd69198f9f06edbaa7240a26ac4a1c1e6983975abc8f516",
"0x66061de863d1f839cd4e80bf04d31469f228b62fb26b5ac9d4c64d1fb54dc4e2",
"0x240b12b4871e2a1891819534be665121735d000174f16cd80be86536322999cd",
"0x6d28924ccbea1b4027a8b9fcab6a8a52fa2461ad51b9a0bbfae39f3a7992af1f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


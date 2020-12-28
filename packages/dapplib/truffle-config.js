require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index reward stereo public gesture cash equal giggle'; 
let testAccounts = [
"0x8bcb74255eeb8411ae15ee93f4d7a059035c6434eff31672e0f6faff2a4d2551",
"0x2be0c1192bccd027ed143960c1e68382c505f011974ff9c81243dac177da0703",
"0xb701c961f78017e4ec818aba7b1bd3a5caa6c58f1930ab35461228a9155ca791",
"0x7795bfaa90763053ac1e0019376ba536e7dccf5b5645df72e7fcc9bd239ae12a",
"0x441ad159965cf91b720704a72045a5ee3323c617594d425806df98c8c2820b49",
"0xf488d2850e4330a68004527ee2bfa0eb3b2342e2604e24af455ea8d9634ff2f7",
"0xa38e22d7ca964f4e924b7baf7c0c2e0ba56ca0a8745016088084d31fcba65869",
"0xfca66207990e39dfb49d41a06069f07b57d2435627e54c32426b450dca665eaf",
"0xe34dfd6fceac343cf249c1f9423b1e475af9f96c41952e67686b0540189a73d9",
"0x8133488e46693931182a273efac146bb0da1c0a356a5d06c5285ae27180b3e7c"
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
            version: '^0.5.11'
        }
    }
};

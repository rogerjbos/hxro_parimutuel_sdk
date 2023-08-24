import * as web3 from "@solana/web3.js";
import * as sdk from "@hxronetwork/parimutuelsdk";

const config = sdk.MAINNET_CONFIG
const rpc = web3.clusterApiUrl('mainnet-beta')
const connection = new web3.Connection(rpc, 'confirmed')

const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection)

import * as web3 from "@solana/web3.js";
import * as sdk from "@hxronetwork/parimutuelsdk";

const config = sdk.MAINNET_CONFIG
const rpc = web3.clusterApiUrl('mainnet-beta')
const connection = new web3.Connection(rpc, 'confirmed')

const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection)

// retrieve all of the Contests for the BTCUSD market pair.
const market = sdk.MarketPairEnum.BTCUSD
const markets = sdk.getMarketPubkeys(config, market);

// filter for the expiry interval, use the .filter() method on the markets array, and pass in a callback function that checks if the duration property of each element is equal to the desired expiry time in seconds.
const marketTerm = 60 // The expires are in seconds, so this would be the 1 min

const marketsByTime = markets.filter( (market) => market.duration === marketTerm );

const Paris = async () => {

    const parimutuels = await parimutuelWeb3.getParimutuels(marketsByTime, 5);
    
    console.log(JSON.stringify(parimutuels[0]))
};
    
Paris()


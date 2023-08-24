"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3 = __importStar(require("@solana/web3.js"));
const sdk = __importStar(require("@hxronetwork/parimutuelsdk"));
const config = sdk.MAINNET_CONFIG;
const rpc = web3.clusterApiUrl('mainnet-beta');
const connection = new web3.Connection(rpc, 'confirmed');
const parimutuelWeb3 = new sdk.ParimutuelWeb3(config, connection);
// retrieve all of the Contests for the BTCUSD market pair.
const market = sdk.MarketPairEnum.BTCUSD;
const markets = sdk.getMarketPubkeys(config, market);
// filter for the expiry interval, use the .filter() method on the markets array, and pass in a callback function that checks if the duration property of each element is equal to the desired expiry time in seconds.
const marketTerm = 60; // The expires are in seconds, so this would be the 1 min
const marketsByTime = markets.filter((market) => market.duration === marketTerm);
console.log("marketsByTime");
console.log(marketsByTime);
const Paris = () => __awaiter(void 0, void 0, void 0, function* () {
    const parimutuels = yield parimutuelWeb3.getParimutuels(marketsByTime, 5);
});

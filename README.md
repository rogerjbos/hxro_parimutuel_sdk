# hxro_parimutuel_sdk

Understanding Markets and Contests:

Before we start, there are some key terms you should be familiar with:

Markets are the different parimutuel markets for a specific underlying asset pair.
For example,on the Paris(short for Parimutuels) protocol, there are currently three main markets that can be accessed through MarketPairEnum:
MarketPairEnum.BTCUSD
MarketPairEnum.ETHUSD
MarketPairEnum.SOLUSD
At the time of writing, liquidity is being solely allocated to the BTCUSD market pair.

Contests represent the individual trading events in a paris market. For example:
Contest #1:
-Market: BTCUSD
-Time 5 minutes
-Slot ID: 123
-Long Pool: $100.00
-Short Pool: $200.00
-etc.


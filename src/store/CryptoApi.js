import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeaders = {
  authorization:
    "acc7c7d68d1008ed872f37f1c770e64df83d83d0290c1ac378a0ea6486649467",
};
const baseURL = "https://min-api.cryptocompare.com/data";

const createRequest = (url) => {
  return {
    url,
    headers: apiHeaders,
  };
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllCoins: builder.query({
      query: () =>
        createRequest(
          `/pricemultifull?fsyms=AAVE,USDT,BTC,ETH,BCH,XRP,LTC,BNB,DOGE,ADA,TRX,DOT,LINK,ETC,DASH,ZEC,XMR,SOL,ATOM,LUNA,FIL,FTM,XTZ,XLM,NEAR,AAVE,SXP,QNT,KSM,WAVES,SNX,RUNE,AR,UNI,UMA,PPT,OSMO,KAVA,APE,BIFI,ANC,IFT,MIR,POSI,SGB,HNT,BRG,SHIB,SIS,THOR,DUST,DAR,MOB,DPET,ALI,RAIL,WAXL,BABYDOGE,CHZ,KAS,FTX,DYDX,LUNC,ELON,ORB,CTXC,OOE,HMT,PIT,NUM,MAGIC,BREED,XYZ,BEND,NSBT,PLY,SLND,STRP,SCREAM,RENA,XPLA,CERE,DFL,OPUL,POKT,BEAM,DVF,ROOK,COW,AURORA,RBW,MATIC,TWT,AVAX,EOS,OP,ALGO,MASK,APT,SAND,AXS,GALA,BSV,OKB,GMT,ICP,SNM,YFII,MANA,VET,MFT,FLOW,CAKE,TONCOIN,HFT,EGLD,NEO,ENS,JASMY,SFP,REQ,YFI,RAD,VIDT,LOOM,FIDA,FET,SRM,ZEN,T,MINA,LOKA,BNX,CRO,LRC,MTL,RLC,HIVE,BIX,ANT,ARK,TFUEL,DKA,LIT,JST,INJ,WOM,STG,MLK,LEO,TLOS,CVX,MBOX,FSN,MCH,BTC&tsyms=USD`
        ),
    }),
  }),
});

export const { useGetAllCoinsQuery } = cryptoApi;

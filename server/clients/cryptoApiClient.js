// import axios from "axios";

// export const fetchCryptoData = async () => {

//   // const btc = await axios.get(
//   //   "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=GBP"
//   // );

//   const eth = await axios.get(
//     //"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP"
//     "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=GBP"
    
//   );

//   return {
//     //bitcoin: btc.data.GBP,
//     //ethereum: eth.data.GBP
//      bitcoin: res.data.BTC.GBP,
//      ethereum: res.data.ETH.GBP

//   };
// };

import axios from "axios";

export const fetchCryptoData = async () => {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=gbp";

  const response = await axios.get(url);
  return response.data;
};

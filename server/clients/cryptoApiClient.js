import axios from "axios";

export const fetchCryptoData = async () => {

  const btc = await axios.get(
    "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=GBP"
  );

  const eth = await axios.get(
    "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP"
  );

  return {
    bitcoin: btc.data.GBP,
    ethereum: eth.data.GBP
  };
};
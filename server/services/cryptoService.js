import { fetchCryptoData } from "../clients/cryptoApiClient.js";

export const getCrypto = async () => {
  const data = await fetchCryptoData();

  return {
    bitcoin: data.bitcoin.gbp,
    ethereum: data.ethereum.gbp,
  };
};

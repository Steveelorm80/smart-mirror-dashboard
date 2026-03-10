
 import { fetchCryptoData } from "../clients/cryptoApiClient.js";

export const getCrypto = async () => {
  try {

    const data = await fetchCryptoData();

    return {
      bitcoin: data.bitcoin,
      ethereum: data.ethereum
    };

  } catch (error) {

    console.error("Crypto API failed:", error.message);

    return {
      bitcoin: null,
      ethereum: null
    };
  }
};
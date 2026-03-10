// import { fetchCryptoData } from "../clients/cryptoApiClient.js";

// export const getCrypto = async () => {
//   const data = await fetchCryptoData();

//   return {
//     bitcoin: data.bitcoin.gbp,
//     ethereum: data.ethereum.gbp,
//   };
// };
export const getCrypto = async () => {
  try {
    const data = await fetchCryptoData();

    return {
      bitcoin: data.bitcoin.gbp,
      ethereum: data.ethereum.gbp,
    };
  } catch (error) {
    console.error("Crypto API failed:", error.message);

    return {
      bitcoin: null,
    ethereum: null
    };
  }
};

//  import { fetchCryptoData } from "../clients/cryptoApiClient.js";

// export const getCrypto = async () => {
//   try {

//     const data = await fetchCryptoData();
//     if (!data || !data.bitcoin || !data.ethereum) {
//     console.error("Crypto data missing:", data);
//    }

//     return {
//       bitcoin: data.bitcoin,
//       ethereum: data.ethereum
//     };

//   } catch (error) {

//     console.error("Crypto API failed:", error.message);

//     return {
//       bitcoin: null,
//       ethereum: null
//     };
//   }
// };


import { fetchCryptoData } from "../clients/cryptoApiClient.js";

export const getCrypto = async () => {
  const data = await fetchCryptoData();

  return {
    bitcoin: data.bitcoin.gbp,
    ethereum: data.ethereum.gbp,
  };
};

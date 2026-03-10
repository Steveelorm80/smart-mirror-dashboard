import { fetchCryptoData } from "../clients/cryptoApiClient.js";

// export const getCrypto = async () => {
//   const data = await fetchCryptoData();

//   return {
//     bitcoin: data.bitcoin.gbp,
//     ethereum: data.ethereum.gbp,
//   };
// };



// export const getCrypto = async () => {
//   try {
//     const data = await fetchCryptoData();

//     return {
//       bitcoin: data.bitcoin.gbp,
//       ethereum: data.ethereum.gbp,
//     };
//   } catch (error) {
//     console.error("Crypto API failed:", error.message);

//     return {
//       bitcoin: null,
//     ethereum: null
//     };
//   }
// };


// export const getCrypto = async () => {
//   try {
//     const data = await fetchCryptoData();

//     return {
//       bitcoin: data?.bitcoin?.gbp ?? null,
//       ethereum: data?.ethereum?.gbp ?? null
//     };
//   } catch (error) {
//     console.error("Crypto API failed:", error.message);

//     return {
//       bitcoin: null,
//       ethereum: null
//     };
//   }
// };



let cryptoCache = null;
let lastFetch = 0;

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getCrypto = async () => {
  const now = Date.now();

  if (cryptoCache && now - lastFetch < CACHE_DURATION) {
    console.log("Serving crypto from cache 💰");
    return cryptoCache;
  }

  try {
    const data = await fetchCryptoData();

    const crypto = {
      bitcoin: data?.bitcoin?.gbp ?? null,
      ethereum: data?.ethereum?.gbp ?? null
    };

    cryptoCache = crypto;
    lastFetch = now;

    console.log("Fetched crypto from API 🚀");

    return crypto;

  } catch (error) {
    console.error("Crypto API failed:", error.message);

    return cryptoCache || {
      bitcoin: null,
      ethereum: null
    };
  }
};




 
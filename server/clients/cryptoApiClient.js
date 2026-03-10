// import axios from "axios";

// export const fetchCryptoData = async () => {
//   const url =
//     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=gbp";

//   const response = await axios.get(url);
//   return response.data;
// };

import axios from "axios";

export const fetchCryptoData = async () => {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=gbp";

  const response = await axios.get(url, {
    headers: {
      "User-Agent": "smart-mirror-dashboard"
    }
  });

  return response.data;
};

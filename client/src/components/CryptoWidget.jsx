// const CryptoWidget = ({ crypto }) => {
//   console.log("CryptoWidget receives:", crypto);

//   if (!crypto) {
//     return (
//       <div className="widget bitcoin-widget">
//         <h3>Crypto Market</h3>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   const formatGBP = (value) => {
//     if (!value) return "£0";

//     return new Intl.NumberFormat("en-GB", {
//       style: "currency",
//       currency: "GBP",
//       maximumFractionDigits: 0
//     }).format(Number(value));
//   };

//   return (
//     <div className="widget bitcoin-widget">
//       <h3>Crypto Market</h3>

//       <div className="crypto-row">
//         <span>Bitcoin</span>
//         <strong>{formatGBP(crypto?.bitcoin)}</strong>
//       </div>

//       <div className="crypto-row">
//         <span>Ethereum</span>
//         <strong>{formatGBP(crypto?.ethereum)}</strong>
//       </div>

//     </div>
//   );
// };

// export default CryptoWidget;


const CryptoWidget = ({ crypto }) => {
  return (
    <div className="widget bitcoin-widget">
      <h3>Crypto Market</h3>

      <div className="crypto-row">
        <span>Bitcoin</span>
        <strong>£{crypto.bitcoin}</strong>
      </div>

      <div className="crypto-row">
        <span>Ethereum</span>
        <strong>£{crypto.ethereum}</strong>
      </div>
    </div>
  );
};

export default CryptoWidget;
const CryptoWidget = ({ crypto }) => {
  if (!crypto) {
    return null;
  }

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
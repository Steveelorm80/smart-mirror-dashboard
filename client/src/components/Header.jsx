import CitySearch from "./CitySearch";

const Header = ({ city, setCity }) => {
  return (
    <div className="header-bar">
      <h2 className="logo">Smart Mirror</h2>

      <div className="header-right">
        <CitySearch city={city} onCityChange={setCity} />
      </div>
    </div>
  );
};

export default Header;
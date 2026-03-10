// import { useState } from "react";
// import Select from "react-select";

// const CitySearch = ({ city, onCityChange }) => {
//   const [options, setOptions] = useState([]);

//   const loadCities = async (inputValue) => {
//     if (!inputValue || inputValue.length < 2) return;

//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${import.meta.env.VITE_WEATHER_KEY}`
//       );

//       const data = await res.json();

//       const cityOptions = data.map((city) => ({
//         value: city.name,
//         label: `${city.name}, ${city.country}`,
//       }));

//       setOptions(cityOptions);
//     } catch (err) {
//       console.error("City search error:", err);
//     }
//   };

//   return (
//     <Select
//   className="city-select"
//   classNamePrefix="city-select"
//   options={options}
//   value={options.find(option => option.value === city)}
//   onInputChange={(value) => {
//     loadCities(value);
//     return value;
//   }}
//   onChange={(selected) => {
//     console.log("Selected city:", selected.value);
//     onCityChange(selected.value);
//   }}
//   placeholder="Search city..."
//   isSearchable
// />
//   );
// };

// export default CitySearch;


import { useState } from "react";
import Select from "react-select";

const CitySearch = ({ city, onCityChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const loadCities = async (inputValue) => {
    if (!inputValue || inputValue.length < 2) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${import.meta.env.VITE_WEATHER_KEY}`
      );

      const data = await res.json();

      const cityOptions = data.map((city) => ({
        value: city.name,
        label: `${city.name}, ${city.country}`,
      }));

      setOptions(cityOptions);
    } catch (err) {
      console.error("City search error:", err);
    }
  };

  return (
    <Select
      className="city-select"
      classNamePrefix="city-select"
      options={options}
      value={selectedCity}
      onInputChange={(value) => {
        loadCities(value);
        return value;
      }}
      onChange={(selected) => {
        setSelectedCity(selected);
        onCityChange(selected.value);
      }}
      placeholder="Search city..."
      isSearchable
    />
  );
};

export default CitySearch;
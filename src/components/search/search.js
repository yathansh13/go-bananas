import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoDbOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  // Destructure props here
  const [search, setSearch] = useState(null);

  const handleOnChange = (value) => {
    setSearch(value);
    onSearchChange(value);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000  &namePrefix=${inputValue}`,
      geoDbOptions
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      })
      .catch((err) => {
        console.error(err);
        return {
          options: [],
        };
      });
  };

  return (
    <AsyncPaginate
      placeholder="Search for your city"
      value={search}
      debounceTimeout={600}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

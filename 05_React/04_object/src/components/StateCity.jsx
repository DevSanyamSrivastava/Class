import {React,  useEffect, useState } from "react";

const StateCity = () => {

  const stateData = [
    {
      state: "U.P",
      cities: ["Agra", "Jhasi", "Lucknow", "Sitapur", "Lakhimpur"],
    },
    {
      state: "Rajasthan",
      cities: ["Jaipur", "Bikaner", "Chittorgarh", "Khatu"],
    },
    {
      state: "Bihar",
      cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    },
    {
      state: "Punjab",
      cities: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Mohali"],
    },
  ];

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const selectedData = stateData.find(
      (item) => item.state === selectedState
    );
console.log("My data ",selectedData);
    if (selectedData) {
      setCities(selectedData.cities);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <div>
      <h2>State & City</h2>

      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select State</option>

        {stateData.map((item) => (
          <option key={item.state} value={item.state}>
            {item.state}
          </option>
        ))}
      </select>

      <h3>Cities</h3>

      <ul>
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateCity;
import React from 'react';
import { useWeather } from '../Context/WeatherContext';
import citiesData from '../CitiesData/cities.json';

function CityList() {
  const { setCity } = useWeather();

  const handleChange = ((selectCity) => {
    setCity(selectCity.target.value)
  })

  return (
    <div>
      <h1>Hava Durumu</h1>
      <div className='dropdown'>
        <select className='selectCity' onChange={handleChange}>
          {
            citiesData.map(city => 
              <option key={city.id}>{city.name}</option>  
            )
          }
        </select>
      </div>
    </div>
  )
}

export default CityList
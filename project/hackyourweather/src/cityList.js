import React from 'react';
import data from './city-weather.json';


 const CityList = () => {
 const newData = data.map((city) =>
  <div className="Card">
    <h1>{city.name}, {city.sys.country}</h1>
    <div>
      <h3>{city.weather[0].main}</h3>
      <h5>{city.weather[0].description}</h5>
    </div>
    <div>
      <label>min temp:</label>
      <label>{city.main.temp_min}</label>
    </div>
    <div>
      <label>max temp:</label>
      <label>{city.main.temp_max}</label>
    </div>
    <div>
      <label>location:</label>
      <label>{city.coord.lat},{city.coord.lon}</label>
    </div>
  </div>)
    return (
    <>{newData}</>
  )
}

export default CityList

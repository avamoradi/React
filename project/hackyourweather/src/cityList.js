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
      <span>min temp:</span>
      <span>{city.main.temp_min}</span>
    </div>
    <div>
      <span>max temp:</span>
      <label>{city.main.temp_max}</label>
    </div>
    <div>
      <span>location:</span>
      <span>{city.coord.lat},{city.coord.lon}</span>
    </div>
  </div>)
    return (
    <>{newData}</>
  )
}

export default CityList

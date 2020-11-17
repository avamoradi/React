import React from 'react';


 const CityList = ({city, error, loading}) => {
   const {name,sys, weather, main, coord} = city;
  return(
        
    <div className="Card">
      {loading && <p>is loading...</p>}
      {error ? <p>{error}</p> :  
       <div>     
        <h1>{name}, {sys.country}</h1>
        <div>
          <h3>{weather[0].main}</h3>
          <h5>{weather[0].description}</h5>
        </div>
        <div>
          <span>min temp:</span>
          <span>{main.temp_min}</span>
        </div>
        <div>
          <span>max temp:</span>
          <label>{main.temp_max}</label>
        </div>
        <div>
          <span>location:</span>
          <span>{coord.lat},{coord.lon}</span> 
          </div>
       </div>}
    </div>
  )
    
}

export default CityList

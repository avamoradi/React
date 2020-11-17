import React, {useState} from 'react';
import CityList from './cityList';
import Form from './Form';
require('dotenv').config()


 const Main = () => {
   const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();
   const [city, setCity] = useState();

   const fetchApi  = (e) => {
     setError(false);
     e.preventDefault();
     const location = e.target.elements.location.value 
      if (!location)  return  setError("Please Enter the name of city.")
      
      setLoading(true);
      return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`)
         .then(res => res.json())
         .then(data => setCity(data))
         .catch(error=> setError(error)) 
         .finally(setLoading(false));
   }
   return (
      <>
      <Form fetchApi={fetchApi} />
      { city && <CityList city={city} error={error} loading={loading}/>}
     </>
    )
}

export default Main;


  




import React, {useState} from 'react';
import CityList from './cityList';
import FormSearch from './FormSearch';
import Error from './Error';

require('dotenv').config()

 const Main = () => {
   const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();
   const [cityList, setCityList] = useState([]);

   const fetchApi = (inputValue)=> {
    setError(false);
    if (!inputValue)  return  setError("Please Enter the name of city.")
  
    setLoading(true);
      
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_key}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if( data.cod < 400 ){
          setCityList([...cityList, data])
      } else setError("There is An error")
        })
      .catch(error=> setError(error.message)) 
      .finally(setLoading(false));
   }

   const handleDelete = (id) => {
      console.log(id)
      const newCityList = cityList.filter((item) => item.id !== id);
      setCityList(newCityList)
   }
  
   return (
      <>
      <FormSearch fetchApi={fetchApi} />
      {error && <Error error = {error} />}
      {Object.keys(cityList).length > 0 && cityList.map((city, index) => (
      <CityList index={index} city={city} loading={loading} handleDelete={handleDelete}/> 
      ))}
      </>
  )
}

export default Main;


  




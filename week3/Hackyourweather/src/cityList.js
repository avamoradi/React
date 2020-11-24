import React from 'react';
import CardStyle from './Styles/CardStyle';
import styled from 'styled-components';

const DeleteButton = styled.button`
color : #493843;
font-weight:bold;
background-color:#DC8665;
border:none;
border-radius:50%;
padding:5px;
position : absolute;
top:0;
right:0;
`;

const Div = styled.div`
margin-top:10px;
font-size:1rem;

`;

const H1 = styled.h1`
  text-align: center;
  text-transform: capitalize;
  margin: 1rem 0;
  letter-spacing: 3px;
  font-size = 9rem;
`;



 const CityList = ({city, index, loading, handleDelete}) => {
   const {name,sys, weather, main, coord, id} = city;
   city.id += index;

     return(
     <CardStyle>
      {loading && <p>is loading...</p>}
       <div> 
       <DeleteButton onClick = {() => handleDelete(id)}>X</DeleteButton>
        <H1>{name}, {sys.country}</H1>
        </div>
        <Div>
          <h3>{weather[0].main}</h3>
          <h5>{weather[0].description}</h5>
        </Div>
        <Div>
          <span>min temp:</span>
          <span>{main.temp_min}</span>
        </Div>
        <Div>
          <span>max temp:</span>
          <label>{main.temp_max}</label>
        </Div>
        <Div>
          <span>location:</span>
          <span>{coord.lat},{coord.lon}</span> 
        </Div>
    </CardStyle>
    
  )
    
}

export default CityList

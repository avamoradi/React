import React from 'react';

function Guarantee(props) {
  return (
    <div>
        <img src={props.imgUrl}
        alt = {props.title}/>
        <div> {props.title} </div>
        <div>{props.description} </div>
    </div>
  );
}

export default Guarantee;
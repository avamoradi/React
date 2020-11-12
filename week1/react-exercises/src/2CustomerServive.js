import React from 'react';

function Guarantee(props) {
  const service = props.serviceArr.map((item) => 
    <div>
      <img src={item.imgUrl}
      alt = {item.title}/>
      <h> {item.title} </h>
      <p>{item.description} </p>
    </div>
  );
  return (
      <div className="flex">{service}</div>
    );
}

export default Guarantee;

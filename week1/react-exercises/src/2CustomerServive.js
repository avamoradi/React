import React from 'react';

function Guarantee(props) {
  const service = props.serviceArr.map((item) => 
    <div>
      <img src={item.imgUrl}
      alt = {item.title}/>
      <div> {item.title} </div>
      <div>{item.description} </div>
    </div>
  );
  return (
      <div className="flex">{service}</div>
    );
}

export default Guarantee;

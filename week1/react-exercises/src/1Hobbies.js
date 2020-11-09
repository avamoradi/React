import React from "react";

const HobbyList  = (props, i) => {
   const hobbies = props.hobbies;
   const listItems = hobbies.map((x) =>
   <li key={i}>
     {x}
   </li>
  );
  return (
  <ul>{listItems}</ul>
  );
}




export default HobbyList;
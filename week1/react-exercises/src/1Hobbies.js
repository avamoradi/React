import React from "react";
const shortid = require('shortid');

const HobbyList  = (props) => {
   const hobbies = props.hobbies;
   const id = shortid.generate();
   const listItems = hobbies.map((x) =>
   <li key={id}>
     {x}
   </li>
  );
  return (
  <ul>{listItems}</ul>
  );
}






export default HobbyList;

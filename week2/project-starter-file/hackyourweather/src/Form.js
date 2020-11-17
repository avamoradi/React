import React from 'react';

const Form = ({fetchApi}) => {
  return (
    <form className="forminput"  onSubmit={fetchApi}>
     <input placeholder = "Serach city" autoComplete="off" name="location" type="text"/>
     <div>
       <button>Search</button>
   </div>
   </form>
 
  )
}

export default Form;
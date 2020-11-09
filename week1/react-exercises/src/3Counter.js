import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? <p>"It's higher than 10!"</p> : <p>"Keep counting..."</p>
  return (
    <div>
    <p>You clicked {count} times</p>
    <p>{feedback}</p>
   <button onClick={() => setCount(count + 1)}>
      Add 1!
    </button>
   </div>
   
   );
}

 






export default Counter;
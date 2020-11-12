import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? <p>"It's higher than 10!"</p> : <p>"Keep counting..."</p>
  return (
    <div>
    You clicked {count} times
    {feedback}
   <button onClick={() => setCount(count + 1)}>
      Add 1!
    </button>
   </div>
   
   );
}

 






export default Counter;

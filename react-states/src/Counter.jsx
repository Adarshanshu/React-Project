import { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>tap the button to increase the count</p>
      <p>count: {count}</p>
      <button onClick={incCount}>increase count</button>
    </>
  );
}
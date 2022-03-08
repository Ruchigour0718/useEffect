import React, { useEffect, useState } from "react";

const Runonetime = () => {
  const [count, setCount] = useState(0);

  const handle = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log(`you have clicked the button {count}`);
    alert('This effect will run only one time')
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handle}>click me</button>
    </div>
  );
};

export default Runonetime;

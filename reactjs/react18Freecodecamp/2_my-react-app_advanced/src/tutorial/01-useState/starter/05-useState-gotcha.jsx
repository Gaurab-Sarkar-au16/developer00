import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount(count + 1)
    // setCount((currentCount) => {
    //   const newCount = currentCount + 1;
    //   return newCount;
    // });
    setTimeout(() => {
      console.log(count)
      setCount((currentCount) => {
        return currentCount + 1;
      });
    }, 1500);
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h1>{count}</h1>
      <button onClick={increaseCount} type="button" className="btn">
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;

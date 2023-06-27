import { useState } from "react";

const UseStateBasics = () => {
  let [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
    <h4>You clicked {count} times</h4>
    <button onClick={handleClick} type="button" className="btn">
      ClickMe
    </button>
    </>
  )
};

export default UseStateBasics;

import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  // console.log("render")
  const toggle = () => {
    setValue(!value);
  };

  return (
    <>
      <h2>cleanup function</h2>
      {value ? <SecComponent /> : <h3>False</h3>}
      <button type="button" className="btn" onClick={toggle}>
        Toggle
      </button>
    </>
  );
};

const SecComponent = () => {
  useEffect(() => {
    const someFunc = () =>{

    }
    window.addEventListener('scroll', someFunc)
 }, []);
  return <h1>Hello there</h1>;
};

export default CleanupFunction;

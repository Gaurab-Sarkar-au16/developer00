import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(true);

  const toggle = () => {
    setValue(!value);
  };

  return (
    <>
      <h2>toggle challenge</h2>
      {value ? <h2>The value is true</h2> : <h2>The value is false</h2>}
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {value && <Alert />}
    </>
  );
};

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>;
};

export default ToggleChallenge;

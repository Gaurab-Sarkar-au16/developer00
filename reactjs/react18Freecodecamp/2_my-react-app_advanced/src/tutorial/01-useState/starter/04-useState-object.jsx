import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age:24,
    hobby:'read books'
  })

  const change = () => {
    setPerson({
      name:'john',
      age:26,
      hobby:'football'
    })
    // changing only one parameter
    // setPerson({...person, name:'susan'})
  };

  return (
    <>    
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button type="button" className="btn" onClick={change}>
        Show Jhon
      </button>
    </>
  );
};

export default UseStateObject;

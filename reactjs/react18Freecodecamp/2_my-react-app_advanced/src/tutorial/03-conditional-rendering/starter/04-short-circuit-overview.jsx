import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("susan");

  return (
    <div>
      <h4>falsy OR : {text || "hello world"}</h4>
      <h4>falsy AND : {text && "hello world"}</h4>
      <h4>truthy OR : {name || "hello world"}</h4>
      <h4>truthy AND : {name && "hello world"}</h4>
    </div>
  );
};

export default ShortCircuitOverview;

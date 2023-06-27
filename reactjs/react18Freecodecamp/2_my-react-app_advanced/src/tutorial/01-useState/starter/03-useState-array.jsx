import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  let [people, setPeople] = React.useState(data);

  const removeSingleItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    // console.log(newPeople);
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeSingleItem(person.id)}>
              remove
            </button>
          </div>
        );
      })}
      <button onClick={clearAllItems} style={{ marginTop: "2rem" }} className="btn"
      >
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;

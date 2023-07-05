import {useState, useReducer} from "react";
import { data } from "../../../data";

const ReducerBasics = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearList = () => {
    // setPeople([])
  }
  const resetList = () => {
    // setPeople(data);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} className="btn">remove</button>
          </div>
        );
      })}
      {/* <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
      <br /> */}
      {people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" , background:'red'}}
          onClick={clearList}
        >
          remove all
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem", background:'green' }}
          onClick={resetList}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;

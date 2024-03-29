import { useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './action';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([])
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(data);
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem", background: "red" }}
          onClick={clearList}
        >
          remove all
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem", background: "green" }}
          onClick={resetList}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;

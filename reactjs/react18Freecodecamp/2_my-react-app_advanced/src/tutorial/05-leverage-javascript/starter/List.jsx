import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>From List</h1>
      {people.map((person) => {
        const { id, name} = person;
        return (
          <div key={id} style={{marginTop:"50px"}}>
            <h2>{id}.{name}</h2>
            <Person {...person}/>
          </div>
        );
      })}
    </div>
  );
};
export default List;

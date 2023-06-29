import { people } from "../../../data";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        const {id,name} = person
        return <div key></div>;
      })}
    </div>
  );
};
export default List;

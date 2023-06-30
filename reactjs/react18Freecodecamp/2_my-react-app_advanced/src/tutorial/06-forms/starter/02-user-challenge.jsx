import { useEffect } from "react";
import { useState } from "react";

import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [datas, setDatas] = useState(data);
  let [id, setId] = useState('');

  useEffect(() => {}, [datas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = [...datas];
    array.push({
      id: array.length + 1,
      name: name,
    });
    setDatas(array);
    console.log(array);
    setName('')
  };

  const removeUser = (id) =>{
    const updatedUsers = datas.filter(item => item.id != id)
    setDatas(updatedUsers)
  }

  const deleteUser = (e) => {
    e.preventDefault();
    const array = [...datas];
    const newArray = array.filter((item) => item.id != id);
    // array.pop()
    console.log(newArray);
    setDatas(newArray);
    setId('')
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}
      <div>
        {datas.map((item) => (
          <div key={item.id}>
          <h5 >{item.name}</h5>
          <button className="btn" onClick={()=>removeUser(item.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* delete user */}
      <form className="form" onSubmit={deleteUser}>
        <div className="form-row">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            type="number"
            className="form-input"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block"
          style={{ background: "red" }}
        >
          delete
        </button>
      </form>
    </div>
  );
};
export default UserChallenge;

import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(name, email)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Controlled Inputs</h2>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </div>
    </form>
  );
};
export default ControlledInputs;

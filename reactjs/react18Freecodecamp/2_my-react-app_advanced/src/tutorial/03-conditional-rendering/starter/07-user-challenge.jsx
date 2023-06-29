import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      name: "Jhon",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <>
          <h1>hello there, user {user.name}</h1>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <h1>please login</h1>
          <button className="btn" onClick={login}>
            logout
          </button>
        </>
      )}
    </>
  );
};

export default UserChallenge;

import { useState } from "react";
import "./App.css";
import { useFirebase } from "./context/Firebase.jsx";

function App() {
  const firebase = useFirebase();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  console.log("Firebase", firebase);

  return (
    <div className="App">
      <h1>Firebase</h1>
      <input
        onChange={(e) => setemail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter email"
      />
      <input
        onChange={(e) => setpassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter password"
      />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password);
          firebase.putData("users/"+ "shivbaba", { email, password})
        }}
      >
        Signup
      </button>
    </div>
  );
}

export default App;

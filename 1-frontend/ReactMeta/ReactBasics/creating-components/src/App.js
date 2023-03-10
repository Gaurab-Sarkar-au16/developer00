import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Header name="Anna" color="purple"/>
      <Main greet="Howdy"/>
      <Sidebar greet="Hi"/>
    </>
  );
}

export default App;

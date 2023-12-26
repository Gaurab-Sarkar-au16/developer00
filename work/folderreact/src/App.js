import "./App.css";
import Menu from './Menu'

function App() {
  const tree = {
    children: [
      { name: "empty_folder", children: [] },

      {
        name: "public",
        children: [{ name: "index.html" }, { name: "favourite" }],
      },

      {
        name: "src",
        children: [
          { name: "App.css" },
          { name: "App.js" },
          {
            name: "components",
            children: [
              { name: "ComponentA.js" },
              { name: "ComponentB.js" },
              { name: "ComponentC.js" },
            ],
          },
        ],
      },
      { name: "package.json" },
    ],
  };
  return (
    <div className="App">
      <h1>App.js</h1>
      <Menu items={tree}/>
    </div>
  );
}

export default App;
import './App.css';
import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';

function App() {

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <SignupPage />
      <SigninPage/>
    </div>
  );

}

export default App;


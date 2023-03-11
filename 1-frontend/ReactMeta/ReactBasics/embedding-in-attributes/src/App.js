import avatar from './avatar.jpg'
import Btn from './Btn';
import ModeToggler from './ModeToggler';

function Logo(props){
  const usePic = <img src={avatar}/>
  return usePic
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Btn />
      <ModeToggler />
      <Logo />

    </div>
  );
}

export default App;

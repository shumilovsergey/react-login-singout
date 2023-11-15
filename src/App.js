import logo from './logo.svg';
import './App.css';
import Gpt from './Components/Gpt/Gpt';
import Singup from './Components/Singup/Singup';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <div>
      <Login/>
      <Singup/>
      <Gpt/>
      <Profile/>
    </div>
  );
}

export default App;

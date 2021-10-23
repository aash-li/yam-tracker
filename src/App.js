import logo from './logo.svg';
import './App.css';
import Stickies from './Stickies'
import Login from './Login'
import Logout from './Logout'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <div class="topleft">
        <font face = "keepOnTruckin" size = "5">yam
        </font> 
        </div>
      </header>
      <Stickies/>
      <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
      {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p>}
      <Logout loggedIn ={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
    </div>
  );
}

export default App;

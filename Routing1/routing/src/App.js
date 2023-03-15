import './App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import User from './components/User';
import Error404 from './components/Error404';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({
              backgroundColor: isActive && 'crimson',
              color: isActive && 'white'
            })} to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive && "blue"} to="/about" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive && "yellow"} to="/users" >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users'>
          <Route index={true} element={<Users />} />
          <Route path='user/:id' element={<User />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;

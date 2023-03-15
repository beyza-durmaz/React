import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName='active' to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to="/about" >About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor: "yellow"}} to="/users" >Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="*" component={Error404} />
        </Switch>

      </div>
    </Router>
  );
}


export default App;

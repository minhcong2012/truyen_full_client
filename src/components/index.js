import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./PC/Home/Home"
import NavBar from "../container/NavBar/Navbar";

const PC = () => (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
)

export default PC;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
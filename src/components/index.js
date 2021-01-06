import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./PC/Home/Home.lazy";
import NavBar from "../container/NavBar/NavBar.lazy";
import MenuHeader from "../container/MenuHeader/MenuHeader.lazy";
import Footer from "../container/Footer/Footer.lazy";

const PC = () => (
    <Router>
      <div id="container">
        <NavBar/>
        <MenuHeader/>
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
        <Footer/>
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./PC/Home/Home.lazy";
import NavBarHead from "../container/NavBarHead/NavBarHead.lazy";
import MenuHeader from "../container/MenuHeader/MenuHeader.lazy";
import RightSideBar from "../container/RightSideBar/RightSideBar.lazy";
import LoveStory from "./PC/LoveStory/LoveStory.lazy";
import Footer from "../container/Footer/Footer.lazy";
import DetailStory from "./PC/DetailStory/DetailStory";

const PC = () => (
    <Router>
      <div id="container">
        <NavBarHead/>
        <MenuHeader/>
        <div id="main" className="d-flex">
          <div className="content">
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/truyen-ngon-tinh" component={LoveStory} exact/>
              <Route path="/truyen/:id" component={DetailStory}/>
            </Switch>
          </div>
          <div className="side-bar">
            <RightSideBar/>
          </div>
        </div>
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
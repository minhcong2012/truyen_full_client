import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./PC/Home/Home.lazy";
import NavBarHead from "../container/NavBarHead/NavBarHead.lazy";
import MenuHeader from "../container/MenuHeader/MenuHeader.lazy";
import RightSideBar from "../container/RightSideBar/RightSideBar.lazy";
import LoveStory from "./PC/LoveStory/LoveStory.lazy";
import Footer from "../container/Footer/Footer.lazy";
import DetailStory from "./PC/DetailStory/DetailStory.lazy";
import ReadStory from "./PC/ReadStory/ReadStory.lazy"
import { useEffect, useState } from "react";

const PC = () => {
  const [hasSideBar, setHasSideBar] = useState(true);
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  useEffect(() => {
    const path = window.location.pathname;
    if((path.slice(path.lastIndexOf('/') + 1, path.length) === "doc-truyen")){
      setHasSideBar(false)
    } else {
      setHasSideBar(true)
    }
  }, []);

  const onChangeMode = newMode => {
    setMode(newMode);
    localStorage.setItem("mode", newMode)
  }

  return (
    <Router>
      <div id="container" className={mode}>
        <NavBarHead/>
        <MenuHeader setMode={onChangeMode}/>
        <div id="main" className="d-flex">
          <div className={hasSideBar ? "content" : "content-full"}>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/truyen-ngon-tinh" component={LoveStory} exact/>
              <Route path="/truyen/:id" component={DetailStory} exact/>
            </Switch>
          </div>
          {hasSideBar && 
            <div className="side-bar">
              <RightSideBar/>
            </div>
          }
        </div>
        <Switch>
          <Route path="/truyen/luon-co-nguoi-dien/doc-truyen" component={ReadStory} exact/>
        </Switch>
        {hasSideBar && <Footer/>}
      </div>
    </Router>
  )
}

export default PC;
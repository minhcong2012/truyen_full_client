import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePC from "./PC/Home/Home.lazy";
import HomeMobile from "./Mobile/Home/Home.lazy";
import LoveStoryPC from "./PC/LoveStory/LoveStory.lazy";
import LoveStoryMobile from "./Mobile/LoveStory/LoveStory.lazy";
import DetailStoryPC from "./PC/DetailStory/DetailStory.lazy";
import DetailStoryMobile from "./Mobile/DetailStory/DetailStory.lazy";
import ReadStoryPC from "./PC/ReadStory/ReadStory.lazy";
import ReadStoryMobile from "./Mobile/ReadStory/ReadStory.lazy";

import RightSideBarPC from "../container/PC/RightSideBar/RightSideBar.lazy";
import FooterPC from "../container/PC/Footer/Footer.lazy";
import ModalLogin from "../container/PC/ModalLogin/ModalLogin.lazy";
import NavBarHeadPC from "../container/PC/NavBarHead/NavBarHead.lazy";
import MenuHeaderPC from "../container/PC/MenuHeader/MenuHeader.lazy";

import RightSideBarMobile from "../container/Mobile/RightSideBar/RightSideBar.lazy";
import FooterMobile from "../container/Mobile/Footer/Footer.lazy";
import NavBarHeadMobile from "../container/Mobile/NavBarHead/NavBarHead.lazy";
import MenuHeaderMobile from "../container/Mobile/MenuHeader/MenuHeader.lazy";
import { useEffect, useState } from "react";

const PC = () => {
  const [hasSideBar, setHasSideBar] = useState(true);
  const [modalLogin, setModalLogin] = useState(false);
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
      <div id="container-pc" className={mode}>
        <NavBarHeadPC setModalLogin={setModalLogin} modalLogin={modalLogin}/>
        <MenuHeaderPC setMode={onChangeMode}/>
        <div id="main" className="d-flex">
          <div className={hasSideBar ? "content" : "content-full"}>
            <Switch>
              <Route path="/" component={HomePC} exact/>
              <Route path="/truyen-ngon-tinh" component={LoveStoryPC} exact/>
              <Route path="/truyen/:id" component={DetailStoryPC} exact/>
            </Switch>
          </div>
          {hasSideBar && 
            <div className="side-bar">
              <RightSideBarPC/>
            </div>
          }
        </div>
        <Switch>
          <Route path="/truyen/luon-co-nguoi-dien/doc-truyen" component={ReadStoryPC} exact/>
        </Switch>
        {hasSideBar && <FooterPC/>}
      </div>
      <div id="container-mobile">
        <NavBarHeadMobile setModalLogin={setModalLogin} modalLogin={modalLogin}/>
          <div id="main" className="d-flex">
            <div className={hasSideBar ? "w-100" : "content-full"}>
              <Switch>
                <Route path="/" component={HomeMobile} exact/>
                <Route path="/truyen-ngon-tinh" component={LoveStoryMobile} exact/>
                <Route path="/truyen/:id" component={DetailStoryMobile} exact/>
              </Switch>
            </div>
          </div>
          {hasSideBar && 
            <div className="side-bar">
              <RightSideBarMobile/>
            </div>
          }
          <Switch>
            <Route path="/truyen/luon-co-nguoi-dien/doc-truyen" component={ReadStoryMobile} exact/>
          </Switch>
          {hasSideBar && <FooterMobile/>}
      </div>
      <ModalLogin modalLogin={modalLogin} setModalLogin={setModalLogin} />
    </Router>
  )
}

export default PC;
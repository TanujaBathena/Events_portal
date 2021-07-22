import "./App.css";
import React,{useState} from "react";
import Navbar from "./components/navBar";
import Events from "./components/Events";
import Challenges from "./components/Challenges";
import Internships from "./components/Internships";
import Teamup from "./components/Teamup";
import MyProfile from "./components/MyProfile";
import MyPosts from "./components/MyPosts";
import MyRequests from "./components/MyRequests";
import ReceivedRequests from "./components/ReceivedRequests";
import logout from "./components/logout";
import Teamupform from "./components/TeamUp-form";
import InternshipForm from "./components/InternshipForm1";
import Login from "./components/login"
import Protectedroutes from "./components/protectedroutes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Protectedroutes path="/Events" component={Events} />
          <Protectedroutes  path="/Internships" exact component={Internships} />
          <Protectedroutes  path="/Internships/form" component={InternshipForm} />
          <Protectedroutes  component={Teamup} path="/Teamup" exact/>
          <Protectedroutes  path="/Teamup/form" component={Teamupform} />
          <Protectedroutes  path="/Challenges" component={Challenges} />
          <Protectedroutes  path="/myProfile" component={MyProfile} />
          <Protectedroutes  path="/myposts" component={MyPosts} />
          <Protectedroutes  path="/myRequests" component={MyRequests} />
          <Protectedroutes  path="/ReceivedRequests" component={ReceivedRequests} />
          <Protectedroutes  path="/logout" component={logout} />
          <Route  path="/Login" component={Login} />
          <Route path="/home"  component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

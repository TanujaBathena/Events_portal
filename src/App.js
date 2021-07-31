//importing all components
import "./App.css";
import React from "react";
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
import InternshipForm from "./components/InternshipForm";
import Login from "./components/login";
import Home from "./components/Home";
import Protectedroutes from "./components/protectedroutes"; //a component which  protects all the routes routing to the components.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //used for routing
import Teamupformedit from "./components/Teamupformedit";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* //initialising all the routes and protecting them using protected routes component. */}
        <Switch>
          <Protectedroutes path="/home" component={Home} />
          <Protectedroutes path="/Events" component={Events} />
          <Protectedroutes path="/Challenges" component={Challenges} />
          <Protectedroutes path="/Internships" exact component={Internships} />
          <Protectedroutes component={Teamup} path="/Teamup" exact />
          <Protectedroutes path="/Teamup/form" component={Teamupform} />
          <Protectedroutes path="/myProfile" component={MyProfile} />
          <Protectedroutes path="/myposts" component={MyPosts} />
          <Protectedroutes path="/myRequests" component={MyRequests} />
          <Protectedroutes
            path="/ReceivedRequests"
            component={ReceivedRequests}
          />
          <Protectedroutes
            path="/Internships/form"
            component={InternshipForm}
          />
          <Protectedroutes path="/logout" component={logout} />
          <Protectedroutes
            path="/teamupformedit"
            exact
            component={Teamupformedit}
          />
          <Route path="/Login" component={Login} />
        </Switch>
        <div style={{ width: "100%", height: "15vh" }}></div>
      </div>
    </Router>
  );
}

export default App;

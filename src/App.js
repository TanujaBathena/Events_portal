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
import Internshipread from "./components/Internshipread";
import Internshipedit from "./components/InternshipEdit";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* //initialising all the routes and protecting them using protected routes component. */}
        <Switch>
          <Protectedroutes path="/home" exact component={Home} />
          <Protectedroutes path="/Events" exact component={Events} />
          <Protectedroutes path="/Challenges" exact component={Challenges} />
          <Protectedroutes path="/Internships" exact component={Internships} />
          <Protectedroutes
            path="/Internships/edit"
            exact
            component={Internshipedit}
          />
          <Protectedroutes
            path="/Internships/form"
            exact
            component={InternshipForm}
          />
          <Protectedroutes
            path="/Internships/:id"
            exact
            component={Internshipread}
          />
          <Protectedroutes component={Teamup} exact path="/Teamup" />
          <Protectedroutes path="/Teamup/form" exact component={Teamupform} />
          <Protectedroutes path="/myProfile" exact component={MyProfile} />
          <Protectedroutes path="/myposts" exact component={MyPosts} />
          <Protectedroutes path="/myRequests" exact component={MyRequests} />
          <Protectedroutes
            path="/ReceivedRequests"
            component={ReceivedRequests}
          />
          <Protectedroutes path="/logout" exact component={logout} />
          <Protectedroutes
            path="/teamupformedit/:id"
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

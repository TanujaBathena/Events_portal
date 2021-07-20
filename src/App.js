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
import InternshipForm from "./components/InternshipForm1";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Events" component={Events} />
          <Route path="/Internships" exact component={Internships} />
          <Route path="/Internships/form" component={InternshipForm} />
          <Route path="/Teamup" exact component={Teamup} />
          <Route path="/Teamup/form" component={Teamupform} />
          <Route path="/Challenges" component={Challenges} />
          <Route path="/myProfile" component={MyProfile} />
          <Route path="/myposts" component={MyPosts} />
          <Route path="/myRequests" component={MyRequests} />
          <Route path="/ReceivedRequests" component={ReceivedRequests} />
          <Route path="/logout" component={logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

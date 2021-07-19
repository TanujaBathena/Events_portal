import './App.css';
import Navbar from './components/navBar';
import Events from './components/Events';
import Challenges from "./components/Challenges";
import Internships from './components/Internships';
import Profile from './components/Profile';
import Teamup from './components/Teamup';
import Teamup_form from './components/TeamUp-form'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Switch>
            <Route path='/Events'  component={Events}/>
            <Route path='/Internships' component={Internships}/>
            <Route path='/Teamup' exact component={Teamup}/>
            <Route path="/Challenges"component={Challenges}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/Teamup/form" component={Teamup_form}/>
        </Switch>
    </div>
    </Router>
  );
}


export default App;

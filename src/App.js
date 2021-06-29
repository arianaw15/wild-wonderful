import './App.css';
import Landing from './components/landingPage/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import SwimAll from './components/swim/SwimAll';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Landing} />
        <Route exact path="/Swim-All" component={SwimAll} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

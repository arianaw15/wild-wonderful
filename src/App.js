import './App.css';
import Landing from './components/landingPage/Landing';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
    </div>
  );
}

export default App;

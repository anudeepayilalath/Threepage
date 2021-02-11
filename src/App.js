
import './App.css';
import Second from './components/Second';
// import Navbar from './components/navbar';
import Header from './components/Header';
import Forcv from './components/Forcv'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/forcv" exact>
          <Forcv/>
        </Route>
        <Route path="/" exact>
          <Header/>
        </Route>
        <Route path="/second" exact>
            <Second/>
        </Route>
      
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;

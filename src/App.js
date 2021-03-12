import './App.css';
import Homepage from './Components/Homepage'
import Postpage from './Components/Postoperation'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/postoperation" component={Postpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

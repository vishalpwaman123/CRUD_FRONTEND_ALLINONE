import './App.css';
import Homepage from './Components/Homepage'
import Postpage from './Components/Postoperation'
import Putpage from './Components/Putoperation'
import Deletepage from './Components/Deleteoperation'
import Getpage from './Components/Getoperation'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/postoperation" component={Postpage} />
          <Route exact path="/putoperation" component={Putpage} />
          <Route exact path="/deleteoperation" component={Deletepage} />
          <Route exact path="/getoperation" component={Getpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

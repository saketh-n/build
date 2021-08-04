import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import How from "./pages/howitworks";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import Leaderboard from "./pages/leaderboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/how-it-works">
            <How />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/u/:username">
            <Profile />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

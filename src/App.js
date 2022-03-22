import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar1";
import Sell from "./Sell";
import Learn from "./Learn";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Section1 from "./Section1";
import Login from "./Login";
import Getstarted from "./Getstarted";
import WelcomeBack from "./WelcomeBack";
import Buy from "./Buy";
import Sell_Instantly from "./Sell_Instantly";
import Individual from "./Individual";
import Business from "./Business";
import Almost from "./Almost";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Sell">
            <Sell />
          </Route>
          <Route path="/Learn">
            <Learn />
          </Route>
          <Route path="/Main">
            <Main />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Getstarted">
            <Getstarted />
          </Route>
          <Route path="/WelcomeBack">
            <WelcomeBack />
          </Route>
          <Route path="/Buy">
            <Buy />
          </Route>
          <Route path="/Sell_Instantly">
            <Sell_Instantly />
          </Route>
          <Route path="/Individual">
            <Individual />
          </Route>
          <Route path="/Business">
            <Business />
          </Route>
          <Route path="/Almost">
            <Almost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

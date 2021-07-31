import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;

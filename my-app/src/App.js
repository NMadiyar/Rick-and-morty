import "./App.css";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import StartingPage from "./pages/StartingPage";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import CreateAcc from "./pages/CreateAcc";
import Characters from "./pages/Characters";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Options from "./pages/Options";
import CharactersDB from "./components/CharactersDB";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={StartingPage} exact />
          <Route path="/Registration" component={Registration} />
          <Route path="/CreateAccount" component={CreateAcc} />
          <Route path="/Characters" component={Characters} />
          <Route path="/Location" component={Location} />
          <Route path="/Episodes" component={Episodes} />
          <Route path="/Options" component={Options} />
          <Route path="/DB" component={CharactersDB} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

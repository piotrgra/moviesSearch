import React from 'react';
import Navi from "./Navi";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      <>
        <Navi />
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>

      </>
      </Provider>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import Navi from "../containers/Navi";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import { Provider } from "react-redux";
import store from "../redux/store";
import Details from '../containers/Details';
import Planed from '../containers/Planed';
import Watched from '../containers/Watched';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Navi />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/planed' component={Planed} />
          <Route exact path='/watched' component={Watched} />
          <Route exact path='/details/:movieId' component={Details} />
        </Switch>
      </Provider>
    </HashRouter>
  );
}

export default App;

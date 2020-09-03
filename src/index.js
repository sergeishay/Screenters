
import React from "react";
import ReactDOM from "react-dom";
import 'mdbreact/dist/css/mdb.css'
import "./index.css";
import App from "./App";
import { Provider } from 'mobx-react'
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./auth_config.json";
import history from "./utils/history";
import { Events } from './stores/Events'
import { Show } from './stores/Show'
import { User } from './stores/User'
// import { Creators } from './stores/Creators'

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname
  );
};

const eventsStores = new Events()
const showStore = new Show()
const userStore = new User()
// const creatorStore = new Creators()
const stores =  {eventsStores , showStore , userStore }
ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    audience={config.audience}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider {...stores}><App /></Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { connect } from "react-redux";
import React, {Component} from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { inc } from './store/actions/counter.action'
import routes from "./routes";
import {AppHeader} from './cmps/app-header.jsx'

function _App(props) {
  return (
    <div className="app">
      <Router>

        <AppHeader />
        <main>
          <Switch>
            {routes.map(route =>  <Route key={route.path} exact path={route.path} component={route.component} />)}
          </Switch>
        </main>
      </Router>
    </div>
  );
}




function mapStateToProps(storeState) {
  return {
    count: storeState.countModule.count,
    status: storeState.statusModule.status
  }
}

//take it out if i dont need it
const mapDispatchToProps = {
  inc
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)
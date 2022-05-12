import { connect } from "react-redux";
import React, {Component} from 'react'
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { toyService } from "./services/toy.service";
import {ToyApp} from './pages/toys-app.jsx'
import { inc } from './store/actions/counter.action'
import routes from "./routes";

// function _App(props) {
//   return (
//     <div className="app">
//       <Router>

//         <header className="app-header">
//           <h1>Hello React</h1>
//           <h3>Status: {props.status}</h3>
//           <h2>
//             Count {props.count}
//             <button onClick={() => {
//               props.inc()
//             }}>+</button>
//           </h2>
//           <img src={logo} className="app-logo" alt="logo" />
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//           </nav>
//         </header>
//         <main>
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/about" exact component={About} />
//           </Switch>
//         </main>
//       </Router>
//     </div>
//   );
// }


// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

// function About() {
//   return (
//     <>
//       <main>
//         <h2>Who are we?</h2>

//         <p>
//           That feels like an existential question, don't you
//           think?
//         </p>
//       </main>
//       <nav>
//         <Link to="/">Home</Link>
//       </nav>
//     </>
//   );
// }



// function mapStateToProps(storeState) {
//   return {
//     count: storeState.countModule.count,
//     status: storeState.statusModule.status
//   }
// }
// const mapDispatchToProps = {
//   inc
// }

// export const App = connect(mapStateToProps, mapDispatchToProps)(_App)


function _App(props) {
  return (
    <div className="app">
      <Router>

        <AppHeader />
        <main>
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            {/* <Route path="/about" exact component={About} /> */}
            {/* <Route path="/toys" exact component={ToyApp} /> */}
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
const mapDispatchToProps = {
  inc
}


function AppHeader({ }) {
  return (<header className="app-header">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/toys">Toys</Link>
    </nav>
  </header>);
}
export const App = connect(mapStateToProps, mapDispatchToProps)(_App)
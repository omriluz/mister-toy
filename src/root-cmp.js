import { connect } from "react-redux";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { inc } from './store/actions/counter.action'
import logo from './logo.svg';

function _App(props) {
  return (
    <div className="app">
      <Router>

        <header className="app-header">
          <h1>Hello React</h1>
          <h3>Status: {props.status}</h3>
          <h2>
            Count {props.count}
            <button onClick={() => {
              props.inc()
            }}>+</button>
          </h2>
          <img src={logo} className="app-logo" alt="logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}


function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>

        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
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

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)
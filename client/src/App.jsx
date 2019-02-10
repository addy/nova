import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <section className="hero is-dark">
          <div className="hero-head">
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div id="linkz" className="navbar-menu">
                <div className="navbar-start">
                  <Link to="/" className="navbar-item">
                    Home
                  </Link>
                  <Link to="/resume" className="navbar-item">
                    Résumé
                  </Link>
                  <Link to="/about" className="navbar-item">
                    About
                  </Link>
                </div>
                <div className="navbar-end">
                  <span className="navbar-item">
                    <a className="button is-light" href="https://github.com/x4nt">
                      <span className="icon">
                        <i className="fab fa-github" />
                      </span>
                      <span>Github</span>
                    </a>
                  </span>
                </div>
              </div>
            </nav>
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">Addison Shaw</h1>
                <h2 className="subtitle">is my name</h2>
              </div>
            </div>
          </div>
        </section>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;

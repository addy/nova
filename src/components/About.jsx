import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="hero is-dark is-bold is-fullheight">
    <div className="hero-head">
      <div className="navbar" role="navigation" aria-label="left navigation">
        <div id="linkz" calssname="navabar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">I'm just a guy trying to eat his daily pizza</h1>
      </div>
    </div>
  </div>
);

export default About;

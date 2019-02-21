import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="columns is-gapless">
    <div className="column is-half">
      <div className="hero is-light is-bold is-fullheight">
        <div className="hero-head">
          <div className="navbar" role="navigation" aria-label="left navigation">
            <div id="linkz" calssname="navabar-menu">
              <div className="navbar-start">
                <Link to="/about" className="navbar-item">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Pizza</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="column is-half">
      <div className="hero is-dark is-bold is-fullheight">
        <div className="hero-head">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="twitch-menu" className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <a className="button is-medium is-light" href="https://www.twitch.tv/addypizza">
                    <span className="icon is-medium">
                      <i className="fab fa-twitch" />
                    </span>
                    <span>Twitch</span>
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Party</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

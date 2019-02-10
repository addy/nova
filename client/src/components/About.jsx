import React, { PureComponent } from 'react';
import request from 'superagent';

class About extends PureComponent {
  constructor(props) {
    super(props);
    this.numToColor = {
      1: 'is-light',
      3: 'is-warning',
      7: 'is-info',
      13: 'is-success'
    };
    this.state = {
      nums: []
    };
  }

  componentDidMount() {
    request
      .get('/api/ids')
      .set('accept', 'json')
      .then(res => {
        this.setState({ nums: res.body });
      });
  }

  render() {
    const { numToColor } = this;
    const { nums } = this.state;

    return (
      <div className="container">
        {nums.length === 0 && (
          <secion className="hero is-light is-fullheight">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">Nothing to see...</h1>
              </div>
            </div>
          </secion>
        )}
        {nums.map(num => (
          <secion className={`hero ${numToColor[num] ? numToColor[num] : 'is-dark'} is-fullheight`}>
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">{num}</h1>
              </div>
            </div>
          </secion>
        ))}
      </div>
    );
  }
}

export default About;

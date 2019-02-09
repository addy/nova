import React, { Component } from 'react';
import request from 'superagent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: []
    };
  }

  componentDidMount() {
    request
      .get('/ids')
      .set('accept', 'json')
      .then(res => {
        this.setState({ nums: res.body });
      });
  }

  render() {
    const { nums } = this.state;
    return (
      <div>
        <ul>
          {nums.map(num => (
            <li>{num}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;

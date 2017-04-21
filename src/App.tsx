import * as React from 'react';
import './App.css';
import axios from 'axios';

const logo = require('./logo.svg');

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      giphy: {}
    };
  }

  componentDidMount() {
    this.getGiphys();
  }

  async getGiphys() {
    try {
      var result = await axios.get('https://api.giphy.com/v1/gifs/search?q=the+end&api_key=dc6zaTOxFJmzC');
      this.setState({ giphy: result.data.data[ 1 ].images.fixed_height.url });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple React App To Test Await/Async</h2>
        </div>
        <div>
          <img alt="" style={{ width: '100%', verticleAlign: 'middle' }} src={this.state.giphy} />
        </div>

      </div>
    );
  }
}

export default App;

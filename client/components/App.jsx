import React from 'react';
import axios from 'axios';
import Boxscore from './Boxscore.jsx';
import PlayerStats from './PlayerStats.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios.get('/api/getGameData')
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {this.state.data ? 
        <div>
          <h1>NBA Finals {this.state.data.title}</h1>
          <Boxscore home={this.state.data.home} away={this.state.data.away} />
          <PlayerStats team={this.state.data.home} />
          <PlayerStats team={this.state.data.away} />
        </div> : <h1>Loading...</h1>}
      </div>
    );
  }
}
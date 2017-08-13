import React from 'react';
import axios from 'axios';
import Boxscore from './Boxscore.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('/api/getGameData')
      .then((response) => console.log(response.data))
      .then(()=>console.log('done?'));
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>NBA Finals Game 5</h1>
        <Boxscore />
      </div>
    );
  }
}
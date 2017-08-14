import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Boxscore from './Boxscore.jsx';
import PlayerStats from './PlayerStats.jsx';

const Title = styled.h1`
  color: white;
`;

const CenteredDiv = styled.div`
  text-align: center;
  padding-top: 50px;
`;

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
      <CenteredDiv>
        {this.state.data ? 
        <div>
          <Title>NBA Finals {this.state.data.title}</Title>
          <Boxscore home={this.state.data.home} away={this.state.data.away} />
          <PlayerStats team={this.state.data.home} />
          <PlayerStats team={this.state.data.away} />
        </div> : <Title>Loading...</Title>}
      </CenteredDiv>
    );
  }
}
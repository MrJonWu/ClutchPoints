import React from 'react';
import {Container, Table} from 'semantic-ui-react';

export default class PlayerStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: this.props.team,
      players: this.props.team.players,
      tableHeaders: ['PLAYER','MIN','FG','3PT','FT','OREB','DREB','REB','AST','STL','BLK','TO','PF','+/-','PTS'],
      headerLegend: {
        'FG': 'field_goals_made',
        '3PT': 'three_points_made',
        'FT': 'free_throws_made',
        'OREB': 'offensive_rebounds',
        'DREB': 'defensive_rebounds',
        'REB': 'rebounds',
        'AST': 'assists',
        'STL': 'steals',
        'BLK': 'blocks',
        'TO': 'turnovers',
        'PF': 'personal_fouls',
        '+/-': 'pls_min',
        'PTS': 'points'
      } 
    };
  }

  sortBy = (criteria) => {
    let tempArr = [];
    for (let i = 0; i < this.state.players.length; i++) {
      tempArr.push(this.state.players[i]);
    }

    switch(criteria) {
      case 'PLAYER':
        tempArr.sort((a, b) => {return (a.first_name < b.first_name) ? -1 : (a.first_name > b.first_name) ? 1 : 0;})
        break;
      case 'MIN':
        tempArr.sort((a, b) => {
          let aArr = a.statistics.minutes.split(':');
          let aMin = Number(aArr[0]);
          let aSec = Number(aArr[1]);
          let aTotalSec = aMin*60 + aSec;
          let bArr = b.statistics.minutes.split(':');
          let bMin = Number(bArr[0]);
          let bSec = Number(bArr[1]);
          let bTotalSec = bMin*60 + bSec;
          return bTotalSec - aTotalSec;
        });
        break;
      default:
        tempArr.sort((a,b) => b.statistics[this.state.headerLegend[criteria]] - a.statistics[this.state.headerLegend[criteria]]);
        break;
    }

    this.setState({players: tempArr});
  }

  componentDidMount() {
    this.sortBy('PTS');
  }

  render() {
    return (
      <div>
        <Container>
          <h3>{this.state.team.market +' ' + this.state.team.name}</h3>
          <Table striped>
            <Table.Header>
              <Table.Row>
                {this.state.tableHeaders.map((header, key) => {
                  return <Table.HeaderCell key={key} onClick={()=>this.sortBy(header)}><span style={{cursor:"pointer"}}>{header}</span></Table.HeaderCell>
                })}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.players.map((player, key) => {
                return <Table.Row key={key}>
                  {player.starter ? <Table.Cell><strong>{player.full_name}</strong> - <small><i>{player.primary_position}</i></small></Table.Cell> : <Table.Cell>{player.full_name} - <small><i>{player.primary_position}</i></small></Table.Cell>}
                  <Table.Cell>{player.statistics.minutes}</Table.Cell>
                  <Table.Cell>{player.statistics.field_goals_made + '-' + player.statistics.field_goals_att}</Table.Cell>
                  <Table.Cell>{player.statistics.three_points_made + '-' + player.statistics.three_points_att}</Table.Cell>
                  <Table.Cell>{player.statistics.free_throws_made + '-' + player.statistics.free_throws_att}</Table.Cell>
                  <Table.Cell>{player.statistics.offensive_rebounds}</Table.Cell>
                  <Table.Cell>{player.statistics.defensive_rebounds}</Table.Cell>
                  <Table.Cell>{player.statistics.rebounds}</Table.Cell>
                  <Table.Cell>{player.statistics.assists}</Table.Cell>
                  <Table.Cell>{player.statistics.steals}</Table.Cell>
                  <Table.Cell>{player.statistics.blocks}</Table.Cell>
                  <Table.Cell>{player.statistics.turnovers}</Table.Cell>
                  <Table.Cell>{player.statistics.personal_fouls}</Table.Cell>
                  <Table.Cell>{player.statistics.pls_min}</Table.Cell>
                  <Table.Cell>{player.statistics.points}</Table.Cell>
                </Table.Row>;
              })}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}
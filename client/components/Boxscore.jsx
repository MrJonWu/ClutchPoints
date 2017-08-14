import React from 'react';
import {Grid, Container, Table} from 'semantic-ui-react';

export default class Boxscore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Container>
          <Grid centered>
            <Grid.Row>
              <Table collapsing inverted>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>FINAL</Table.HeaderCell>
                    <Table.HeaderCell>Q1</Table.HeaderCell>
                    <Table.HeaderCell>Q2</Table.HeaderCell>
                    <Table.HeaderCell>Q3</Table.HeaderCell>
                    <Table.HeaderCell>Q4</Table.HeaderCell>
                    <Table.HeaderCell>T</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell><strong>{this.props.home.name}</strong></Table.Cell>
                    {this.props.home.scoring.map((quarter,key) => {
                      return <Table.Cell key={key}>{quarter.points}</Table.Cell>
                    })}
                    <Table.Cell>{this.props.home.points}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell><strong>{this.props.away.name}</strong></Table.Cell>
                    {this.props.away.scoring.map((quarter,key) => {
                      return <Table.Cell key={key}>{quarter.points}</Table.Cell>
                    })}
                    <Table.Cell>{this.props.away.points}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
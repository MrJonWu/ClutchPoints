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
                <Table.Body>

                  <Table.Row>
                    <Table.Cell>FINAL</Table.Cell>
                    <Table.Cell>T</Table.Cell>
                    <Table.Cell>Q1</Table.Cell>
                    <Table.Cell>Q2</Table.Cell>
                    <Table.Cell>Q3</Table.Cell>
                    <Table.Cell>Q4</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell><strong>{this.props.home.name}</strong></Table.Cell>
                    <Table.Cell>{this.props.home.points}</Table.Cell>
                    <Table.Cell>{this.props.home.scoring[0].points}</Table.Cell>
                    <Table.Cell>{this.props.home.scoring[1].points}</Table.Cell>
                    <Table.Cell>{this.props.home.scoring[2].points}</Table.Cell>
                    <Table.Cell>{this.props.home.scoring[3].points}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell><strong>{this.props.away.name}</strong></Table.Cell>
                    <Table.Cell>{this.props.away.points}</Table.Cell>
                    <Table.Cell>{this.props.away.scoring[0].points}</Table.Cell>
                    <Table.Cell>{this.props.away.scoring[1].points}</Table.Cell>
                    <Table.Cell>{this.props.away.scoring[2].points}</Table.Cell>
                    <Table.Cell>{this.props.away.scoring[3].points}</Table.Cell>
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
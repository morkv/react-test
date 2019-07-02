import * as React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import { 
  Segment,
  Grid,
  Header,
  Button,
  Accordion,
  Icon
} from 'semantic-ui-react';

import './TestComponent.css';
import TestCoomponentTable from './TestComponentTable/TestComponentTable';
import TestComponentList from './TestComponentList/TestComponentList';

const OPPONENT_1 = `O.J Simpson`;
const OPPONENT_2 = `The People`;

class TestComponent extends React.Component {
    state = { 
        isOpen: false
    }
    
    handleClick = () => {
        this.setState({ 
            isOpen: !this.state.isOpen,
        })
      }

      componentDidMount(){
        this.props.getItems();
    };

    render() {
        const { isOpen } = this.state;
        const { cases } = this.props.case;
        return  (
            <Grid columns={2}>
                <Grid.Row centered>
                    <Grid.Column>
                        <Segment>
                            <Accordion className='accordion--custom'>
                                <Accordion.Title active={isOpen} index={0}>
                                    <Header as='h3'>
                                        {OPPONENT_1} vs {OPPONENT_2}
                                        <Button 
                                            floated='right'
                                            onClick={this.handleClick}
                                            className='button--custom'
                                        >
                                            <Icon name='angle down'/>
                                        </Button>
                                    </Header>
                                    <TestComponentList cases={cases}/>
                                </Accordion.Title>
                                <Accordion.Content active={isOpen}>
                                    <TestCoomponentTable cases={cases}/>
                                </Accordion.Content>
                            </Accordion>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    };
};

const mapStateToProps = (state) => ({
    case: state.case
});

export default connect(mapStateToProps, { getItems })(TestComponent);
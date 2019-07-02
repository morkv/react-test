import * as React from 'react';
// import { connect } from 'react-redux';
// import { getItems } from '../../actions/itemActions';
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

// const OPPONENT_1 = `O.J Simpson`;
// const OPPONENT_2 = `The People`;

class TestComponent extends React.Component {
    state = { 
        isOpen: false
    }
    
    handleClick = () => {
        this.setState({ 
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        const { isOpen } = this.state;
        // console.log(this.props.case.documents.length)
         return  (
            <Segment>
                <Accordion className='accordion--custom'>
                    <Accordion.Title active={isOpen} index={0}>
                        <Header as='h3'>
                            {this.props.case.case_name}
                            <Button 
                                floated='right'
                                onClick={this.handleClick}
                                className='button--custom'
                                disabled={this.props.case.documents.length ? false : true}
                            >
                                <Icon name='angle down'/>
                            </Button>
                        </Header>
                        <TestComponentList lists={this.props.case}/>
                    </Accordion.Title>
                    <Accordion.Content active={isOpen}>
                        <TestCoomponentTable rows={this.props.case}/>
                    </Accordion.Content>
                </Accordion>
            </Segment>
        );
    };
};

export default TestComponent
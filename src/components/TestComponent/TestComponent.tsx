import * as React from 'react';

import { 
  Segment,
  Header,
  Button,
  Accordion,
  Icon,
  List,
  Label
} from 'semantic-ui-react';

import './TestComponent.css';
import TestCoomponentTable from './TestComponentTable/TestComponentTable';
import TestComponentList from './TestComponentList/TestComponentList';

class TestComponent extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { 
            isOpen: false,
            case: {}
        }
    }
    
    handleClick = () => {
        this.setState({ 
            isOpen: !this.state.isOpen,
        })
    }

    componentWillMount() {
        this.setState({
            case: this.props.case
        });
    };

    componentDidUpdate(prevProps: {case: object}) {
        if(prevProps.case !== this.props.case) {
            this.setState({
                case: this.props.case
            })
        };
    };

    render() {
         return  (
            <Segment>
                <Accordion className='accordion--custom'>
                    <Accordion.Title active={this.state.isOpen} index={0}>
                        <Header as='h3'>
                            {this.state.case.case_name}
                             <List floated='right'>
                                 <List.Item>
                                    <Label className='label--cusom disabled'>
                                        <Button className='button--custom button--custom-sort'>
                                            <Icon name='angle up' />
                                        </Button>
                                        <Button className='button--custom button--custom-sort'>
                                            <Icon name='angle down' />
                                        </Button>
                                    </Label>
                                     <Button
                                         onClick={this.handleClick}
                                         className='button--custom button--custom-rotate'
                                         disabled={this.state.case.documents.length ? false : true}
                                     >
                                         <Icon name='angle down' />
                                     </Button>
                                 </List.Item>
                             </List>
                        </Header>
                        <TestComponentList lists={this.state.case}/>
                    </Accordion.Title>
                    <Accordion.Content active={this.state.isOpen}>
                        <TestCoomponentTable rows={this.state.case}/>
                    </Accordion.Content>
                </Accordion>
            </Segment>
        );
    };
};

export default TestComponent
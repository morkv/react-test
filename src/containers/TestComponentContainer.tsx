
import * as React from 'react';
import {connect} from 'react-redux';
import { getItems } from '../actions/itemActions';
import uuid from 'uuid';
import { 
    Grid
} from 'semantic-ui-react';

import TestComponent from '../components/TestComponent/TestComponent';

class TestComponentContainer extends React.Component {

    render(){
        const { cases } = this.props.case;
        return (
            <Grid.Column>
                {cases.map(el => <TestComponent case={el} key={uuid()}/>)}
            </Grid.Column>
        )
    }
}

const mapStateToProps = (state) => ({
    case: state.case
});

export default connect(mapStateToProps, { getItems })(TestComponentContainer);
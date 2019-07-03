import * as React from 'react';
import { 
  Container,
  Grid
} from 'semantic-ui-react';
import './App.css';
import { Provider } from 'react-redux';
import store from '../store';

import TestComponentContainer from '../containers/TestComponentContainer';

function App() {
  return  (
    <Provider store={store}>
      <Container>
        <Grid columns={2}>
          <Grid.Row centered>
            <TestComponentContainer />
          </Grid.Row>
        </Grid>
      </Container>
    </Provider>
  )
};

export default App;

import * as React from 'react';
import { 
  Container
} from 'semantic-ui-react';

import './App.css';
import TestComponent from '../components/TestComponent/TestComponent';

import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return  (
    <Provider store={store}>
      <Container>
        <TestComponent />
      </Container>
    </Provider>
  )
};

export default App;

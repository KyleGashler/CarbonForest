import { StoreProvider, createStore } from 'easy-peasy';

import './App.css';
import Authorizer from './components/Authorizer';
import model from "./model";

const store = createStore(model);


function App() {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Authorizer />
      </div>
    </StoreProvider>
  );
}

export default App;

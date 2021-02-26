import { Provider } from 'react-redux';
import { store } from '../state';
import ApiList from './ApiList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <ApiList />
      </div>
     </Provider>
  );
};

export default App;

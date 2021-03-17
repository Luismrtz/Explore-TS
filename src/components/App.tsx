import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { store } from '../state';
// import Home from './pages/Home';
import { Navbar } from './navbar/Navbar';
import { Album, Home, Services, About, Pricing} from '../interfaces/index';



const App = () => {
  return (
    <Provider store={store}>
      <div>
      <Navbar/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/album" component={Album} />
        <Route path="/services" component={Services} />
        <Route path="/pricing" component={Pricing} />
        </Switch>
      </div>
     </Provider>
  );
};

export default App;

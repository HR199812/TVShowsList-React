import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowsList from './Shows/ShowsList/ShowsList';
import ShowDetail from './Shows/ShowDetail/ShowDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowsList} />
        <Route exact path="/ShowDetail" component={ShowDetail} />
      </Switch>
    </Router>
  );
}

export default App;

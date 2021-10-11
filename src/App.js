import CurrentZip from './components/current-zip';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={CurrentZip}/>
      </Switch>
    </div>
  );
}

export default App;

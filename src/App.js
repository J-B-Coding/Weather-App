import CurrentZip from './components/CurrentZip';
import { Route, Switch } from 'react-router-dom';
import WeeklyWeather from './components/WeeklyWeather';
import DailyWeather from './components/DailyWeather'

// Need to pass props from dummydata to route on line 14 or individual links will break (use history, prop drilling?)
import { dummydata } from './DummyData/dummyData';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/weather/:dayId' component={DailyWeather}/>
        <Route path='/weather' component={WeeklyWeather}/>
        <Route exact path ='/' component={CurrentZip}/>
      </Switch>
    </div>
  );
}

export default App;

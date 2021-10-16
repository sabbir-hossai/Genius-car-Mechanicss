
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Booking/Booking';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';
import Home from './Pagces/Home/Home/Home';
import Services from './Pagces/Home/Services/Services';

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:bookingId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

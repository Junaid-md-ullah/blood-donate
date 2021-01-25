import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './components/AdminPanel/Admin';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <MainBody />
            </Route>
            <Route path="/admin">
              <Header />
              <Admin />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

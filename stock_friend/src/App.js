
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Verify from './Verify.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/verify">
            <Verify />
          </Route>
        </Switch>
      </Router>
      <br/><br/>
    </div>
  );
}

export default App;

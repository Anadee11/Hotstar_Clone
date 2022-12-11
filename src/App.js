import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import './App.css';
import Detail from './components/detail';
import Header from './components/header';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <div className="App">
        <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home}/>
          <Route path='/detail/:id' component={Detail} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;


import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Dev from './pages/Dev'
import Asso from './pages/Asso';
import DlAsso2 from './pages/DlAsso2';
import NotFound from './pages/NotFound';



const App = () => {


  return (

      // Ici on route les différentes expériences
    <BrowserRouter>

      <Switch>

        <Route path="/osLink" exact component = {Home} />
        <Route path="/dev" exact component = {Dev} />
        <Route path="/asso" exact component = {Asso} />
        <Route path="/DlAsso2" exact component = {DlAsso2} />
        <Route component = {NotFound} />

      </Switch>

    
    </BrowserRouter>
    

  );
}

export default App;
